<template>
<div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
        <h1>西瓜 UI</h1>
        <h2>一个超厉害的 UI 框架</h2>
        <p class="actions">
            <a href="">GitHub</a>
            <router-link to="/Doc">开始</router-link>
        </p>
    </div>
</div>
</template>

<script lang="ts">
import Topnav from "../components/Tapnav.vue";
export default {
    components:{ Topnav },
};
</script>

<style lang="scss" scoped>
.topnavAndBanner{
  background: rgb(227,255,253);
  background: linear-gradient(145deg, rgba(227,255,253,1) 0%, rgba(227,255,253,1) 55%, rgba(0,212,255,1) 100%);
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 .actions{
    padding: 8px 0;
  a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>