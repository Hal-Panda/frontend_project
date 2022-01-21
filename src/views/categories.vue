<template>
  <div class="xh_categorues">
    <topBar>{{ title }}</topBar>
    <div class="xh_range">
      <div class="xh_centent">
        <showCategories></showCategories>
      </div>
      <blankPadding></blankPadding>
    </div>
  </div>
  <mainGuide></mainGuide>
</template>

<script>
import topBar from "../components/content/topBar";
import mainGuide from "../components/common/mainGuide";
import showCategories from "./Categories/showCategories";
import blankPadding from "../components/content/blankPadding";

export default {
  name: "categories",
  components: {
    topBar, mainGuide, showCategories,blankPadding
  },
  data() {
    return {
      title: "分类",
    }
  }
}
</script>

<style lang="less" scoped>
.xh_categorues {
  .xh_range {
    margin-top: @TopTitleHeigh;
    //height: @MainContantHeigh;
    //overflow: scroll;
    .xh_centent{

    }
  }
}
</style>
