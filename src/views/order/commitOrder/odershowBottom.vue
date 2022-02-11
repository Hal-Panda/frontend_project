<template>
  <div class="ordershowBottom">
    <blankPadding></blankPadding>
    <div class="SCS_sumMoney">
      <div>总金额:
        <slot></slot>
        元
      </div>
    </div>
    <div class="OS_bottom">
      <div class="OSB_over" @click="cancelBack">取消</div>
      <div class="OSB_commit" @click="commitInfo">提交</div>
    </div>
    <blankPadding></blankPadding>
  </div>
</template>


<script>
import blankPadding from "../../../components/content/blankPadding";
import {request} from "../../../network/request";

export default {
  name: "odershowBottom",
  components: {
    blankPadding
  },
  props: ['goodsInfo', 'userName', 'userTel', 'userAddress'],
  methods: {
    cancelBack() {
      this.$router.go(-1);
    },
    commitInfo() {
      if (this.userName==""||this.userTel==""){
        alert("请填写收货信息")
        return
      }
      if (this.userAddress==""||this.userAddress=="请填写收货地址"){
        alert("请填写收货信息")
        return
      }
      // alert(this.goodsInfo)
      // alert(JSON.stringify(this.goodsInfo))
      // alert(this.userName+"  "+this.userTel+"   "+this.userAddress)
      // this.goodsInfo['']
      if (this.commitFlat) {
        this.commitFlat=false;
        request({
          method: "post",
          url: '/order/createOrder',
          headers: {
            token: sessionStorage.getItem("token"),
          },
          data: {
            goodMap: JSON.stringify(this.goodsInfo),
            userName: this.userName,
            userTel: this.userTel,
            userAddress: this.userAddress,
          }
        }).then(res => {
          this.$router.push({path:"payOrder",query:{infos:JSON.stringify(res['data'])}})
        }).catch(err => {
          alert("提交失败，请重试")
          this.commitFlat=true;
        })
      }
    },
  },
  created() {

  },
  data() {
    return {
      commitFlat: true,
      userInfoFlat:false
    }
  }

}
</script>

<style lang="less" scoped>
.ordershowBottom {
  .SCS_sumMoney {
    line-height: @Gao*80vh;
    position: relative;
    border-radius: @Gao*20vh;
    margin-top: @Gao*30vh;
    margin-bottom: @Gao*30vh;
    width: 90%;
    //padding-top: @Gao*0vh;
    margin-left: 5%;
    //margin-right: 5%;
    box-shadow: @Kuan*2vw @Kuan*2vw @Kuan*15vw rgba(187, 184, 184, 0.88);
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      font-size: @Gao*40vh;
      color: red;
      font-weight: 700;
    }
  }

  .OS_bottom {
    //position: relative;
    border: @Gao*1vh solid #d2d0d0;
    border-radius: @Gao*20vh;
    padding-top: @Gao*5vh;
    padding-bottom: @Gao*5vh;
    display: flex;
    width: 90%;
    //margin-top: @Gao*30vh;
    margin-left: 5%;
    justify-content: space-around;

    .OSB_over {
      padding: @Gao*8vh @Kuan*8vw;
      font-size: @Gao*45vh;
      font-weight: 100;
      color: #989898;
    }

    .OSB_commit {
      //background-color: #ff6700;
      padding: @Gao*8vh @Kuan*8vw;
      border-radius: @Gao*15vh;
      font-weight: 500;
      font-size: @Gao*45vh;
      color: #ff6700;
    }
  }
}
</style>
