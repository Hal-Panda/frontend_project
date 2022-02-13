<template>
  <div class="packetShow">
    <backTopBar>钱包</backTopBar>
    <div class="US_other">
      <div class="USO_list clearfix">
        <div class="USOL showMoney"><span class="fa fa-stop-circle"></span>余额 : <span class="PKS_money">{{
            cash
          }}</span>元
        </div>
        <div class="lookMoney" @click=" showPay">查看</div>
      </div>
      <div class="USO_list" @click="noMether">
        <div class="USOL"><span class="fa fa-share"></span>充值</div>
      </div>
      <div class="USO_list" @click="noMether">
        <div class="USOL"><span class="fa fa-reply"></span>提现</div>
      </div>
      <div class="USO_list" @click="noMether">
        <div class="USOL"><span class="fa fa-credit-card"></span>绑定银行卡</div>
      </div>
    </div>

    <div class="PBP_pay">

      <div class="PBPP_cancel" @click="cancelHiden">×</div>
      <div class="PBPP_text">
        输入支付密码
      </div>
      <div class="PBPP_password">
        <input v-model="password" id="psw" type="password">
      </div>
      <label for="psw">
        <div class="PBPP_key">
          <div v-for="item in passKey">{{ item }}</div>
        </div>
      </label>
      <div class="packetPswMsg">初始密码为账号密码后六位</div>
    </div>
  </div>

</template>

<script>
import backTopBar from "../../components/common/backTopBar";
import {request} from "../../network/request";

export default {
  name: "packetShow",
  components: {backTopBar},
  methods: {
    showPay() {
      let tab = document.getElementsByClassName('PBP_pay');
      tab[0].style.display = "inherit";
    },
    cancelHiden() {
      let tab = document.getElementsByClassName('PBP_pay');
      tab[0].style.display = "none";
    },
    noMether() {
      alert("暂不支持该功能")
    },
    lookMoney() {
      request({
        url: 'cuser/hiden/checkMoney',
        headers: {
          token: sessionStorage.getItem("token")
        },
      }).then(res => {
        if (res['data'] == -1) {
          alert("查看失败，稍后重试")
          return;
        }
        this.cash = res['data']

      }).catch(err => {
        console.log(err);
      })
    }
  },
  data() {
    return {
      cash: "***",
      passKey: ['', '', '', '', '', ''],
      password: "",
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
          request({
            method: "post",
            url: '/cuser/hiden/checkPayPassword',
            headers: {
              token: sessionStorage.getItem("token")
            },
            data: {
              psw: this.password,
            }
          }).then(res => {
            if (res['data'] == "1") {
              this.cancelHiden();
              this.password = ""
              this.lookMoney();
            } else {
              alert(res['msg'])
              this.password = "";
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
.packetShow {
  .US_other {
    margin: @Gao*5vh @Kuan*5vw;

    .USO_list {

      font-size: @Gao*35vh;
      line-height: @Gao*120vh;
      box-shadow: @Kuan*0vw @Gao*1vh @Gao*3vh rgba(187, 184, 184, 0.28);
      padding-left: @Kuan*50vw;
      //text-align: center;
      span {
        position: relative;
        top: @Gao*-3vh;
        font-size: @Gao*25vh;
        padding-right: @Kuan*20vw;
      }

      .PKS_money {
        position: relative;
        top: @Gao*0vh;
        font-weight: 700;
        font-size: @Gao*35vh;
        color: red;
      }

      .showMoney {
        float: left;
      }

      .lookMoney {
        background-color: red;
        float: right;
        font-size: @Gao*30vh;
        margin-right: 10%;
        color: white;
        line-height: normal;
        margin-top: @Gao*30vh;
        padding: @Gao*10vh @Kuan*15vw;
        border-radius: @Gao*10vh;
      }

      .USOL {
        color: rgba(52, 52, 52, 0.75);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0); //取消默认选中的背景颜色
      }
    }
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
    .packetPswMsg{
      display: flex;
      justify-content: center;
      color: gray;
      font-size: @Gao*30vh;
      margin-top: @Gao*20vh;
    }
  }
}
</style>
