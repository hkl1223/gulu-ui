<template>
  <h1>Dialog 组件示例</h1>
   
  <!-- <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnclickOverlay="true" :ok="f1" :cancel="f2">
     <template v-slot:content>
       <div>hi</div>
     </template>
     <template v-slot:title>
        <div>提示</div>
     </template>
  </Dialog>
  <!--  如果 closeOnclickOverlay  return false 就会关闭  -->
 <!-- <h1>示例2</h1>
 <Button @click="showDialog">show</Button>  -->
 <Demo :component="Dialog1Demo"/>
 <Demo :component="Dialog2Demo"/>
</template>


<script lang="ts">
import Demo from './Dome.vue'
import Dialog1Demo from './Dialog1.demo.vue'
import Dialog2Demo from './Dialog2.demo.vue'



export default {
  components:{
    Demo
  },
  setup() {
    return{
      Dialog1Demo,
      Dialog2Demo
    }
  }
}
</script>

