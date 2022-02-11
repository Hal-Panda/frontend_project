<template>
  <div class="payOrder">
    <topBar>支付订单</topBar>
    <orderTime></orderTime>
    <userInfoShow></userInfoShow>
    <payGoodInfoShow></payGoodInfoShow>
    <paySumMoney>{{sumMoney}}</paySumMoney>
    <payByPacket>{{sumMoney}}</payByPacket>
    <payByWeChat></payByWeChat>
    <payByPayple></payByPayple>
    <cancelOrder></cancelOrder>
    <backTerm></backTerm>

  </div>
</template>

<script>
import topBar from "../../components/content/topBar";
import userInfoShow from "./payOrder/userInfoShow";
import payGoodInfoShow from "./payOrder/payGoodInfoShow";
import paySumMoney from "./payOrder/paySumMoney";
import payByPacket from "./payOrder/payByPacket";
import payByWeChat from "./payOrder/payByWeChat";
import payByPayple from "./payOrder/payByPayple";
import orderTime from "./payOrder/orderTime";
import cancelOrder from "./payOrder/cancelOrder";
import backTerm from "./payOrder/backTerm";

export default {
  name: "payOrder",
  components: {topBar, userInfoShow, payGoodInfoShow, paySumMoney, payByPacket, payByWeChat, payByPayple, orderTime,cancelOrder,backTerm},
  created() {

    for (let i = 0; i < JSON.parse(this.$route.query['infos']).length; i++) {
      this.sumMoney+=JSON.parse(this.$route.query['infos'])[i]['goodsummoney'];
    }
  },
  data(){
    return{
      sumMoney:0.0,
      time:"",
    }
  }
}
</script>

<style lang="less" scoped>
.payOrder {

}
</style>
