<template>

        <div class="topnav">
        <router-link to="/" class="logo">
        <svg class="icon" >
    <use xlink:href="#icon-xigua"></use>
</svg>
        </router-link>
        <ul class="menu">
            <li>
              <router-link to="/doc">文档</router-link>
            </li>
        </ul>
        
        <span v-if="toggleMenuButtonVisible"
        class="toggleAside iconfont icon-menu " @click="toggleMenu"></span>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  props:{
    toggleMenuButtonVisible:{
      type:Boolean,
      default:false
    }
  },

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
$color:#007974;
 .topnav {
  color:$color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  position: absolute;
  
 
 .logo {
    max-width: 6em;
    margin-right: auto; 
    
    >svg {
      width: 50px;
      height: 50px;
      
    }
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