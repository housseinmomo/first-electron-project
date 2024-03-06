// Ce script va nous permettre de faire le pont entre le processus principal et le processus de rendu 
// On definit des fonctions qui ont pour vocation d'acceder le front a communiquer avec le processus principal
const { contextBridge, ipcRenderer  } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping')
})