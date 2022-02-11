<template>
  <div class="orderDetail">
    <backTopBar>订单详情</backTopBar>
    <ODbaseUserInfo v-bind:info="goodInfo"></ODbaseUserInfo>
    <ODgoodShow v-bind:info="goodInfo"></ODgoodShow>
    <ODorderInfo  v-bind:info="goodInfo"></ODorderInfo>
  </div>
</template>

<script>
import backTopBar from "../../components/common/backTopBar";
import ODbaseUserInfo from "./orderDetail/ODbaseUserInfo";
import ODgoodShow from "./orderDetail/ODgoodShow";
import {request} from "../../network/request";
import ODorderInfo from "./orderDetail/ODorderInfo";

export default {
  name: "orderDetail",
  components: {
    backTopBar, ODbaseUserInfo, ODgoodShow,ODorderInfo
  },
  created() {
    request({
      url: '/order/selectOneOrderById',
      headers: {
        token: sessionStorage.getItem("token")
      },
      params: {
        passId: this.$route.query['toid'],
      }
    }).then(res => {
        this.goodInfo=res['data']
    }).catch(err => {
      console.log(err);
    })
  },
  data(){
    return{
      goodInfo:{}
    }
  }
}
</script>

<style lang="less" scoped>
.orderDetail {

}
</style>
