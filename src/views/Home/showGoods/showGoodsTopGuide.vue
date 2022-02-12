<template>
<div class="showGoodTopGuide">
  <router-link class="SGT_link" @click="chooseSGT(0)" to="#">热销</router-link>
  <router-link class="SGT_link" @click="chooseSGT(1)" to="#">店铺</router-link>
  <router-link class="SGT_link" @click="chooseSGT(2)" to="#">社区</router-link>
</div>
</template>

<script>
export default {
  name: "showGoodsTopGuide",
  methods:{
    chooseSGT(num){
      // var SG = document.getElementsByClassName("SGT_link");
      // SG[num].setAttribute('style', 'color:#ff6700 !important');
      if (num==1){
        alert("功能暂未开放")
        return
      }
      else if (num==2){
        alert("功能暂未开放")
        return;
      }
      this.turnBlack();
      var SG = document.getElementsByClassName("SGT_link");
      SG[num].setAttribute('style', 'color:#ff6700 !important');

    },
    turnBlack(){
      var SG = document.getElementsByClassName("SGT_link");
      SG[0].setAttribute('style', 'color:black !important');
      SG[1].setAttribute('style', 'color:black !important');
      SG[2].setAttribute('style', 'color:black !important');
    }
  },
  mounted() {
    var SG = document.getElementsByClassName("SGT_link");
    SG[0].setAttribute('style', 'color:#ff6700 !important');
  },
}
</script>

<style lang="less" scoped>
.showGoodTopGuide{
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
</style>
