<template>
<div class="ODorderInfo">
  <div class="ODOI_titel">
    订单信息
  </div>
  <div class="ODOI_text">
    订单编号：<span>{{info['id']+1000000}}</span>
  </div>
  <div class="ODOI_text">
    订单创建时间：<span>{{changeDateForm(info['orderbegintime']) }}</span>
  </div>
  <div v-if="info['orderrunstatus']==2" class="ODOI_text">
    订单完成时间：<span>{{changeDateForm(info['orderfinishtime']) }}</span>
  </div>
  <div v-if="info['orderrunstatus']==-1" class="ODOI_text">
    订单取消时间：<span>{{changeDateForm(info['orderovertime']) }}</span>
  </div>
  <div class="ODOI_text">
    总金额：<span>{{info['goodsummoney']}}￥</span>
  </div>
  <div class="ODOI_text">
    订单状态：<span>{{statusText(info['orderrunstatus'])}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "ODorderInfo",
  props:["info"],
  methods:{
    statusText(num){
      if (num==1){
        return "待收货"
      }
      else if (num==2){
        return "已完成"
      }
      else if (num==0){
        return "待付款"
      }
      else if (num==-1){
        return "已取消"
      }
      else if (num==-2){
        return "已删除"
      }
    },
    changeDateForm(time){
      let date= new Date(time);
      let year=date.getFullYear();
      let month=date.getMonth()+1;
      let day=date.getDate();
      let hour=date.getHours();
      let min =date.getMinutes();
      let sec=date.getSeconds();
      if (min<10){
        min="0"+min
      }
      if (sec<10){
        sec="0"+sec;
      }
      return year+"年"+month+"月"+day+"日"+" "+hour+":"+min+":"+sec;
    }
  }
}
</script>

<style lang="less" scoped>
.ODorderInfo{
  position: relative;
  border-radius: @Gao*10vh;
  margin-top: @Gao*8vh;
  width: 94%;
  //height: @Gao*270vh;
  padding-top: @Gao*10vh;
  margin-left: 3%;
  //margin-right: 5%;
  box-shadow: @Kuan*1vw @Kuan*1vw @Kuan*5vw rgba(187, 184, 184, 0.88);
  float: left;
  div {
    padding-left: 4%;
    color: #4d4d4d;
    margin-bottom: @Gao*15vh;

    span {
      font-weight: 300;
    }
  }
  .ODOI_titel{
    font-size: @Gao*40vh;
    color: black;
    padding-left: 0;
    //font-weight: 700;
    margin-bottom: @Gao*20vh;
    text-align: center;
  }
  .ODOI_text{
    font-size: @Gao*35vh;
  }

}
</style>
