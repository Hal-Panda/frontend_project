<template>
  <div class="userInfoShow">
    <div class="USI_address">
      收货地址: {{ JSON.parse(this.$route.query['infos'])[0]['orderacceptaddress'] }}
    </div>
    <div class="USI_tel">
      联系号码: {{ JSON.parse(this.$route.query['infos'])[0]['orderaccepttel'] }}
    </div>
    <div class="USI_name">
      联系人姓名: {{ JSON.parse(this.$route.query['infos'])[0]['orderacceptname'] }}
    </div>
  </div>
</template>

<script>
export default {
  name: "userInfoShow"
}
</script>

<style lang="less" scoped>
.userInfoShow {
  margin-top: @Gao*10vh;
  position: relative;
  //border-radius: @Gao*30vh;
  //margin-top: @Gao*8vh;
  width: 90%;
  //height: @Gao*270vh;
  padding-top: @Gao*10vh;
  margin-left: 5%;
  //margin-right: 5%;
  box-shadow: @Kuan*2vw @Kuan*2vw @Kuan*15vw rgba(187, 184, 184, 0.88);
  float: left;
  color: #333333;
  font-size: @Gao*35vh;

  .USI_address{
    padding-left: @Kuan*10vw;
  }
  .USI_tel{
    padding-left: @Kuan*10vw;
  }
  .USI_name{
    padding-left: @Kuan*10vw;
  }
}
</style>
