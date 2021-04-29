import { app, BrowserWindow } from 'electron'
import { join } from 'path'
let mainWindow: any = null
const env = process.env.environment
const winURL =
  env == 'development'
    ? `http://localhost:${process.env.PORT}`
    : `file://${join(__dirname, '../renderer/index.html')}`

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width: 1050,
    height: 650,
    useContentSize: true,
    resizable: false,
    opacity: 1,
    webPreferences: {
      nodeIntegration: false,
      webSecurity: false,
    },
  })

  mainWindow.loadURL(winURL)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
app.commandLine.appendSwitch('--disable-http-cache')
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
