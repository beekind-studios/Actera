const { app, Menu } = require('electron')

const fileMenuTemplate = [
    {
        label: 'File',
        submenu: [{ role: 'close' }],
    },
]

const editMenuTemplate = [
    {
        label: 'Mode',
        submenu: [
            {
                label: 'Character Dialogue',
                accelerator: 'Ctrl+2',
            },
        ],
    },
]

const viewMenuTemplate = [
    {
        label: 'View',
        submenu: [{ role: 'close' }],
    },
]

const fileMenu = Menu.buildFromTemplate(fileMenuTemplate)
const editMenu = Menu.buildFromTemplate(editMenuTemplate)
const viewMenu = Menu.buildFromTemplate(viewMenuTemplate)
// Menu.setApplicationMenu(fileMenu)

module.exports = {
    fileMenu,
    editMenu,
    viewMenu,
}
