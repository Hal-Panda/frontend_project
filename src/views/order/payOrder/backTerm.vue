<template>
<div class="backTerm" @click="toHome">
  暂不支付，返回首页
</div>
</template>

<script>
export default {
  name: "backTerm",
  methods:{
    toHome(){
      this.$router.push("/")
    }
  }
}
</script>

<style lang="less" scoped>
.backTerm{
  line-height: @Gao*80vh;
  position: relative;
  border-radius: @Gao*20vh;
  //margin-top: @Gao*5vh;
  margin-bottom: @Gao*30vh;
  width: 90%;
  //padding-top: @Gao*0vh;
  margin-left: 5%;
  //margin-right: 5%;
  //box-shadow: @Kuan*2vw @Kuan*2vw @Kuan*15vw rgba(187, 184, 184, 0.88);
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: rgba(255, 154, 68, 0.5);
  color: grey;
  font-size: @Gao*25vh;
}
</style>
