import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router' 
import hkl from './components/hkl.vue'
import hkl2 from './components/hkl2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes:[
        {path:'/',component: hkl},
        {path:'/xxx',component:hkl2}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
