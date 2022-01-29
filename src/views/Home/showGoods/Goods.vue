<template>
  <showGoodsSieve v-on:orderKey="changeOrderKey"></showGoodsSieve>
  <div class="goods" @scroll="showBottom($event)" ref="scroll">
    <a v-for="(item,index) in goodsDatas" @click="toShowGood(item['maingoodid'])" v-bind:class="'good'">
      <img v-bind:src="item['maingoodimg']" alt="">
      <div class="g_discribe">{{ item["maingoodtitle"] }}</div>
      <div class="g_price"><span>￥</span>{{ item["maingoodprice"] }}</div>
      <div class="fa fa-star g_like"><span>{{ item["likenumber"] }}</span></div>
      <div class="g_sellCount">销量{{item['sellcount']}}</div>
    </a>
    <div v-show="loadFlat" class="g_load">{{ loadFont }}</div>
  </div>
  <blankPadding></blankPadding>
</template>

<script>
import {request} from "../../../network/request";
import blankPadding from "../../../components/content/blankPadding";
import showGoodsSieve from "./showGoodsSieve";

export default {
  name: "Goods",
  components: {blankPadding,showGoodsSieve},
  methods: {
    toShowGood(id) {
      this.$router.push('/showGood' + id)
    },
    // showBottom(){
    //   alert("到底了")
    // },
    showBottom(e) {
      // alert(this.$refs.scroll.scrollTop)
      if (!this.isLoadOver) {
        if (this.$refs.scroll.scrollTop  >= (this.$refs.scroll.scrollHeight) - this.$refs.scroll.clientHeight) {
          this.loadFlat = true;
          if (this.loadPoP) {
            this.getInfo();
          }
          // setTimeout(function =>this.loadPoP=true),500);
          // alert('滑动到了底部')
        }
      }
    },
    turnTrue() {
      this.loadPoP = true;
    },
    getInfo() {
      request({
        url: '/sellGoods/selectAll',
        params: {
          pageNum: this.pageRecord,
          pageSize: 6,
          orderKeys:this.orderKey,
        }
      }).then(res => {
        this.goodsDatas = this.goodsDatas.concat(res['data']);
        this.pageRecord = this.pageRecord + 1;
        this.loadPoP = false;
        setTimeout(this.turnTrue, 600);
        if (res['data'].length<1) {
          this.loadFont = "加载完毕";
          this.isLoadOver=true;
        }
      }).catch(err => {
        alert(err);
      }).finish(res => {

      })
    },
    changeOrderKey(data){
      this.orderKey=data;
      this.pageRecord=1;
      this.loadPoP=true;
      this.isLoadOver=false;
      this.loadFont = "加载中...";
      request({
        url: '/sellGoods/selectAll',
        params: {
          pageNum: this.pageRecord,
          pageSize: 6,
          orderKeys:this.orderKey,
        }
      }).then(res => {
        if (this.loadPoP) {
          this.goodsDatas = res['data'];
          this.pageRecord = 2;
          this.loadPoP = false
          setTimeout(this.turnTrue, 600);
        }
      }).catch(err => {
        alert(err);
      })
    }

    },

  mounted() {

  },
  computed: {},
  created() {
    request({
      url: '/sellGoods/selectAll',
      params: {
        pageNum: this.pageRecord,
        pageSize: 6,
        orderKeys:this.orderKey,
      }
    }).then(res => {
      if (this.loadPoP) {
        this.goodsDatas = res['data'];
        this.pageRecord = 2;
        this.loadPoP = false
        setTimeout(this.turnTrue, 600);
      }
    }).catch(err => {
      alert(err);
    })
  },
  data() {
    return {
      goodsDatas: [],
      loadFlat: false,
      pageRecord: 1,
      loadPoP: true,
      isLoadOver: false,
      loadFont: "加载中...",

      orderKey:"likeNumber desc",
    }
  },
}
</script>

<style lang="less" scoped>

.goods {
  overflow: scroll;
  height: @Gao*1334vh;
  //height:1334px ;
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background: #9e9e9e;
    box-shadow: inset 0 0 5px rgba(0, 122, 204);
  }

  //滚动条底层颜色!
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #b92b2b;

    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(182, 19, 19, 0.47);
  }

  .xh_range::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }

  .AddStyle::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background: #9e9e9e;
    box-shadow: inset 0 0 5px rgba(0, 122, 204);
  }

  //滚动条底层颜色!
  .AddStyle::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #ededed;

    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, .1);
  }

  position: relative;
  overflow: scroll;

  .good {

    background-color: white;
    margin-left: @Kuan*12.5vw;
    position: relative;
    float: left;
    width: 350vw* @Kuan;
    //background-color: #eeeeee;
    margin-bottom: @Kuan*10vw;
    border: #e0e0e0 @Kuan*1vw solid;
    border-radius: @Kuan*25vw;;
    box-shadow: 0 -@Kuan*1vw @Kuan*3vw  #D9D9D9C6;
    overflow: hidden;
    text-decoration: none;
    color: black;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); //取消默认选中的背景颜色
    img {
      //margin-top: 13rem/50;
      //box-shadow: 0 1rem/50 6rem/50  rgba(128, 128, 128, 0.78);
      width: 100%;
      height: @Gao*400vh;
    }

    .g_discribe {
      font-size: @Gao*30vh;

      height: @Gao*40vh;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .g_price {
      span {
        color: black;
        font-size: @Gao*25vh;
      }

      text-overflow: ellipsis;
      font-size: @Gao*35vh;
      overflow: hidden;
      white-space: nowrap;
      color: #ff6700;
      margin: @Kuan*5vw;
    }
    .g_sellCount{
      font-size: @Gao*25vh;
      color: #b0b0b0;
      position: relative;
      float: right;
      margin-right: @Kuan*20vw;
    }
    .g_like {
      border-radius: @Gao*12vh;
      padding: @Gao*5vh;
      background-color: #ff6700;
      position: absolute;
      top: @Gao*0.1vh;
      //left: @Gao*1vw;
      font-size: @Gao*30vh;
      color: #ffffff;

      span {
        position: relative;
        top: @Gao*3.5vh;
        //left: 5rem/50;
        font-size: @Gao*35vh;
        line-height: @Gao*35vh;
        color: #ffffff;
      }
    }
  }

  .g_load {
    text-align: center;
    line-height: 80vh*@Gao;
    font-size: 40vh*@Gao;
    color: #989898;
  }

}

.gb_centent {
  text-align: center;

}
</style>
