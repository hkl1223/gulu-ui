import {createWebHashHistory,createRouter} from 'vue-router' 
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDome from './components/SwitchDome.vue'
import ButtonDome from './components/ButtonDome.vue'
import DialogDome from './components/DialogDome.vue'
import TabsDome from './components/TabsDome.vue'
import DocDome from './components/DocDome.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes:[
        {path:'/',component: Home},
        {path:'/Doc',component:Doc,
        children:[
            {path:"",component:DocDome},
            {path:'switch',component:SwitchDome},
            {path:'button',component:ButtonDome},
            {path:'dialog',component:DialogDome},
            {path:'tabs',component:TabsDome}
        ]}
    ]
})
router.afterEach(()=>{

});