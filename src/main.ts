import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'
import './styles/common.css' // vite 使用 sass 只需 npm i -D sass，这个和 webpack 不一样

createApp(App)
.use(router)
.use(store)
.mount('#app')
