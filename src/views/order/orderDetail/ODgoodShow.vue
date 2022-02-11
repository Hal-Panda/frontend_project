<template>
<div class="ODgoodShow">
  <div class="SCS_Part">
    <img  v-bind:src="info['goodfirimg']" @click="toShowGood(info['goodid'])" alt="">
    <div class="SCS_content"><a href="#">{{ info['goodname'] }}</a></div>
    <div class="SCS_sunMoney">总价：{{ ((info['goodprice']*100)* info['goodcount'])/100 }}元</div>
    <div class="SCS_count">
      <div class="countRecord">
        <label >数量：</label>
        <span>{{ info['goodcount'] }}</span>
      </div>
    </div>
    <div class="SCS_money">单价：{{ info['goodprice'] }}元</div>
  </div>

</div>
</template>

<script>
import {request} from "../../../network/request";

export default {
  name: "ODgoodShow",
  props:["info"],
  methods:{
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

    }
  }
}
</script>

<style lang="less" scoped>
.ODgoodShow{
  .SCS_Part {
    position: relative;
    border-radius: @Gao*10vh;
    margin-top: @Gao*8vh;
    width: 94%;
    height: @Gao*270vh;
    padding-top: @Gao*10vh;
    margin-left: 3%;
    //margin-right: 5%;
    box-shadow: @Kuan*1vw @Kuan*1vw @Kuan*5vw rgba(187, 184, 184, 0.88);
    float: left;


    img {
      margin-left: @Kuan*5vw;
      //margin-top: @Gao*5vh;
      width: @Kuan*230vw;
      height: @Gao*260vh;
      float: left;
      border-radius: @Gao*15vh;

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
