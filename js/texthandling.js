// include the ipc module to communicate with main process.
const ipc = require('electron').ipcRenderer

// // Allow the user to press tab in the editable divs.
// $('[contenteditable]').on('keydown', function(e){
//     if(e.keyCode == 9){
//         e.preventDefault();
//         document.execCommand('insertHTML', false, '&#009');
//     }
// }).css('white-space', 'pre-wrap');
