// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const { fileMenu, editMenu, viewMenu } = require('./menu')
const path = require('path')
const ipc = require('electron').ipcMain
var mainWindow

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        frame: false,
        spellcheck: true,
        webPreferences: {
            preload: path.join(__dirname, '../preload.js'),
            nodeIntegration: true,
        },
    })

    // menu.append(
    // 	new MenuItem({
    // 		label: "Print",
    // 		accelerator: "F12",
    // 		click: () => {
    // 			mainWindow.webContents.openDevTools()
    // 		},
    // 	})
    // )

    function moveWindow() {
        mainWindow.setPosition(Electron.screen.getCursorScreenPoint)
    }

    // and load the index.html of the app.
    mainWindow.loadFile('index.html')
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// IPC FUNCTIONS
// ----------------

// close window
ipc.on('close-current-window', function () {
    app.quit()
})

// Minimize
ipc.on('minimize-current-window', function () {
    mainWindow.minimize()
})

// Maximize
ipc.on('maximize-current-window', function () {
    mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize()
})

// Once the user presses the 'Create New Project...' button.
ipc.on('create-new-project', function () {
    mainWindow.loadFile('new-script.html')
})

ipc.on('file-menu-click', function () {
    fileMenu.popup()
})

ipc.on('edit-menu-click', function () {
    editMenu.popup()
})

ipc.on('view-menu-click', function () {
    viewMenu.popup()
})
