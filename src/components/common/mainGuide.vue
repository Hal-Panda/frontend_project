<template>
  <div class="xh_mainGuide">
    <input id="first" name="type" type="radio">
    <input id="second" name="type" type="radio">
    <input id="third" name="type" type="radio">
    <input id="four" name="type" type="radio">
    <div id="tab" class="tab"></div>
    <label for="first" >
      <router-link id="fir" class="g_rou" to="/">
        <div class="fa fa-university icon1"></div>
        <div class="font1">首页</div>
      </router-link>
    </label>
    <label for="second">
      <router-link class="g_rou" to="/categories">
        <div class="fa fa-bars icon2"></div>
        <div class="font2">分类</div>
      </router-link>
    </label>
    <label for="third">
      <router-link class="g_rou" to="/shopCart">
        <div class="fa fa-shopping-cart icon3"></div>
        <div class="font3">购物车</div>
      </router-link>
    </label>
    <label for="four">
      <router-link class="g_rou" to="/user">
        <div class="fa fa-user icon4"></div>
        <div class="font4">用户</div>
      </router-link>
    </label>
  </div>
</template>
<script>
export default {
  name: "mainGuide",
  methods: {
    // first() {
    //   this.TURNBLAKE();
    //   var tab = document.getElementById('tab');
    //   tab.setAttribute('style', 'left: 0 !important');
    //   var tab2=document.getElementsByClassName('g_rou');
    //   tab2[0].setAttribute('style', 'color: white !important');
    // },
    // second() {
    //   this.TURNBLAKE();
    //   var tab = document.getElementById('tab');
    //   tab.setAttribute('style', 'left: 25% !important');
    //   var tab2=document.getElementsByClassName('g_rou');
    //   tab2[1].setAttribute('style', 'color: white !important');
    // },
    // third() {
    //   this.TURNBLAKE();
    //   var tab = document.getElementById('tab');
    //   tab.setAttribute('style', 'left: 50% !important');
    //   var tab2=document.getElementsByClassName('g_rou');
    //   tab2[2].setAttribute('style', 'color: white !important');
    // },
    // four() {
    //   this.TURNBLAKE();
    //   var tab = document.getElementById('tab');
    //   tab.setAttribute('style', 'left: 75% !important');
    //   var tab2=document.getElementsByClassName('g_rou');
    //   tab2[3].setAttribute('style', 'color: white !important');
    // },
    // TURNBLAKE(){
    //   var tab2=document.getElementsByClassName('g_rou');
    //   tab2[0].setAttribute('style', 'color: black !important');
    //   tab2[1].setAttribute('style', 'color: black !important');
    //   tab2[2].setAttribute('style', 'color: black !important');
    //   tab2[3].setAttribute('style', 'color: black !important');
    // }
    TURNWHITE(i){
      let tab2=document.getElementsByClassName('g_rou');
      tab2[i].setAttribute('style', 'color: white !important');
    }
  },
  mounted() {
    let mypath= this.$route.path;

    if(mypath==("/")){
      let tab = document.getElementById('tab');
      tab.setAttribute('style', 'left: 0% !important');
      this.TURNWHITE(0);
    }
    else if(mypath==("/categories")){
      var tab = document.getElementById('tab');
      tab.setAttribute('style', 'left: 25% !important');
      this.TURNWHITE(1);
    }
    else if (mypath==("/shopCart")){
      var tab = document.getElementById('tab');
      tab.setAttribute('style', 'left: 50% !important');
      this.TURNWHITE(2);
    }
    else if(mypath==("/user")){
      var tab = document.getElementById('tab');
      tab.setAttribute('style', 'left: 75% !important');
      this.TURNWHITE(3);
    }
  }
}
</script>
<style lang="less" scoped>
@HEIGHT:@BottomGuideHeigh;
@ICON_SIZE:@BottomGuideHeigh/2.4;
@FONT_SIZE:@BottomGuideHeigh/5;
@FONT_COLOR: #313131;
@BACAKGROUD_COLOR: rgb(229, 229, 229);
@BLOCKC_COLOR:linear-gradient(45deg, #fc6076 0%, #ff9a44 100%);
@RADIUS:@Gao*6vh;
@BOX_SHADOW: 0 -@Gao*2vh @Gao*2vh rgba(0, 0, 0, 0.2);
.xh_mainGuide {
  z-index: 9;
  display: flex;
  position: fixed;
  bottom: 0;
  height: @HEIGHT;
  width: 100%;
  box-shadow:@BOX_SHADOW;
  border-radius: @RADIUS;
  input {
    display: none;
  }
  .tab {
    position: absolute;
    height: 100%;
    width: 25%;
    top: 0;
    left: -25%;
    background:@BLOCKC_COLOR ;
    border-radius: @RADIUS;
    z-index: 9;
    //transition: .6s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  }
  background-color:@BACAKGROUD_COLOR;
  label {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); //取消默认选中的背景颜色
    display: block;
    //padding-top: 4rem/50;
    text-align: center;
    flex-grow: 1;
    z-index: 99;
    .g_rou {
      text-decoration: none;
      color: @FONT_COLOR;
      .icon1{
        position: absolute;
        top: @Gao*25vh;
        left: 7%;
        font-size: @ICON_SIZE;
        line-height:@ICON_SIZE ;
      }
      .icon2{
        position: absolute;
        top: @Gao*25vh;
        left: 31%;
        font-size: @ICON_SIZE;
        line-height:@ICON_SIZE ;
      }
      .icon3{
        position: absolute;
        top: @Gao*25vh;
        left: 55%;
        font-size: @ICON_SIZE;
        line-height:@ICON_SIZE ;
      }
      .icon4{
        position: absolute;
        top: @Gao*25vh;
        left: 83%;
        font-size: @ICON_SIZE;
        line-height:@ICON_SIZE ;
      }
      .font1{
        position: absolute;
        top: @Gao*40vh;
        left: 14%;
        font-size: @FONT_SIZE;
        line-height:@FONT_SIZE ;
      }
      .font2{
        position: absolute;
        top: @Gao*40vh;
        left: 37%;
        font-size: @FONT_SIZE;
        line-height:@FONT_SIZE ;
      }
      .font3{
        position: absolute;
        top: @Gao*40vh;
        left: 63%;
        font-size: @FONT_SIZE;
        line-height:@FONT_SIZE ;
      }
      .font4{
        position: absolute;
        top: @Gao*40vh;
        left: 89%;
        font-size: @FONT_SIZE;
        line-height:@FONT_SIZE ;
      }
    }
  }
}
</style>
