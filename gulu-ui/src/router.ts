import {createWebHashHistory,createRouter} from 'vue-router' 
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDome from './components/SwitchDome.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes:[
        {path:'/',component: Home},
        {path:'/Doc',component:Doc,children:[
            {path:'switch',component:SwitchDome}
        ]}
    ]
})
router.afterEach(()=>{

});