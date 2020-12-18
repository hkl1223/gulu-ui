<template>
<div>
<div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
        <h1>西瓜 UI</h1>
        <h2>一个超厉害的 UI 框架</h2>
        <p class="actions">
            <a href="https://github.com/hkl1223/gulu-ui">GitHub</a>
            <router-link to="/Doc">开始</router-link>
        </p>
    </div>
</div>
<div class="features">
  <ul>
    <li>
     <svg class="icon" >
    <use xlink:href="#icon-vue"></use>
</svg>
    <h3>基于 Vue 3</h3>
    <p>骄傲地使用了 Vue 3 Composition API</p>
</li>
<li>
     <svg class="icon" >
    <use xlink:href="#icon-ts"></use>
</svg>
<h3>基于 TypeScript </h3>
<p>源码采用 TypeScript 书写（非严格检查）</p>
</li>
<li>
     <svg class="icon" >
    <use xlink:href="#icon-light"></use>
</svg>
<h3>代码易读</h3>
<p>每个组件的源码都极其简洁</p>
</li>
</ul>
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
$green:#02bcd0;
$border-radius:4px;
$color:#007974;

.topnavAndBanner{
  background: linear-gradient(145deg, rgba(227,255,253,1) 0%, rgb(150, 243, 150)100%,);
  clip-path: ellipse(80% 60% at 50% 40%);
}

.banner {
  color: $color;
  padding: 110px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 .actions{
    padding: 8px 0;
  a {
      margin:0 8px;
      background: rgb(255, 87, 107);
      color: #fff;
      display: inline-block;
      padding: 8px  24px;
      border-radius: $border-radius;

      &:hover{
        text-decoration: none;
      }
    }
  }
}

.features {
  margin: 64px auto;
  padding: 0 16px;

@media (min-width:800px) {
  width: 800px;

  >ul{
    >li{
      width:50%;
    }
  }
}
@media(min-width: 1200px){
  width: 1200px;

  >ul{
    >li{
      width: 33.3333%;
    }
  }
}
 >ul {
   display: flex;
   flex-wrap: wrap;

 >li{
   margin: 30px 0;
   display: grid;
   justify-content: start;
   align-content: space-between;
   grid-template-areas: 
   "icon title"
   "icon text";
   grid-template-columns: 80px auto;
   grid-template-rows:1fr auto ;
 
 >svg {
   grid-area: icon;
   width: 64px;
   height: 64px;
 }
 >h3{
   grid-area: title;
   font-size: 28px;
 }
 >p{
   grid-area: text;
 }
}
}
}
</style>