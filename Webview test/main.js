const { app, BaseWindow, WebContentsView } = require('electron')

let  win,view1;
const createWindow = () => {
    win = new BaseWindow({
      width: 800,
      height: 600,
      fullscreen:true,
      resizable  : false,
      autoHideMenuBar: true,
    })
  
    view1 = new WebContentsView()
    win.contentView.addChildView(view1)
    view1.webContents.loadURL('http://digital-wall.arkema.com')
    view1.setBounds({ x: 0, y: 0, width: win.getBounds().width, height: win.getBounds().height })

    win.on('resize',(e)=>{
        let winBound = win.getBounds();
        view1.setBounds({x:0,y:0,width: winBound.width, height: winBound.height})
        console.log();
    })
}
app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

