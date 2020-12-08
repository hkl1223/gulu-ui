<template>

        <div class="topnav">
        <div class="logo" @click="toggleMenu">
          logo
        </div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
        <!-- <svg class="icon logo" @click="toggleMenu" aria-hidden="true">
        <use xlink:href="#icon-xigua"></use>
        </svg> -->
        <span class="toggleAside iconfont icon-menu " @click="toggleMenu"></span>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
    setup() {
        const menuVisible = inject<Ref<boolean>>('menuVisible')
        const toggleMenu = ()=>{
            menuVisible.value = !menuVisible.value
        }
        return {toggleMenu}
    }
}
</script>

<style lang="scss" scoped>
 .topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  justify-content: center;
  align-content: center;
 .logo {
    max-width: 6em;
    margin-right: auto;
  }
 .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
 li {
      margin: 0 1em;
    }
  }
  >.toggleAside {
      display: inline-block;
      width: 24px;
      height: 24px;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 24px;
      display: none;
  }
  @media (max-width: 500px){
     >.menu{display: none;} 
     >.logo{margin: 0 auto;}
     >.icon{width: 3em;}
     >.toggleAside{display: inline-block;}
  }
}
</style>