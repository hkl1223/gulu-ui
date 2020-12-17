import {createWebHashHistory,createRouter} from 'vue-router' 
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDome from './components/SwitchDome.vue'
import ButtonDome from './components/ButtonDome.vue'
import DialogDome from './components/DialogDome.vue'
import TabsDome from './components/TabsDome.vue'
import { h } from 'vue' ;
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
const history = createWebHashHistory()
const md = string =>h(Markdown,{content:string ,key:string}) 
export const router = createRouter({
    history: history,
    routes:[
        {path:'/',component: Home},
        {path:'/Doc',component:Doc,
        children:[
            {path:"",redirect:'/doc/intro'},
            {path:"intro",component:md(intro)},
            {path:"get-started",component:md(getStarted)},
            {path:"install",component:md(install)},
            {path:'switch',component:SwitchDome},
            {path:'button',component:ButtonDome},
            {path:'dialog',component:DialogDome},
            {path:'tabs',component:TabsDome}
        ]}
    ]
})
router.afterEach(()=>{

});