import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './style.css'
import App from './App.vue'

// Tema oscuro "admin" para Element Plus
document.documentElement.classList.add('dark')

createApp(App).use(ElementPlus).mount('#app')
