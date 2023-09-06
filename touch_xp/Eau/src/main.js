import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import { register } from 'swiper/element/bundle';
// register();
const app = createApp(App)

window.ipcRenderer.on('init-data', (_event, message) => {
  app.config.globalProperties.$datas = message;
  app.mount('#app').$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'))
})

// createApp(App).mount('#app').$nextTick(() => {
//   // Remove Preload scripts loading
//   postMessage({ payload: 'removeLoading' }, '*')

//   // Use contextBridge
//   window.ipcRenderer.on('main-process-message', (_event, message) => {
//     console.log(message)
//   })
// })
