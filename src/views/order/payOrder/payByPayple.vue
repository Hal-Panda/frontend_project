<template>
<div class="payByPalple" @click="payple">
  支付宝支付
</div>
</template>

<script>
export default {
  name: "payByPayple",
  methods:{
    payple(){
      alert("暂未开放该功能")
    }
  }
}
</script>

<style lang="less" scoped>
.payByPalple{
  line-height: @Gao*80vh;
  position: relative;
  border-radius: @Gao*20vh;
  //margin-top: @Gao*30vh;
  //margin-bottom: @Gao*30vh;
  width: 90%;
  //padding-top: @Gao*0vh;
  margin-left: 5%;
  //margin-right: 5%;
  //box-shadow: @Kuan*2vw @Kuan*2vw @Kuan*15vw rgba(187, 184, 184, 0.88);
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0b9fda;
  color: white;
  font-size: @Gao*45vh;
}
</style>
