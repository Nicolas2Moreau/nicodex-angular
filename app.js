const {
    app,
    BrowserWindow
} = require('electron')
const path = require('path')
let appWindow
let appPath
function createWindow() {
    appWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
          },
          options:{
			fullscreen:true
		}
    })
    appWindow.loadFile('./dist/nicodex-app/index.html')
    // appWindow.loadURL(url.format({
    //     pathname: path.join(__dirname, './dist/nicodex-app/index.html'),
    //     protocol: 'file:',
    //     slashes: true
    //   }))
    appWindow.on('closed', function(){
        appWindow = null
    })
    // appWindow.webContents. 
    appWindow.setMenu(null);

  
    appWindow.setFullScreen(true);
    appWindow.maximize();
}
app.whenReady().then(()=> {
    appPath=app.getAppPath();
    console.log(appPath);
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createWindow()
        }
      })
})
