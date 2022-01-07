<template>
  <div class="xh_mainGuide">
    <input id="first" name="type" type="radio">
    <input id="second" name="type" type="radio">
    <input id="third" name="type" type="radio">
    <input id="four" name="type" type="radio">
    <div id="tab" class="tab"></div>
    <label for="first" @click="first()" >
      <router-link id="fir" class="g_rou" to="/">
        <div class="fa fa-university icon"></div>
        <div class="font">首页</div>
      </router-link>
    </label>
    <label for="second" @click="second()">
      <router-link class="g_rou" to="/categories">
        <div class="fa fa-bars icon"></div>
        <div class="font">分类</div>
      </router-link>
    </label>
    <label for="third" @click="third()">
      <router-link class="g_rou" to="/shopCart">
        <div class="fa fa-shopping-cart icon"></div>
        <div class="font">购物车</div>
      </router-link>
    </label>
    <label for="four" @click="four()">
      <router-link class="g_rou" to="/user">
        <div class="fa fa-user icon"></div>
        <div class="font">用户</div>
      </router-link>
    </label>
  </div>
</template>
<script>
export default {
  name: "mainGuide",
  methods: {
    first() {
      this.TURNBLAKE();
      var tab = document.getElementById('tab');
      tab.setAttribute('style', 'left: 0 !important');
      var tab2=document.getElementsByClassName('g_rou');
      tab2[0].setAttribute('style', 'color: white !important');
    },
    second() {
      this.TURNBLAKE();
      var tab = document.getElementById('tab');
      tab.setAttribute('style', 'left: 25% !important');
      var tab2=document.getElementsByClassName('g_rou');
      tab2[1].setAttribute('style', 'color: white !important');
    },
    third() {
      this.TURNBLAKE();
      var tab = document.getElementById('tab');
      tab.setAttribute('style', 'left: 50% !important');
      var tab2=document.getElementsByClassName('g_rou');
      tab2[2].setAttribute('style', 'color: white !important');
    },
    four() {
      this.TURNBLAKE();
      var tab = document.getElementById('tab');
      tab.setAttribute('style', 'left: 75% !important');
      var tab2=document.getElementsByClassName('g_rou');
      tab2[3].setAttribute('style', 'color: white !important');
    },
    TURNBLAKE(){
      var tab2=document.getElementsByClassName('g_rou');
      tab2[0].setAttribute('style', 'color: black !important');
      tab2[1].setAttribute('style', 'color: black !important');
      tab2[2].setAttribute('style', 'color: black !important');
      tab2[3].setAttribute('style', 'color: black !important');
    }
  },
}
</script>
<style lang="less" scoped>
@HEIGHT: 100.4rem/50;
@ICON_SIZE: 50rem/50;
@FONT_SIZE: 22rem/50;
@FONT_COLOR: #313131;
@BACAKGROUD_COLOR: rgba(110, 103, 94, 0.13);
@BLOCKC_COLOR:linear-gradient(45deg, #fc6076 0%, #ff9a44 100%);
@RADIUS:15rem/50;
@BOX_SHADOW: 0 -1rem/50 6rem/50 rgba(0, 0, 0, 0.2);
.xh_mainGuide {
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
    padding-top: 4rem/50;
    text-align: center;
    flex-grow: 1;
    z-index: 99;
    .g_rou {
      text-decoration: none;
      color: @FONT_COLOR;
      .icon {
        font-size: @ICON_SIZE;
      }
      .font {
        font-size: @FONT_SIZE;
      }
    }
  }
}
</style>
