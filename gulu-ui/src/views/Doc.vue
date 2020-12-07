<template>
    <div>
        <Topnav />
    </div>
    <div class="content">
        <aside>
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
        <main>主内容</main>
    </div>
</template>

<script lang="ts">
import Topnav from '../components//Tapnav.vue'
export default {
    components:{Topnav}
}
</script>