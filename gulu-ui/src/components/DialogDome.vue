<template>
  <div>
   Dialog 示例
  </div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnclickOverlay="true" :ok="f1" :cancel="f2">
     <template v-slot:content>
       <div>hi</div>
     </template>
     <template v-slot:title>
        <div>提示</div>
     </template>
  </Dialog>
  <!--  如果 closeOnclickOverlay  return false 就会关闭  -->
 <h1>示例2</h1>
 <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {openDialog} from '../lib/openDialog'
import { ref } from 'vue'
export default {
  components:{
    Dialog,
    Button,
  },
  setup(){
    const x = ref(false)
    const toggle =()  =>{
      x.value = !x.value
    }
    const f1 = () =>{
      return true /* 如果return false 就不会关闭 */
    }
    const f2 = () =>{}
    const showDialog = () =>{
      openDialog({
        title:'标题',
        content :'你好',
        ok(){

        },
        cancel(){
          
        }
      })
    }
    return {
      x,toggle,f1,f2,showDialog
    }
  }
}
</script>

