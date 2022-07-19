'use strict'

import { app, protocol, BrowserWindow } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
import { gql,createClient } from '@urql/core';

var Tuio = require('./modules/TuioClass.js');
import { DataController } from './modules/DataController.js'
let win
let contents;
let dataController = new DataController('http://arkema.backoffice.bonjour-lab.com');
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true,stream: true, supportFetchAPI: true } }
])

async function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    useContentSize:true,
    frame:false,
    fullscreen:true,
    webPreferences: {
      
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    }
  })
  contents = win.webContents;
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS3_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
  contents.once('dom-ready', () => {
    dataController.initController();
  });
  
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}


//TUIO


const tuioElement = new Tuio( "0.0.0.0",3333);

tuioElement.event.on('listening',(address)=>{
    console.log("TuioServer listening on: " + address.address + ":" + address.port);
})

tuioElement.event.on('add',(element)=>{
    contents.send( 'tuioAdd' ,element);
})
tuioElement.event.on('update',(element)=>{
    contents.send( 'tuioUpdate' ,element);
})

tuioElement.event.on('delete',(element)=>{
    contents.send( 'tuioDelete' , element);
    let size= win.getContentSize();
    let x = size[0]*element.xPosition;
    let y = size[1]*element.yPosition;
    contents.sendInputEvent({type:'mouseDown', x:x, y: y, button:'left', clickCount: 1});
    setTimeout(()=>{contents.sendInputEvent({type:'mouseUp', x:x, y: y, button:'left', clickCount: 1})},100);
})

dataController.event.on('dataGetted',(data)=>{
  contents.send('console',"dataGetted")
 })
 dataController.event.on('error',(data)=>{
  contents.send( 'error');
 })
 dataController.event.on('setData',(data)=>{
  contents.send( 'initData' ,data);
})


