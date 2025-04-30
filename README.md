![API Status](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/smal82/Classifica-Download-Desktop-App/main/api-status.json)

# ✨ Classifica Download Desktop App 🚀

Questa è un'applicazione desktop che visualizza in tempo reale la classifica dei download fornita da una REST API. Utilizza Electron ⚛️ per creare un'applicazione multipiattaforma 💻 🖥️ 📱 con tecnologie web (HTML 🌐, CSS 🎨, JavaScript 📜) e Node.js 📦 per la comunicazione con l'API.

## ✨ Funzionalità

* Visualizzazione tabellare 📊 della classifica "Distro" e "Download".
* Aggiornamento automatico dei dati ogni 60 secondi ⏱️.
* Intestazione della tabella fissa 📌 durante lo scrolling.
* Applicazione desktop multipiattaforma (Windows 🪟, macOS 🍎, Linux 🐧).

## ⚙️ Come Funziona

L'applicazione è strutturata come un'applicazione Electron:

* **Processo Principale (`main.js`):** Gestisce la creazione della finestra dell'applicazione 🖼️ e esegue in background la logica per recuperare i dati dalla REST API (`https://smal82.netsons.org/wp-json/mct/v1/classifica`) utilizzando `node-fetch`. I dati vengono poi inviati al processo di rendering tramite `ipcMain` ↔️.
* **Processo di Rendering (`index.html` 📄, `renderer.js` 📜):** `index.html` definisce la struttura dell'interfaccia utente (una tabella <table>). `renderer.js` è uno script eseguito all'interno della finestra che riceve i dati dal processo principale e aggiorna dinamicamente la tabella HTML 🔄.
* **Preload Script (`preload.js` 🛡️):** Fornisce un ponte sicuro tra il processo di rendering e il processo principale, esponendo solo le funzionalità necessarie.
* **Stili (`style.css` 💅):** Contiene gli stili CSS per l'aspetto dell'applicazione, incluso l'effetto di intestazione fissa 📌.

## 💾 Installazione

Segui questi passaggi per installare e avviare l'applicazione sul tuo sistema operativo:

### 🛠️ Prerequisiti: Node.js e npm (o yarn)

L'applicazione richiede Node.js 📦 e il suo gestore di pacchetti `npm` (installato con Node.js) o `yarn`.

#### 🪟 Windows

1.  **Scarica Node.js:** Vai al sito ufficiale di Node.js ([https://nodejs.org/](https://nodejs.org/)) e scarica l'installer per Windows (consigliata la versione LTS ✅).
2.  **Installa Node.js:** Esegui l'installer scaricato e segui le istruzioni. `npm` verrà installato automaticamente con Node.js.
3.  **Verifica l'installazione:** Apri il Prompt dei comandi ⌨️ e digita `node -v` e `npm -v`. Dovresti vedere i numeri di versione di Node.js e npm.

#### 🍎 macOS

Esistono diversi modi per installare Node.js su macOS:

1.  **Tramite il sito ufficiale:** Vai al sito ufficiale di Node.js ([https://nodejs.org/](https://nodejs.org/)) e scarica l'installer per macOS (consigliata la versione LTS ✅). Esegui l'installer e segui le istruzioni.
2.  **Utilizzando Homebrew (consigliato 👍):** Se hai Homebrew installato, apri il Terminale 💻 e digita:
    ```bash
    brew install node
    ```
    `npm` verrà installato automaticamente con Node.js.
3.  **Verifica l'installazione:** Apri il Terminale 💻 e digita `node -v` e `npm -v`.

#### 🐧 Linux

Il processo di installazione di Node.js su Linux può variare a seconda della distribuzione. Ecco alcuni metodi comuni:

1.  **Tramite il gestore di pacchetti della distribuzione (potrebbe non essere l'ultima versione 🤔):**
    * **Debian/Ubuntu:**
        ```bash
        sudo apt update
        sudo apt install nodejs npm
        ```
    * **Fedora/CentOS:**
        ```bash
        sudo dnf install nodejs npm
        ```
    * **Arch Linux:**
        ```bash
        sudo pacman -S node npm
        ```
2.  **Utilizzando NodeSource (per versioni più recenti ✨):** Visita la pagina di NodeSource ([https://github.com/nodesource/distributions](https://github.com/nodesource/distributions)) per le istruzioni specifiche per la tua distribuzione Linux.
3.  **Verifica l'installazione:** Apri il Terminale 💻 e digita `node -v` e `npm -v`.

### 🚀 Installazione e Avvio dell'Applicazione

Una volta installato Node.js e npm (o yarn), segui questi passaggi per eseguire l'applicazione:

1.  **Clona il repository:** Se non l'hai già fatto, clona questo repository GitHub sul tuo computer utilizzando Git 🐙:
    ```bash
    git clone https://github.com/smal82/Classifica-Download-Desktop-App
    cd Classifica-Download-Desktop-App
    ```
2.  **Installa le dipendenze:** Naviga nella directory del repository nel tuo terminale 💻 ed esegui **uno** dei seguenti comandi, a seconda del gestore di pacchetti che preferisci:

    * **Con npm:**
        ```bash
        npm install electron node-fetch
        ```
        Questo comando installerà le dipendenze `electron` e `node-fetch` specificate nel file `package.json`.

    * **Con yarn:**
        ```bash
        yarn add electron node-fetch
        ```
        Questo comando aggiungerà le dipendenze `electron` e `node-fetch` al tuo progetto.

3.  **Avvia l'applicazione:** Esegui il comando per avviare l'applicazione Electron ▶️:
    ```bash
    npm start
    # oppure se hai usato yarn:
    yarn start
    ```

L'applicazione dovrebbe aprirsi mostrando la classifica dei download 📊. I dati si aggiorneranno automaticamente ogni 60 secondi ⏱️ e l'intestazione della tabella rimarrà fissa 📌 durante lo scrolling.

## 📝 Note

* Assicurati di avere una connessione internet attiva 🌐 per recuperare i dati dalla REST API.
* Per il debug 🐞, puoi aprire gli strumenti di sviluppo di Electron premendo `Ctrl + Shift + I` (o `Cmd + Option + I` su macOS) mentre l'applicazione è in esecuzione.

## 👨‍💻 Crediti

smal82

## 📄 Licenza

Questo progetto è rilasciato sotto la **GNU General Public License v3.0** 📜. Puoi trovare maggiori informazioni sulla licenza qui: [https://www.gnu.org/licenses/gpl-3.0.html](https://www.gnu.org/licenses/gpl-3.0.html). Vedi anche il file [LICENSE](LICENSE) per il testo completo della licenza.
