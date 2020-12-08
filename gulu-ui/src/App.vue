<template>
 
 <router-view/>
</template>

<script lang="ts">
import{ provide, Ref, ref } from 'vue'
import { router } from './router';
export default {
  name: 'App',
 setup(){
   const width = document.documentElement.clientWidth;
   const menuVisible = ref(width <=500 ? false:true);
   /* const menuVisible :Ref = ref<boolean>(width>500); */
   provide('menuVisible',menuVisible);
   router.afterEach(() =>{
     if(width<=500){
       menuVisible.value = false;
     }
     
   });
 }
}
</script>
