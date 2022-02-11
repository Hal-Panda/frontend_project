<template>
  <div class="myOrderShow">
    <div
      v-for="(item,index) in infoList" class="SCS_Part" @click="toDetail(item['id'])">
      <img v-bind:src="item['goodfirimg']" @click.stop="toShowGood(item['goodid'])">
      <div class="SCS_content"><a href="#">{{ item['goodname'] }}</a></div>
      <div class="SCS_sunMoney">总价：{{ ((item['goodprice'] * 100) * item['goodcount']) / 100 }}元</div>
      <div class="SCS_count">
        <div class="countRecord">
          <label>数量：</label>
          <span>{{ item['goodcount'] }}</span>
        </div>
      </div>
      <div class="SCS_money">单价：{{ item['goodprice'] }}元</div>
      <div v-if="item['orderrunstatus']==1" class="MOD_status">已付款</div>
      <div v-if="item['orderrunstatus']==0" class="MOD_status">未完成</div>
      <div v-if="item['orderrunstatus']==-1" class="MOD_status">已取消</div>
      <div v-if="item['orderrunstatus']==2" class="MOD_status">已完成</div>
      <div v-if="item['orderrunstatus']==0" class="MOD_no_botton" @click.stop="toPay(item['id'])">付款</div>
      <div v-if="item['orderrunstatus']==0" class="MOD_no_cancel" @click.stop="toCancel(item['id'])">取消</div>
<!--      <div v-if="item['orderrunstatus']==1" class="MOD_payed_info" @click="toDetail(item['id'])">详情</div>-->
      <div v-if="item['orderrunstatus']==1" class="MOD_payed_finish" @click.stop="toFinish(item['id'])">完成</div>
<!--      <div v-if="item['orderrunstatus']==-1" class="MOD_cancel_info" @click="toDetail(item['id'])">详情</div>-->
<!--      <div v-if="item['orderrunstatus']==2" class="MOD_finish_info" @click="toDetail(item['id'])">详情</div>-->
      <div v-if="item['orderrunstatus']==2" class="MOD_finish_back" @click.stop="toBack">售后</div>
      <div v-if="item['orderrunstatus']==2" class="MOD_finish_delete" @click.stop="toDelete(item['id'])">删除</div>
      <div v-if="item['orderrunstatus']==-1" class="MOD_no_delete" @click.stop="toDelete(item['id'])">删除</div>
    </div>
  </div>
</template>

<script>
import {request} from "../../../network/request";

export default {
  name: "myOrderShow",
  methods: {
    toShowGood(id){
      request({
        url: '/show/getSellGoodByGooid',
        headers: {
          token: sessionStorage.getItem("token")
        },
        params: {
          passId: id,
        }
      }).then(res => {
        // this.infoList = res['data'];
        if (res['data'] == 0) {
          alert(res['msg'])
          return;
        }
        this.$router.push('/showGood/' + res['data'])
      }).catch(err => {
        console.log(err);
      })
    },
    toDetail(id){
      this.$router.push({path:"orderDetail",query:{toid:id}})
    },
    toDelete(id) {
      if (confirm("确定删除该信息")) {
        request({
          url: '/order/deleteOrderById',
          headers: {
            token: sessionStorage.getItem("token")
          },
          params: {
            passId: id,
          }
        }).then(res => {
          // this.infoList = res['data'];
          if (res['code'] == 100) {
            if (res['data'] == 0) {
              alert(res['msg'])
              return;
            }
            if (this.orderStatus==0){
              this.allMet();
            }
            else if (this.orderStatus==3){
              this.finishMet();
            }
            else if (this.orderStatus==4){
              this.cancelMet();
            }
            else {
              this.allMet();
              this.$emit('toreload')
            }

          }
        }).catch(err => {
          console.log(err);
        })
      }
    },
    toPay(id) {
      request({
        url: '/order/selectOneOrderById',
        headers: {
          token: sessionStorage.getItem("token")
        },
        params: {
          passId: id,
        }
      }).then(res => {
        // this.infoList = res['data'];
        if (res['data'] == 0) {
          alert(res['msg'])
          return;
        }
        this.payList.push(res['data'])
        this.$router.push({path: "payOrder", query: {infos: JSON.stringify(this.payList)}})
      }).catch(err => {
        console.log(err);
      })
    },
    toBack() {
      alert("暂不支持")
    },
    toCancel(id) {
      this.cancelList.push(id);
      if (confirm("确定删除订单？")) {
        request({
          method: "post",
          url: '/order/cancelOrder',
          headers: {
            token: sessionStorage.getItem("token")
          },
          data: {
            passOrderList: this.cancelList,
          }
        }).then(res => {
          // this.infoList = res['data'];
          if (this.orderStatus==0) {
            this.allMet();
          }
          else if (this.orderStatus==2){
            this.noMet();
          }
          else {
            this.allMet();
            this.$emit('toreload')
          }

        }).catch(err => {
          console.log(err);
        })
      }
    },
    toFinish(id) {
      if (confirm("确定完成订单？")) {
        request({
          url: '/order/finishOrder',
          headers: {
            token: sessionStorage.getItem("token")
          },
          params: {
            passId: id
          }
        }).then(res => {
          // this.infoList = res['data'];
          if (res['data'] == -1 || res['data'] == 0) {
            alert(res['msg'])
          } else if (res['data'] == 1) {
            if (this.orderStatus==0){
              this.allMet();
            }
            else if (this.orderStatus==1){
              this.payedMet();
            }
            else {
              this.allMet();
              this.$emit('toreload')
            }
          }
        }).catch(err => {
          console.log(err);
        })
      }
    },
    allMet() {
      request({
        url: '/order/getAllOrderInfo',
        headers: {
          token: sessionStorage.getItem("token")
        },
      }).then(res => {
        this.infoList = res['data'];
      }).catch(err => {
        console.log(err);
      })
    },
    payedMet() {
      request({
        url: '/order/getStatusOrderInfo',
        headers: {
          token: sessionStorage.getItem("token")
        },
        params: {
          status: 1
        }
      }).then(res => {
        this.infoList = res['data'];
      }).catch(err => {
        console.log(err);
      })
    },
    noMet() {
      request({
        url: '/order/getStatusOrderInfo',
        headers: {
          token: sessionStorage.getItem("token")
        },
        params: {
          status: 0
        }
      }).then(res => {
        this.infoList = res['data'];
      }).catch(err => {
        console.log(err);
      })
    },
    finishMet() {
      request({
        url: '/order/getStatusOrderInfo',
        headers: {
          token: sessionStorage.getItem("token")
        },
        params: {
          status: 2
        }
      }).then(res => {
        this.infoList = res['data'];
      }).catch(err => {
        console.log(err);
      })
    },
    cancelMet() {
      request({
        url: '/order/getStatusOrderInfo',
        headers: {
          token: sessionStorage.getItem("token")
        },
        params: {
          status: -1
        }
      }).then(res => {
        this.infoList = res['data'];
      }).catch(err => {
        console.log(err);
      })
    },
  },
  props: ["orderStatus"],
  watch: {
    orderStatus: {
      handler(newVal) {
        if (newVal == 0) {
          this.allMet();
        } else if (newVal == 1) {
          this.payedMet();
        } else if (newVal == 2) {
          this.noMet();
        } else if (newVal == 3) {
          this.finishMet();
        } else if (newVal == 4) {
          this.cancelMet();
        }
      }
    }

  },
  data() {
    return {
      sumMoney: 0.0,
      counts: [],
      flat: [],
      infoList: [],
      cancelList: [],
      payList: [],
    }
  },
  created() {
    request({
      url: '/order/getAllOrderInfo',
      headers: {
        token: sessionStorage.getItem("token")
      },
    }).then(res => {
      this.infoList = res['data'];

    }).catch(err => {
      console.log(err);
    })
  },
}
</script>

<style lang="less" scoped>
.myOrderShow {
  position: relative;

  .SCS_Part {
    position: relative;
    border-radius: @Gao*30vh;
    margin-top: @Gao*8vh;
    width: 90%;
    height: @Gao*330vh;
    padding-top: @Gao*10vh;
    margin-left: 5%;
    //margin-right: 5%;
    box-shadow: @Kuan*2vw @Kuan*2vw @Kuan*15vw rgba(187, 184, 184, 0.88);
    float: left;


    img {
      margin-left: @Kuan*5vw;
      //margin-top: @Gao*5vh;
      width: @Kuan*230vw;
      height: @Gao*320vh;
      float: left;
      border-radius: @Gao*25vh;

    }

    .SCS_content {
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: @Gao*130vh;

      padding-left: @Kuan*20vw;
      margin-top: @Gao*10vh;

      font-size: @Gao*35vh;
      //line-height: @Gao*65vh;
      //background-color: #42b983;
      a {
        font-weight: 700;
        color: rgba(52, 52, 52, 0.78);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0); //取消默认选中的背景颜色
      }
    }

    .SCS_sunMoney {
      position: absolute;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      top: 31%;
      left: 40%;
      //left: @Kuan*240vw;
      font-size: @Gao*30vh;
      color: rgba(86, 86, 86, 0.78);
    }

    .SCS_count {
      position: absolute;
      top: 56%;
      left: 40%;
      color: rgba(86, 86, 86, 0.78);

      .countRecord {
        line-height: @Gao*80vh;

        label {
          font-size: @Gao*30vh;
        }

        span {
          font-size: @Gao*30vh;
          position: relative;
        }
      }
    }

    .SCS_money {
      position: absolute;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      top: 48%;
      left: 40%;
      //left: @Kuan*240vw;
      font-size: @Gao*30vh;
      color: rgba(86, 86, 86, 0.78);

      span {
        color: rgba(86, 86, 86, 0.78);
        font-size: @Gao*25vh;
      }
    }

    .MOD_status {
      background-color: white;
      color: #9e9e9e;
      position: absolute;
      top: 5%;
      right: 3%;
      font-size: @Gao*30vh
    }

    .MOD_no_botton {
      background-color: #fa5b2b;
      color: white;
      position: absolute;
      bottom: 5%;
      right: 3%;
      padding: @Gao*3vh @Kuan*5vw;
      font-size: @Gao*35vh;
      border-radius: @Gao*10vh;
    }

    .MOD_no_cancel {
      background-color: #6b6a6a;
      color: white;
      position: absolute;
      bottom: 5%;
      right: 18%;
      padding: @Gao*3vh @Kuan*5vw;
      font-size: @Gao*35vh;
      border-radius: @Gao*10vh;
    }

    .MOD_payed_info {
      background-color: rgba(255, 130, 4, 0.35);
      color: white;
      position: absolute;
      bottom: 5%;
      right: 18%;
      padding: @Gao*3vh @Kuan*5vw;
      font-size: @Gao*35vh;
      border-radius: @Gao*10vh;
    }

    .MOD_payed_finish {
      background-color: #3fee0e;
      color: white;
      position: absolute;
      bottom: 5%;
      right: 3%;
      padding: @Gao*3vh @Kuan*5vw;
      font-size: @Gao*35vh;
      border-radius: @Gao*10vh;
    }

    .MOD_cancel_info {
      background-color: rgba(255, 130, 4, 0.35);
      color: white;
      position: absolute;
      bottom: 5%;
      right: 3%;
      padding: @Gao*3vh @Kuan*5vw;
      font-size: @Gao*35vh;
      border-radius: @Gao*10vh;
    }

    .MOD_finish_info {
      background-color: rgba(255, 130, 4, 0.35);
      color: white;
      position: absolute;
      bottom: 5%;
      right: 3%;
      padding: @Gao*3vh @Kuan*5vw;
      font-size: @Gao*35vh;
      border-radius: @Gao*10vh;
    }

    .MOD_finish_back {
      background-color: rgba(4, 46, 255, 0.35);
      color: white;
      position: absolute;
      bottom: 5%;
      right: 3%;
      padding: @Gao*3vh @Kuan*5vw;
      font-size: @Gao*35vh;
      border-radius: @Gao*10vh;
    }

    .MOD_finish_delete {
      background-color: rgba(255, 4, 50, 0.97);
      color: white;
      position: absolute;
      bottom: 5%;
      right: 18%;
      padding: @Gao*3vh @Kuan*5vw;
      font-size: @Gao*35vh;
      border-radius: @Gao*10vh;
    }

    .MOD_no_delete {
      background-color: rgba(255, 4, 50, 0.97);
      color: white;
      position: absolute;
      bottom: 5%;
      right: 3%;
      padding: @Gao*3vh @Kuan*5vw;
      font-size: @Gao*35vh;
      border-radius: @Gao*10vh;
    }

  }
}
</style>
