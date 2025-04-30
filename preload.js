const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    receiveData: (callback) => ipcRenderer.on('api-data', callback)
});