<template>
  <div class="paySuccess">
    <topBar>支付成功</topBar>
    <blankPadding></blankPadding>
    <div class="PASS_text">
      支付成功
    </div>
    <div class="PASS_button">
      <div @click="toHome">返回首页</div>
      <div @click="toOrderLook">查看订单</div>
    </div>
  </div>
</template>

<script>
import topBar from "../../components/content/topBar";
import blankPadding from "../../components/content/blankPadding";

export default {
  name: "paySuccess",
  components: {
    topBar, blankPadding
  },
  methods:{
    toHome(){
      this.$router.push("/")
    },
    toOrderLook(){
      this.$router.push("myOrder")
    }
  }
}
</script>

<style lang="less" scoped>
.paySuccess {
  .PASS_text {
    position: relative;
    border-radius: @Gao*30vh;
    margin-top: @Gao*8vh;
    width: 90%;
    height: @Gao*270vh;
    padding-top: @Gao*10vh;
    margin-left: 5%;
    //margin-right: 5%;
    display: flex;
    box-shadow: @Kuan*2vw @Kuan*2vw @Kuan*15vw rgba(187, 184, 184, 0.88);
    //float: left;
    font-size: @Gao*60vh;
    background-color: #05ee25;
    color: white;
    font-weight: 900;
    justify-content: center;
    align-items: center;
  }

  .PASS_button {
    margin-top: @Gao*30vh;
    display: flex;
    justify-content: space-around;
    div{
      border-radius: @Gao*30vh;
      box-shadow: @Kuan*2vw @Kuan*2vw @Kuan*15vw rgba(187, 184, 184, 0.88);
      padding: @Gao*7vh @Kuan*20vw;
      font-size: @Gao*40vh;
    }
  }

}
</style>
