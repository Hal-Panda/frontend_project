<template>
<div class="showGoodsSieve">
  <div @click="chooseTab(0)" class="SG_Sieve">综合</div>
  <div @click="chooseTab(1)" class="SG_Sieve">价格 <span v-bind:class="logoClass"></span></div>
  <div @click="chooseTab(2)" class="SG_Sieve">销量</div>
</div>
</template>

<script>
export default {
  name: "showGoodsSieve",
  methods:{
    chooseTab(num){
      this.turnBlack();
      if (num==0){
        var SG = document.getElementsByClassName("SG_Sieve");
        SG[num].setAttribute('style', 'color:#ff6700 !important');
      }

      else if (num==1){
        var SG = document.getElementsByClassName("SG_Sieve");
        SG[num].setAttribute('style', 'color:#ff6700 !important');
        if (this.logoClass=="fa fa-angle-up"){
          this.logoClass=this.logoClassDown;
        }
        else {
          this.logoClass=this.logoClassUp;
        }
      }

      else if (num=2){
        var SG = document.getElementsByClassName("SG_Sieve");
        SG[num].setAttribute('style', 'color:#ff6700 !important');
      }
    },
    turnBlack(){
      var SG = document.getElementsByClassName("SG_Sieve");
      SG[0].setAttribute('style', 'color:black !important');
      SG[1].setAttribute('style', 'color:black !important');
      SG[2].setAttribute('style', 'color:black !important');
    }
  },
  mounted() {
    var SG = document.getElementsByClassName("SG_Sieve");
    SG[0].setAttribute('style', 'color:#ff6700 !important');
  },
  data(){
    return{
      logoClass:"fa fa-angle-up",
      logoClassUp:"fa fa-angle-up",
      logoClassDown:"fa fa-angle-down",
    }
  },
}
</script>

<style lang="less" scoped>
.showGoodsSieve{
  position: sticky;
  top:@TopTitleHeigh;
  background-color:white;
  //top:@Gao*150vh;
  //width: 100%;
  z-index: 9;
  display: flex;
  .SG_Sieve{
    //top:@Gao*350vh;
    flex-grow: 1;
    text-align: center;
    font-size: @Gao*40vh;
    line-height:@Gao*80vh ;
    span{
      font-size: @Gao*30vh;
    }
  }
}

</style>
