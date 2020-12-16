<template>
  <h1>Tabs 组件示例</h1>
  <Demo :component="Tabs1Demo"/>
</template>

<script lang="ts">
 import Demo from './Dome.vue'
 import Tabs1Demo from './Tabs1.demo.vue'
 export default {
   components :{
     Demo
   },
   setup(){
     return {
       Tabs1Demo
     }
   }
 }
</script>
