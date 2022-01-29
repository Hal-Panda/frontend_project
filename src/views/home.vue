<template>
  <div class="xh_home" >
    <topBar>
      {{ title }}
      <searchBar></searchBar>
    </topBar>
    <div class="xh_range">
      <div class="xh_centent" >
        <showGoods></showGoods>
      </div>

    </div>
  </div>
  <mainGuide></mainGuide>
</template>

<script>
import topBar from "../components/content/topBar";
import showGoods from "./Home/showGoods";
import mainGuide from "../components/common/mainGuide";
import blankPadding from "../components/content/blankPadding";
import searchBar from "../components/content/searchBar";

export default {
  name: "home",
  components: {
    topBar, showGoods, mainGuide, blankPadding, searchBar
  },
  methods: {
  }
  ,
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
    margin-top: @TopTitleHeigh;
    //height: @MainContantHeigh;
    //overflow: scroll;

    background-color: rgba(243, 236, 236, 0.44);

    .xh_centent {

    }
  }
}


</style>
