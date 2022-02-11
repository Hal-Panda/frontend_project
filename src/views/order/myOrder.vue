<template>
  <div class="myOrder">
    <backTopBar>我的订单</backTopBar>
    <div class="MO_change">
      <router-link class="SGT_link" @click="chooseSGT(0)" to="#">全部</router-link>
      <router-link class="SGT_link" @click="chooseSGT(1)" to="#">已付款</router-link>
      <router-link class="SGT_link" @click="chooseSGT(2)" to="#">未完成</router-link>
      <router-link class="SGT_link" @click="chooseSGT(3)" to="#">已完成</router-link>
      <router-link class="SGT_link" @click="chooseSGT(4)" to="#">已取消</router-link>
    </div>
    <myOrderShow v-on:toreload="reloadMet" v-bind:orderStatus="status"></myOrderShow>
  </div>

</template>

<script>
import backTopBar from "../../components/common/backTopBar";
import myOrderShow from "./myOrder/myOrderShow";

export default {
  name: "myOrder",
  data(){
    return{
      status:0
    }
  },
  components: {
    backTopBar,myOrderShow
  },
  methods:{
    reloadMet(){
     this.chooseSGT(0)
    },
    chooseSGT(num){
      // var SG = document.getElementsByClassName("SGT_link");
      // SG[num].setAttribute('style', 'color:#ff6700 !important');
      this.status=num;
      this.turnBlack();
      var SG = document.getElementsByClassName("SGT_link");
      SG[num].setAttribute('style', 'color:#ff6700 !important');

    },
    turnBlack(){
      var SG = document.getElementsByClassName("SGT_link");
      SG[0].setAttribute('style', 'color:black !important');
      SG[1].setAttribute('style', 'color:black !important');
      SG[2].setAttribute('style', 'color:black !important');
      SG[3].setAttribute('style', 'color:black !important');
      SG[4].setAttribute('style', 'color:black !important');
    }
  },
  mounted() {
    var SG = document.getElementsByClassName("SGT_link");
    SG[0].setAttribute('style', 'color:#ff6700 !important');
  },
}
</script>

<style lang="less" scoped>
.myOrder {
    .MO_change{
      display: flex;
      box-shadow: @Kuan*0vw @Kuan*1vw @Kuan*4vw #e1e1e1;
      .SGT_link{
        color: black;
        padding: 13vw*@Kuan 0;
        font-size: @Gao*40vh;
        text-align: center;
        flex-grow: 1;
        background-color: @BACKGROUNDCOLOR_NORMAL;

        -webkit-tap-highlight-color: rgba(217, 214, 214, 0.15); //取消默认选中的背景颜色
      }
    }
}
</style>
