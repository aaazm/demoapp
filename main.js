const {app, BrowserWindow, Tray} = require('electron');
const electron = require('electron');

function CreateWindow() {
    const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
    const win= new BrowserWindow({
        width,
        height,
        // frame: false,
        // scrollBounce:true,
        // kiosk: true,
        altKey: false,
        ctrlKey: false,
        icon: __dirname + 'app_icon/logo.png',
        webPreferences: {
            nodeIntegration: true,
            // contextIsolation: false
        }
     
        // fullscreen: true
    })
    tray = new Tray('app_icon/logo.png');
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




