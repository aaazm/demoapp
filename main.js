const {app, BrowserWindow} = require('electron');
const electron = require('electron');

// app.on('ready', () => {
//   const win = new PDFWindow({
//     width: 800,
//     height: 600,
//     frame: true,
//     scrollBounce:false,
//     kiosk: false,
//   })

//   win.loadURL('http://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf')
// })
function CreateWindow(){
    const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
    const win= new BrowserWindow({
        width,
        height,
        frame: false,
        scrollBounce:true,
        kiosk: true,
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

  

 // Function to create child window of parent one
// function createChildWindow() {
//   childWindow = new BrowserWindow({
//     width: 1000,
//     height: 700,
//     modal: true,
//     show: false,
//     parent: mainWindow, 
//     webPreferences: {
//       nodeIntegration: true,
//       contextIsolation: false,
//       enableRemoteModule: true,
//     },
//   });
  
//   // Child window loads settings.html file
//   childWindow.loadFile("child.html");
// }


