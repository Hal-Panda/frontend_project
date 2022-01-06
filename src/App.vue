<template>
<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </div>-->
<!--  <router-view/>-->
  <mainGuide></mainGuide>
</template>

<script>
require("./assets/css/reset.css")
import mainGuide from "./views/mainGuide.vue"
export default {
  name: 'App',
  components: {
    mainGuide
  }
}
</script>

<style  lang="less">
html{
  background-color: white;
  font-size: 100vw/750 *50;
}
</style>
