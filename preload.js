const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('oath', {
  pickFiles: () => ipcRenderer.invoke('pick-files'),
  pickFolder: () => ipcRenderer.invoke('pick-folder')
});
