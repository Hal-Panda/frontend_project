<template>
<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </div>-->
  <div class="app">
    <router-view/>
    <mainGuide></mainGuide>
  </div>

</template>

<script>
require("./assets/css/reset.css")
require("./assets/css/fontIconcss/all.css")
import mainGuide from "./components/common/mainGuide.vue"
import topBar from "./components/content/topBar.vue";
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
