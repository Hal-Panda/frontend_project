<template>
<div class="orderShow">
  <div
    v-for="(item,index) in infoList" class="SCS_Part">

    <img  v-bind:src="item['showimgid']" alt="">
    <div class="SCS_content"><a href="#">{{ item['goodname'] }}</a></div>
    <div class="SCS_sunMoney">总价：{{ ((item['goodprice']*100)* item['other'])/100 }}元</div>
    <div class="SCS_count">
      <div class="countRecord">
        <label >数量：</label>
        <span>{{ item['other'] }}</span>
      </div>
    </div>
    <div class="SCS_money">单价：{{ item['goodprice'] }}元</div>
  </div>

</div>
</template>

<script>
import {request} from "../../../network/request";

export default {
  name: "orderShow",
  methods: {
    toSumPrice(){
      this.$emit("getSum",this.sumMoney)
    },
    // choseAll() {
    //   if (this.allFlat == false) {
    //     this.allFlat = true;
    //     let ones = document.getElementsByClassName('SCB_SoloCheck');
    //     // input.setAttribute('checked',true)
    //     for (let i = 0; i < ones.length; i++) {
    //       ones[i].checked = true;
    //       this.flat[i] = true;
    //     }
    //     this.reloadPrice();
    //   } else if (this.allFlat == true) {
    //     this.allFlat = false;
    //     let ones = document.getElementsByClassName('SCB_SoloCheck');
    //     // input.setAttribute('checked',true)
    //     for (let i = 0; i < ones.length; i++) {
    //       ones[i].checked = false;
    //       this.flat[i] = false;
    //     }
    //     this.reloadPrice();
    //   }
    // },
    // chooseGood(index) {
    //   if (this.flat[index] == false) {
    //     this.flat[index] = true;
    //     this.reloadPrice();
    //     // alert(this.sumMoney)
    //   } else if (this.flat[index] == true) {
    //     this.flat[index] = false;
    //     if (this.allFlat == true) {
    //       this.allFlat = false;
    //       let all = document.getElementsByClassName('SCB_check');
    //       all[0].checked = false;
    //     }
    //     this.reloadPrice();
    //   }
    // }
  },
  created() {
    request({
      method:"post",
      url: '/order/getGoodInfo',
      headers:{
        token:sessionStorage.getItem("token")
      },
      data:{
        goodList:this.$route.query.buyList
      }
    }).then(res => {
      this.infoList=res['data'];
      for (let i=0;i<this.infoList.length;i++){
        this.sumMoney+= this.infoList[i]['goodprice']*this.infoList[i]['other'];
      }
      this.toSumPrice();
      this.$emit("allGoodInfo",this.infoList)
    }).catch(err => {
      console.log(err);
    })
  },
  data() {
    return {
      sumMoney: 0.0,
      counts: [],
      flat: [],
      infoList:[],
    }
  }
}
</script>

<style lang="less" scoped>
.orderShow{
  position: relative;
  top: @Gao*50vh;
  .SCS_Part {
    position: relative;
    border-radius: @Gao*30vh;
    margin-top: @Gao*8vh;
    width: 90%;
    height: @Gao*270vh;
    padding-top: @Gao*10vh;
    margin-left: 5%;
    //margin-right: 5%;
    box-shadow: @Kuan*2vw @Kuan*2vw @Kuan*15vw rgba(187, 184, 184, 0.88);
    float: left;


    img {
      margin-left: @Kuan*5vw;
      //margin-top: @Gao*5vh;
      width: @Kuan*230vw;
      height: @Gao*260vh;
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
    .SCS_sunMoney{
      position: absolute;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      top: 41%;
      left: 40%;
      //left: @Kuan*240vw;
      font-size: @Gao*30vh;
      color: rgba(86, 86, 86, 0.78);
    }
    .SCS_count {
      position: absolute;
      top: 70%;
      left: 40%;
      color: rgba(86, 86, 86, 0.78);

      .countRecord {
        line-height: @Gao*80vh;
        label{
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
      top: 60%;
      left: 40%;
      //left: @Kuan*240vw;
      font-size: @Gao*30vh;
      color: rgba(86, 86, 86, 0.78);

      span {
        color: rgba(86, 86, 86, 0.78);
        font-size: @Gao*25vh;
      }
    }
  }

}
</style>
