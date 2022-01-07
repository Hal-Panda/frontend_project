<template>
  <div class="xh_shopCart">
    <topBar>{{ title }}</topBar>
    <div class="xh_range">
      <div class="xh_centent">
        3
      </div>
    </div>
  </div>
</template>

<script>
import topBar from "../components/content/topBar";

export default {
  name: "shopCart",
  components:{
    topBar
  },
  data(){
    return{
      title:"购物车",
    }
  }
}
</script>

<style lang="less" scoped>
.xh_shopCart{
  .xh_range {
    margin-top: 90rem/50;
    height: 1143.6rem/50;
    overflow: scroll;

    .xh_centent {
      height: 2000rem/50;
      background-color: #ff6700;
    }
  }
}
</style>
