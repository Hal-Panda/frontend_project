<template>
  <div class="xh_home">
    <topBar>{{ title }}</topBar>
    <div class="xh_range">
      <div class="xh_centent">
        <showGoods></showGoods>
      </div>
    </div>
  </div>
</template>

<script>
import topBar from "../components/content/topBar";
import showGoods from "./Home/showGoods";

export default {
  name: "home",
  components: {
    topBar,showGoods
  },
  data() {
    return {
      title: "首页",
    }
  }
}
</script>

<style lang="less" scoped>
.xh_home {
  .xh_range {
    margin-top: 90rem/50;
    height: 1143.6rem/50;
    overflow: scroll;
    background-color: rgba(243, 236, 236, 0.44);
    .xh_centent {
      height: 2000rem/50;
      //background-color: #ff6700;
    }
  }
}


</style>
