<template>
    <div>
        <Topnav />
    </div>
    <div class="content">
        <aside v-if="menuVisible">
            <h2>组件列表</h2>
            <ol>
                <li>
                    <router-link to="/Doc/Switch">Switch 组件</router-link>
                    </li>
                <li>
                    <router-link to="/Doc/button">Button 组件</router-link>
                    </li>
                <li>
                    <router-link to="/Doc/dialog">Dialog 组件</router-link>
                    </li>
                <li>
                    <router-link to="/Doc/tabs">Tabs 组件</router-link>
                    </li>
            </ol>
        </aside>
        <main>
            <router-view/>
        </main>
    </div>
</template>

<script lang="ts">
import Topnav from '../components//Tapnav.vue';
import { inject, Ref } from 'vue';
export default {
    components:{Topnav},
     setup() {
        const menuVisible = inject<Ref<boolean>>('menuVisible')
        return{menuVisible}
    }
}
</script>

<style lang="scss" scoped>
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  
  h2 {
    margin-bottom: 4px;
  }
 ol {
 li {
      padding: 4px 0;
    }
  }
  @media (max-width:500px){
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
</style> 