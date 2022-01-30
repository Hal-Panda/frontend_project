<template>
<div class="showSearchByClassify">
  <backTopBar>{{ this.$route.params.classifyName}}</backTopBar>

  <Goods v-bind:toMyClashKey="this.$route.params.classKey"></Goods>
</div>
</template>

<script>
import Goods from "../Home/showGoods/Goods";
import backTopBar from "../../components/common/backTopBar";

export default {
  name: "showSearchByClassify",
  components: {
    Goods, backTopBar,
  },
}
</script>

<style scoped>
.showSearchByClassify{

}
</style>
