<template>
  <div class="goods">
    <a v-for="(item,index) in goodsDatas"  @click="toShowGood(item['toaddress'])"  v-bind:class="'good'" >
      <img v-bind:src="item['imgaddress']" alt="">
      <div class="g_discribe">{{item["decribe"]}}</div>
      <div class="g_price"><span>￥</span>{{item["price"]}}</div>
      <div class="fa fa-star g_like"><span>{{item["likecount"]}}</span></div>
    </a>

  </div>
</template>

<script>
import {request} from "../../../network/request";

export default {
  name: "Goods",
  methods:{
    toShowGood(id){
      this.$router.push('/showGood'+id)
    }
  },
  computed: {
  },
  created() {
    request({
      url:'/test'
    }).then(res=>{
      this.goodsDatas=res.data;
    }).catch(err=>{
      alert(err);
    })
  },
  data() {
    return {
      goodsDatas:[],

    }
  },
}
</script>

<style lang="less" scoped>

.goods{
  position: relative;
  .good{

    background-color: white;
    margin-left: @Kuan*12.5vw;
    position: relative;
    float: left;
    width: 350vw* @Kuan;
    //background-color: #eeeeee;
    margin-bottom:  @Kuan*10vw;
    border: #e0e0e0 @Kuan*1vw solid;
    border-radius:@Kuan*25vw;;
    box-shadow: 0 -@Kuan*1vw @Kuan*3vw  #D9D9D9C6;
    overflow: hidden;
    text-decoration: none;
    color: black;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); //取消默认选中的背景颜色
    img{
      //margin-top: 13rem/50;
      //box-shadow: 0 1rem/50 6rem/50  rgba(128, 128, 128, 0.78);
      width: 100%;
      height: @Gao*400vh;
    }
    .g_discribe{
      font-size: @Gao*30vh;

      height: @Gao*40vh;
      text-overflow:ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .g_price{
      span{
        color: black;
        font-size: @Gao*25vh;
      }
      text-overflow:ellipsis;
      font-size: @Gao*35vh;
      overflow: hidden;
      white-space: nowrap;
      color:  #ff6700;
      margin: @Kuan*5vw;
    }
    .g_like{
      border-radius:@Gao*12vh;
      padding: @Gao*5vh;
      background-color: #ff6700;
      position: absolute;
      top: @Gao*0.1vh;
      //left: @Gao*1vw;
      font-size:@Gao*30vh;
      color: #ffffff;
      span{
        position: relative;
        top: @Gao*3.5vh;
        //left: 5rem/50;
        font-size: @Gao*35vh;
        line-height: @Gao*35vh;
        color: #ffffff;
      }
    }
  }

}
</style>
