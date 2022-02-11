<template>
<div class="commitOrder">
  <backTopBar>提交订单</backTopBar>
  <purchaseUserInfo  v-on:getUserInfo="getUserInfo"></purchaseUserInfo>
  <orderShow v-on:getSum="getSumPrice" v-on:allGoodInfo="getGoodInfo"></orderShow>
  <odershowBottom v-bind:goodsInfo="getGoodInfos" v-bind:userName="getUserName"
                  v-bind:userTel="getUserTel" v-bind:userAddress="getUserAddress"
  >{{ getSumMoney }}</odershowBottom>
</div>
</template>

<script>
import backTopBar from "../../components/common/backTopBar";
import purchaseUserInfo from "./commitOrder/purchaseUserInfo";
import orderShow from "./commitOrder/orderShow";
import odershowBottom from "./commitOrder/odershowBottom";

export default {
  name: "commitOrder",
  components:{
    backTopBar,purchaseUserInfo,orderShow,odershowBottom
  },
  methods:{
    getSumPrice(getPrice){
      this.getSumMoney=(getPrice*100)/100;
    },
    getGoodInfo(info){
      this.getGoodInfos=info;
    },
    getUserInfo(name,tel,address){
      this.getUserName=name;
      this.getUserTel=tel;
      this.getUserAddress=address;
    }
  },
  data(){
    return{
      getSumMoney:0.0,
      getGoodInfos:[],
      getUserName:"",
      getUserTel:"",
      getUserAddress:"",
    }
  }
}
</script>

<style lang="less" scoped>
.commitOrder{

}
</style>
