module.exports = {
    pluginOptions: {
      electronBuilder: {
        //preload: 'src/preload.js',
        nodeIntegration: true,
        builderOptions: {
          asar: false,
          // asarUnpack:[
          //   "data"
          // ]
        }
      }
    }
  }