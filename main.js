const {app, BrowserWindow} =require('electron');
const electron = require('electron');
const { autoUpdater } = require("electron-updater")
const { ipcMain } = require('electron')
function CreateWindow(){
    const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
    const win= new BrowserWindow({
        width,
        height,
        // frame: false,
        // scrollBounce:true,
        // kiosk: true,
        webPreferences: {
            nodeIntegration: true
        }
     
        // fullscreen: true
    })
    win.loadFile('index.html');
    // win.webContents.openDevTools();
}

app.whenReady().then(CreateWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })

  
autoUpdater.on('checking-for-update', () => {
  dispatch('Checking for update...')
})

autoUpdater.on('update-available', (info) => {
  dispatch('Update available.')
})

autoUpdater.on('update-not-available', (info) => {
  dispatch('Update not available.')
})

autoUpdater.on('error', (err) => {
  dispatch('Error in auto-updater. ' + err)
})

autoUpdater.on('download-progress', (progressObj) => {
  let log_message = "Download speed: " + progressObj.bytesPerSecond
  log_message = log_message + ' - Downloaded ' + progressObj.percent + '%'
  log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')'
  dispatch(log_message)

    win.webContents.send('download-progress', progressObj.percent)

})

autoUpdater.on('update-downloaded', (info) => {
  dispatch('Update downloaded')
})

ipcMain.on('app_version', (event) => {
  event.sender.send('app_version', { version: app.getVersion() });
});


  
 
