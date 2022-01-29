<template>
  <div class="app" >
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
    mainGuide,
  },
  methods:{

  }
  // created() {
  //   // 获取当前可视区域的高度
  //   const height = document.documentElement.clientHeight;
  //
  //   }
  // mounted() {
  //   //首次进入的原始高度
  //   // document.documentElement.clientHeight.toFixed("900");
  //   alert(document.documentElement.clientHeight)
  //   this.originalHeight = document.documentElement.clientHeight;
  //   window.addEventListener('resize', this.watchResize);
  // },
  //
  // beforeDestroy() {
  //   window.removeEventListener("resize", this.watchResize);
  // },
  //
  // watch: {
  //   screenHeight(newHeight) { //监听屏幕高度变化
  //     alert(document.documentElement.clientHeight)
  //
  //     // this.isShow = this.originalHeight <= newHeight;
  //   }
  // },
  //
  // methods: {
  //   watchResize() {
  //     //实时变化的窗口高度
  //     // document.documentElement.clientHeight=667;
  //     this.screenHeight = document.documentElement.clientHeight;
  //   },
  //
  // },
  //
  // data(){
  //   return {
  //     originalHeight: 0, //原始高度
  //     screenHeight: 0, //实时高度
  //     isShow: true,
  //   }
  // }
}
</script>

<style  lang="less">
html{
.app{

}
  background-color: white;
  font-size: 100vw/750 *50;
}


</style>
