<template>
  <div class="showGoods">
    <showGoodsTopGuide></showGoodsTopGuide>
    <Goods></Goods>



  </div>
</template>

<script>

import {request} from "../../network/request";
import showGoodsTopGuide from "./showGoods/showGoodsTopGuide";
import Goods from "./showGoods/Goods";

export default {
  name: "showGoods",
  components:{
    showGoodsTopGuide,Goods
  },

}
</script>

<style lang="less" scoped>
.showGoods{

}

</style>
