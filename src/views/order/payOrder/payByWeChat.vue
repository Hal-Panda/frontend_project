<template>
<div class="payByWeChat" @click="payple">
  微信支付
</div>
</template>

<script>
export default {
  name: "payByWeChat",
  methods:{
    payple(){
      alert("暂未开放该功能")
    }
  }
}
</script>

<style lang="less" scoped>
.payByWeChat{
  line-height: @Gao*80vh;
  position: relative;
  border-radius: @Gao*20vh;
  //margin-top: @Gao*30vh;
  margin-bottom: @Gao*5vh;
  width: 90%;
  //padding-top: @Gao*0vh;
  margin-left: 5%;
  //margin-right: 5%;
  //box-shadow: @Kuan*2vw @Kuan*2vw @Kuan*15vw rgba(187, 184, 184, 0.88);
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #05ee25;
  color: white;
  font-size: @Gao*45vh;
}
</style>
