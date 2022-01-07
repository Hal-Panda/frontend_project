<template>
  <div class="showGoods">
    <div class="goods">
      <a v-for="(item,index) in goodsDatas" v-bind:href="item['toaddress']"  v-bind:class="'good'" >
        <img v-bind:src="item['imgaddress']" alt="">
        <div class="g_discribe">{{item["decribe"]}}</div>
        <div class="g_price"><span>￥</span>{{item["price"]}}</div>
        <div class="fa fa-star g_like"><span>{{item["likecount"]}}</span></div>
      </a>
    </div>
  </div>
</template>

<script>

import {request} from "../../network/request";

export default {
  name: "showGoods",
  methods:{
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
      goodsDatas:[
        // {
        //   toAddress:"/categories",
        //   imgAddress:"https://img2.baidu.com/it/u=2229864841,4232235061&fm=26&fmt=auto",
        //   decribe:"史上无敌超级好吃aaaaaaaaaaaaa啊",
        //   price:"50.00",
        //   like:"2222",
        // },
        // {
        //   toAddress:"/shopCart",
        //   imgAddress:"https://img2.baidu.com/it/u=1685092271,2574681286&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=797",
        //   decribe:"史上无敌超级好吃aaaaaaaaaaaaa啊",
        //   price:"21.00",
        //   like:"123",
        // },
        // {
        //   toAddress:"/user",
        //   imgAddress:"https://img1.baidu.com/it/u=995912340,2234084405&fm=26&fmt=auto",
        //   decribe:"史上无敌超级好吃aaaaaaaaaaaaa啊",
        //   price:"52000.00",
        //   like:"33.00",
        // },
        // {
        //   toAddress:"/categories",
        //   imgAddress:"https://img2.baidu.com/it/u=2229864841,4232235061&fm=26&fmt=auto",
        //   decribe:"史上无敌超级好吃aaaaaaaaaaaaa啊",
        //   price:"50.00",
        //   like:"2222",
        // },
        // {
        //   toAddress:"/shopCart",
        //   imgAddress:"https://img2.baidu.com/it/u=1685092271,2574681286&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=797",
        //   decribe:"史上无敌超级好吃aaaaaaaaaaaaa啊",
        //   price:"21.00",
        //   like:"123",
        // },
        // {
        //   toAddress:"/user",
        //   imgAddress:"https://img1.baidu.com/it/u=995912340,2234084405&fm=26&fmt=auto",
        //   decribe:"史上无敌超级好吃aaaaaaaaaaaaa啊",
        //   price:"52000.00",
        //   like:"33.00",
        // },
        // {
        //   toAddress:"/categories",
        //   imgAddress:"https://img2.baidu.com/it/u=2229864841,4232235061&fm=26&fmt=auto",
        //   decribe:"史上无敌超级好吃aaaaaaaaaaaaa啊",
        //   price:"50.00",
        //   like:"2222",
        // },
      ]
    }
  },
}
</script>

<style lang="less" scoped>
.showGoods{
  .goods{
    .good{
      background-color: white;
      margin-left: 12.5rem/50;
      position: relative;
      float: left;
      width: 350rem/50;
      //background-color: #eeeeee;
      margin-bottom: 10rem/50;
      border: #e0e0e0 1rem/50 solid;
      border-radius:25rem/50;
      box-shadow: 0rem/50 -1rem/50 3rem/50  #D9D9D9C6;
      overflow: hidden;
      text-decoration: none;
      color: black;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0); //取消默认选中的背景颜色
      img{
        //margin-top: 13rem/50;
        //box-shadow: 0 1rem/50 6rem/50  rgba(128, 128, 128, 0.78);
        width: 100%;
        height: 400rem/50;
      }
      .g_discribe{
        font-size: 30rem/50;

        height: 40rem/50;
        text-overflow:ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .g_price{
        span{
          color: black;
          font-size: 25rem/50;
        }
        text-overflow:ellipsis;
        font-size: 35rem/50;
        overflow: hidden;
        white-space: nowrap;
        color:  #ff6700;
        margin: 5rem/50;
      }
      .g_like{
        border-radius:12rem/50;
        padding: 5rem/50;
        background-color: #ff6700;
        position: absolute;
        //display: ;\
        top: 2rem/50;
        //float: right;
        left: 0rem/50;
        font-size: 30rem/50;
        color: #ffffff;
        span{
          position: relative;
          top: 3.5rem/50;
          //left: 5rem/50;
          font-size: 35rem/50;
          line-height: 35rem/50;
          color: #ffffff;
        }
      }
    }
  }
}

</style>
