<template>
  <div class="cancelOrder" @click="cancelOrd">
    取消订单
  </div>
</template>

<script>
import {request} from "../../../network/request";

export default {
  name: "cancelOrder",
  methods: {
    cancelOrd() {
      if (confirm("确定取消订单")) {
        this.orderList = [];
        for (let i = 0; i < JSON.parse(this.$route.query['infos']).length; i++) {
          // alert(JSON.parse(this.$route.query['infos'])[i]['id'])
          this.orderList.push(JSON.parse(this.$route.query['infos'])[i]['id']);
        }
        request({
          url: '/order/cancelOrder',
          method: "post",
          headers: {
            token: sessionStorage.getItem("token"),
          },
          data: {
            passOrderList: this.orderList
          }
        }).then(res => {
          // this.$router.push({path:"payOrder",query:{infos:JSON.stringify(res['data'])}})
          if (res['code']==100){
            this.$router.push("/");
          }
        }).catch(err => {
          console.log(err)
        })
      }
    }
  },
  data() {
    return {
      orderList: [],
    }
  }

}
</script>

<style lang="less" scoped>
.cancelOrder {
  line-height: @Gao*80vh;
  position: relative;
  border-radius: @Gao*20vh;
  margin-top: @Gao*30vh;
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
  background-color: gray;
  color: white;
  font-size: @Gao*45vh;
}
</style>
