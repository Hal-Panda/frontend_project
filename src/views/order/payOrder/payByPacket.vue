<template>
  <div class="payByPacket">
    <div class="PBP_bottom" @click="showPay">
      钱包支付
    </div>
    <div class="PBP_pay">
      <div class="PBPP_cancel" @click="cancelHiden">×</div>
      <div class="PBPP_text">
        <slot></slot>￥
      </div>
      <div class="PBPP_password">
        <input v-model="password" id="psw" type="password">
      </div>
      <label for="psw">
        <div class="PBPP_key">
          <div v-for="item in passKey">{{ item }}</div>
        </div>
      </label>
    </div>

  </div>
</template>

<script>
import {request} from "../../../network/request";

export default {
  name: "payByPacket",
  data() {
    return {
      passKey: ['', '', '', '', '', ''],
      password: "",
      orderList:[],
    }
  },
  methods: {
    cancelHiden(){
      let tab = document.getElementsByClassName('PBP_pay');
      tab[0].style.display = "none";
    },
    showPay() {
      let tab = document.getElementsByClassName('PBP_pay');
      tab[0].style.display = "inherit";
    }
  },
  watch: {
    password: {
      handler(newVal) {
        if (this.password.length <= 6) {
          for (let i = 0; i < 6; i++) {
            this.passKey[i] = "";
          }
          for (let i = 0; i < this.password.length; i++) {
            this.passKey[i] = "*";
          }
        }
        if (this.password.length == 6) {
          this.orderList=[];
          for (let i = 0; i < JSON.parse(this.$route.query['infos']).length; i++) {
            // alert(JSON.parse(this.$route.query['infos'])[i]['id'])
            this.orderList.push(JSON.parse(this.$route.query['infos'])[i]['id']);
          }
          request({
            method:"post",
            url: '/order/payByPacket',
            headers:{
              token:sessionStorage.getItem("token")
            },
            data:{
                odlisttdata:this.orderList,
                psw:this.password,
            }
          }).then(res => {
              if (res['data']=="0"){
                alert(res['msg'])
                this.password="";
              }
              else if (res['data']==-"1"){
                alert(res['msg'])
                this.$router.push("/");
              }
              else if (res['data']==-2){
                alert(res['msg'])
                alert("管理员电话：1XXXXXXXXXXX")
              }
              else {
                this.$router.push("paySuccess")
              }
          }).catch(err => {
            console.log(err);
          })
          // this.$router.push("paySuccess")
        }

      }

    }
  }

}
</script>

<style lang="less" scoped>
.payByPacket {
  .PBP_bottom {
    line-height: @Gao*80vh;
    position: relative;
    border-radius: @Gao*20vh;
    //margin-top: @Gao*10vh;
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
    background-color: #ff6700;
    color: white;
    font-size: @Gao*45vh;
  }

  .PBP_pay {
    display: none;
    line-height: @Gao*80vh;
    position: absolute;
    top: @Gao*400vh;
    height: @Gao*430vh;
    border-radius: @Gao*20vh;
    //margin-top: @Gao*10vh;
    margin-bottom: @Gao*30vh;
    width: 90%;
    //padding-top: @Gao*0vh;
    margin-left: 5%;
    //margin-right: 5%;
    box-shadow: @Kuan*2vw @Kuan*2vw @Kuan*15vw rgba(187, 184, 184, 0.88);
    //float: left;
    //display: flex;
    //justify-content: center;
    //align-items: center;
    background-color: white;
    color: black;

    .PBPP_cancel {
      float: right;
      padding-right: @Kuan*10vw;
    }

    .PBPP_text {
      margin-top: @Gao*40vh;
      font-size: @Gao*60vh;
      display: flex;
      color: dimgrey;
      width: 100%;
      justify-content: center;
    }

    .PBPP_password {
      display: flex;
      //visibility: hidden;
      opacity: 0;
      width: 100%;
      justify-content: center;
    }

    .PBPP_key {
      display: flex;
      width: 100%;
      margin-top: @Gao*40vh;
      justify-content: center;

      div {
        width: @Kuan*100vw;
        background-color: rgba(128, 127, 127, 0.13);
        height: @Gao*80vh;
        font-size: @Gao*60vh;
        font-weight: 700;
        line-height: @Gao*100vh;
        text-align: center;
        margin-right: @Kuan*5vw;
      }
    }
  }
}
</style>
