<template>
  <div class="app">
    <router-view/>
  </div>

</template>

<script>
import axios from "axios";

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
.app{
  overflow: scroll;
  height: @Gao*1334vh;
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background: #9e9e9e;
    box-shadow: inset 0 0 5px rgba(0, 122, 204);
  }

  //滚动条底层颜色!
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #b92b2b;

    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(182, 19, 19, 0.47);
  }
}
  background-color: white;
  font-size: 100vw/750 *50;
}


</style>
