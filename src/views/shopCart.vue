<template>
  <div class="xh_shopCart">
    <topBar>{{ title }}</topBar>
    <div class="xh_range">
      <div class="xh_centent">
<!--        <button @click="toLogin">toLogin</button>-->
        <shopCartShow></shopCartShow>
      </div>
    </div>
  </div>
  <mainGuide></mainGuide>
</template>

<script>
import topBar from "../components/content/topBar";
import mainGuide from "../components/common/mainGuide";
import blankPadding from "../components/content/blankPadding";
import shopCartShow from "./ShopCart/shopCartShow";

export default {
  name: "shopCart",
  components:{
    topBar,mainGuide,blankPadding,shopCartShow
  },
  methods:{
    // toLogin(){
    //   this.$router.push('/login')
    // }
  },
  created() {

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
    margin-top: @TopTitleHeigh;
    //height: @MainContantHeigh;
    overflow: hidden;
    padding-bottom: 100px;
    .xh_centent {
      position: relative;

      //height: 2000vw*@Kuan;
      //background-color: #ff6700;
    }
  }
}
</style>
