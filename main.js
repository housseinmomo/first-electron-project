const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {preload: path.join(__dirname, "preload.js")}
  })

  win.loadFile('index.html');
}

app.whenReady().then(() => {
    // Une fois le msg envoyer par le processus de rendu, le processus main va intercepter le msg 
    // Et retourner une reponse selon le msg 
    // La communication entre les deux processus est asynchrone 
    ipcMain.handle('ping', () => 'pong')
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})