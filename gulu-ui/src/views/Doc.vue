<template>
    <div>
        <Topnav/>
    </div>
    <div class="content">
        <aside>边栏</aside>
        <main>主内容</main>
    </div>
</template>

<script lang="ts">
import Topnav from '../components//Tapnav.vue'
export default {
    components:{Topnav}
}
</script>