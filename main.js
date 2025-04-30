const { app, BrowserWindow, ipcMain, session } = require('electron'); // Importa 'session'
const path = require('path');
const nodeFetch = require('node-fetch');
const fetch = nodeFetch.default; // Prova ad accedere alla funzione 'default'

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false, // Più sicuro se non devi accedere direttamente a Node.js dal renderer
            contextIsolation: true, // Ulteriore sicurezza
            preload: path.join(__dirname, 'preload.js') // Script da eseguire prima del caricamento della pagina web
        }
    });

    mainWindow.loadFile('index.html');

    // Definisci la Content Security Policy una volta, dopo la creazione della finestra
    mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
        callback({
            responseHeaders: {
                ...details.responseHeaders,
                'Content-Security-Policy': [
                    "default-src 'self';",
                    "script-src 'self';",
                    "style-src 'self' 'unsafe-inline';",
                    "img-src 'self' data:;",
                    "connect-src 'self' https://smal82.netsons.org; ",
                    "font-src 'self';",
                    "object-src 'none';",
                    "frame-src 'none'"
                ]
            }
        });
    });

    // Apri gli strumenti di sviluppo (per il debug)
    // mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
    if (mainWindow === null) createWindow();
});

// Funzione per recuperare i dati dall'API
async function fetchData() {
    console.log('Inside fetchData:', typeof fetch); // Aggiungi questo log
    try {
        const response = await fetch('https://smal82.netsons.org/wp-json/mct/v1/classifica');
        if (!response.ok) {
            console.error(`Errore API: ${response.status}`);
            return null;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Errore durante la fetch: ${error}`);
        return null;
    }
}

// Invia i dati al processo di rendering
async function sendDataToRenderer() {
    const data = await fetchData();
    if (data) {
        mainWindow.webContents.send('api-data', data);
    }
}

// Aggiorna i dati periodicamente
setInterval(sendDataToRenderer, 60000);

// Invia i dati iniziali all'avvio
app.whenReady().then(sendDataToRenderer);