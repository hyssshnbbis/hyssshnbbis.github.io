import '@/assets/css/main.css'
import 'virtual:uno.css'
import Antd from 'ant-design-vue'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from './pages/main.vue'
import MissKeyTosView from './pages/misskey-tos.vue'
import App from '@/App.vue'

const app = createApp (App)

const routes = [
  { path: '/', component: MainView },
  { path: '/misskey-tos', name: 'misskey', component: MissKeyTosView },
]

const router = createRouter ({
  history: createWebHashHistory (),
  routes,
})
app.use (Antd)
app.use (router)
app.mount ('#app')
