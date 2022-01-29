<template>
  <div class="showGoods">
    <showGoodsTopGuide></showGoodsTopGuide>
<!--    <showGoodsSieve></showGoodsSieve>-->
    <Goods></Goods>



  </div>
</template>

<script>

import {request} from "../../network/request";
import showGoodsTopGuide from "./showGoods/showGoodsTopGuide";
import showGoodsSieve from "./showGoods/showGoodsSieve";
import Goods from "./showGoods/Goods";

export default {
  name: "showGoods",
  components:{
    showGoodsTopGuide,showGoodsSieve,Goods
  },

}
</script>

<style lang="less" scoped>
.showGoods{

}

</style>
