<template>
<div class="backTopBar">
  <label class="fa fa-arrow-left BT_back" @click="turnBack"></label>
  <div class="BT_getContent"><slot></slot></div>
</div>
</template>

<script>
export default {
  name: "backTopBar",
  methods: {
    turnBack() {
      this.$router.go(-1);
    },
  },

}
</script>

<style lang="less" scoped>
.backTopBar{


  .BT_back{

    font-size: @Gao*50vh;
    line-height:@TopTitleHeigh ;
    //background-color: #f6dd62;
    color: white;
    position: absolute;
    top: @Gao*1vh;
    left: @Kuan*20vw;
    //border: @Kuan*1vw solid white;
    z-index: 99;
  }
  .BT_getContent{
    background:linear-gradient(45deg, rgba(252, 96, 118, 0.99) 0%, rgba(255, 154, 68, 0.99) 100%);
    font-size: @Gao*45vh;
    height: @TopTitleHeigh;
    line-height:@TopTitleHeigh ;
    //background-color: #ff0000;
    //line-height: @TopTitleHeigh;
    color: white;
    text-align: center;
    position: relative;
    top: 0;
  }
}
</style>
