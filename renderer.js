const information = document.getElementById('info')
information.innerText = `Cette application utilise Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), et Electron (v${versions.electron()})`


const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // Affichera 'pong'
}

// L'execution de fonction va nous permettre d'utiliser la fonction ping se trouvant dans notre fichier de preload 
// La fonction ping (ipcRenderer.invoke) a pour vocation d'envoyer un msg au processus principal
func()