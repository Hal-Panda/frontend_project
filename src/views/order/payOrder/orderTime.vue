<template>
  <div class="orderTime">
    <div >订单倒计时：{{ hour }}:{{ minute }}:{{ second }}</div>
  </div>
  <blankPadding></blankPadding>
  <blankPadding></blankPadding>
</template>


<script >
import blankPadding from "../../../components/content/blankPadding";
import {request} from "../../../network/request";
export default {
  // el: "#page",
  components:{
    blankPadding
  },
  created() {
    let new_date = new Date();
    let old_date = new Date(JSON.parse(this.$route.query['infos'])[0]['orderbegintime']);
    let time=new_date-old_date;
    time=time/1000;

    // alert(hours+":"+minutes+":"+seconds)
    if (time>360){
      this.hours=0;
      this.minutes=0;
      this.seconds=0;
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
          if (confirm("订单已过期，无法交易，是否返回首页")){
            this.$router.push("/");
          }

        }
      }).catch(err => {
        console.log(err)
      })

    }
    else {
      time=360-time;
      this.hours=0;
      this.minutes = parseInt(time%3600/60); // 分钟 -(day*24) 以60秒为一整份 取余 剩下秒数 秒数/60 就是分钟数
      this.seconds = parseInt(time%60);
    }
  },
  data() {
    return {
      hours: 1,
      minutes: 10,
      seconds: 0,
      orderList:[],
    }
  },
  mounted() {
    this.add();
  },
  methods: {
    // 防止数值小于10时，出现一位数
    num(n) {
      return n < 10 ? '0' + n : '' + n
    },
    // 倒计时函数
    add() {
      let time = window.setInterval(() => {
        if (this.hours !== 0 && this.minutes === 0 && this.seconds === 0) {
          this.hours -= 1;
          this.minutes = 59;
          this.seconds = 59;
        } else if (this.hours === 0 && this.minutes !== 0 && this.seconds ===
          0) {
          this.minutes -= 1;
          this.seconds = 59;
        } else if (this.hours === 0 && this.minutes === 0 && this.seconds ===
          0) {
          this.seconds = 0
          window.clearInterval(time)
        } else if (this.hours !== 0 && this.minutes !== 0 && this.seconds ===
          0) {
          this.minutes -= 1;
          this.seconds = 59;
        } else {
          this.seconds -= 1;
        }
      }, 1000)
    }
  },
  watch: {
    // 监听数值变化
    second: {
      handler(newVal) {
        this.num(newVal)
      }
    },
    minute: {
      handler(newVal) {
        this.num(newVal)
      }
    },
    hour: {
      handler(newVal) {
        this.num(newVal)
      }
    }
  },
  computed: {
    // 初始化数据
    second() {
      return this.num(this.seconds)
    },
    minute() {
      return this.num(this.minutes)
    },
    hour() {
      return this.num(this.hours)
    }
  }
}
</script>


<style lang="less" scoped>
.orderTime {
  z-index: 9;
  position: fixed;
  top:@Gao*90vh ;
  //margin-top: @Gao*100vh;
  line-height: @Gao*80vh;
  //position: relative;
  //border-radius: @Gao*20vh;
  //margin-top: @Gao*30vh;
  margin-bottom: @Gao*30vh;
  width: 100%;
  //padding-top: @Gao*0vh;
  //margin-left: 5%;
  //margin-right: 5%;
  box-shadow: @Kuan*2vw @Kuan*2vw @Kuan*15vw rgba(187, 184, 184, 0.88);
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(252, 60, 34, 0.88);
  color: white;
  font-size: @Gao*45vh;
}
</style>
