<template>
  <div class="xh_home">
    <topBar>{{ title }}</topBar>
    <div class="xh_range">
      <div class="xh_centent">
        <showGoods></showGoods>
      </div>
      <blankPadding></blankPadding>
    </div>
  </div>
  <mainGuide></mainGuide>
</template>

<script>
import topBar from "../components/content/topBar";
import showGoods from "./Home/showGoods";
import mainGuide from "../components/common/mainGuide";
import blankPadding from "../components/content/blankPadding";

export default {
  name: "home",
  components: {
    topBar,showGoods,mainGuide,blankPadding
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
  .xh_range::-webkit-scrollbar
  {
    /*滚动条整体样式*/
    width: 8px;     /*高宽分别对应横竖滚动条的尺寸*/  height: 1px;
  }
  .AddStyle::-webkit-scrollbar-thumb
  {
    /*滚动条里面小方块*/
    border-radius: 10px;  background: #9e9e9e;  box-shadow: inset 0 0 5px rgba(0, 122, 204);
  }
  //滚动条底层颜色!
  .AddStyle::-webkit-scrollbar-track
  {
    border-radius: 10px;  background: #ededed;

    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba( 0, 0, 0, .1);
  }
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
