<template>
<div class="ODbaseUserInfo">
  <div class="ODBUI_titel">
    收货信息
  </div>
  <div class="ODBUI_address">
   收货地址：<span>{{ info['orderacceptaddress'] }}</span>
  </div>
  <div class="ODBUI_tel">
      联系电话：<span>{{ info['orderaccepttel'] }}</span>
  </div>
  <div class="ODBUI_name">
      收货人：<span>{{ info['orderacceptname'] }}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "ODbaseUserInfo",
  props:["info"]
}
</script>

<style lang="less" scoped>
.ODbaseUserInfo{
  position: relative;
  border-radius: @Gao*10vh;
  margin-top: @Gao*8vh;
  width: 94%;
  //height: @Gao*270vh;
  padding-top: @Gao*10vh;
  margin-left: 3%;
  //margin-right: 5%;
  box-shadow: @Kuan*1vw @Kuan*1vw @Kuan*5vw rgba(187, 184, 184, 0.88);
  float: left;
  div{
    padding-left: 4% ;
    color: #4d4d4d;
    margin-bottom: @Gao*15vh;
    span{
      font-weight: 300;
    }
  }
  .ODBUI_titel{
    font-size: @Gao*40vh;
    color: black;
    padding-left: 0;
    //font-weight: 700;
    margin-bottom: @Gao*20vh;
    text-align: center;
  }
  .ODBUI_address{
    font-size: @Gao*35vh;
  }
  .ODBUI_tel{

  } font-size: @Gao*35vh;
  .ODBUI_name{
    font-size: @Gao*35vh;
  }
}
</style>
