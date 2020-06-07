// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// include the ipc module to communicate with main process.
const ipc = require('electron').ipcRenderer

const closeWindowButton = document.getElementById('close-window')
const maxWindowButton = document.getElementById('maximize-window')
const minWindowButton = document.getElementById('minimize-window')

$('#close-window').click(function() {
    ipc.send('close-current-window') 
})

$('#maximize-window').click(function() {
    ipc.send('maximize-current-window') 
})

$('#minimize-window').click(function() {
    ipc.send('minimize-current-window') 
})

$('.create-new-project').click(function() {
    ipc.send('create-new-project') 
})
