<template>
<div class="SG_comments">
  <div class="SGC_title">
    商品评论
  </div>
  <div class="SGC_more" @click="showHiden">查看更多>></div>
  <div v-for="item in (1,3)" class="SGC_comment">
    <div class="SGCC_info clearfix">
      <div class="SGCCI_icon"><img src="https://img1.baidu.com/it/u=330753258,1076063408&fm=26&fmt=auto" alt=""></div>
      <div class="SGCCI_name">打工族</div>
    </div>
    <div class="SGCC_content">
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从前有座山，山里有座庙，庙里有个老和尚,从前有座山，山里有座庙，庙里有个老和尚.
    </div>
  </div>

  <div class="SGC_hidInfo">
    <div class="SGC_title">
      商品评论
    </div>
    <div class="SGC_close" @click="closeHiden">关闭</div>
    <div v-for="item in (1,10)" class="SGC_comment">
      <div class="SGCC_info clearfix">
        <div class="SGCCI_icon"><img src="https://img1.baidu.com/it/u=330753258,1076063408&fm=26&fmt=auto" alt=""></div>
        <div class="SGCCI_nameT">打工族</div>
      </div>
      <div class="SGCC_content">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从前有座山，山里有座庙，庙里有个老和尚,从前有座山，山里有座庙，庙里有个老和尚.
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "SG_comments",
  methods:{
    showHiden(){
      let tab=document.getElementsByClassName("SGC_hidInfo");
      tab[0].style.top=0;
    },
    closeHiden(){
      let tab=document.getElementsByClassName("SGC_hidInfo");
      tab[0].setAttribute('style', 'top: 1334vh*@Gao !important');
    },
  }
}
</script>

<style lang="less" scoped>
.SG_comments{
  border: @Gao*1vh solid rgba(187, 184, 184, 0.28);
  border-radius: @Gao*25vh;
  position: relative;
  margin: @Gao*10vh @Kuan*10vw;
  padding:@Gao*20vh @Kuan*25vw ;
  .SGC_title{
    font-size: @Gao*35vh;
    font-weight: 700;
    margin-bottom: @Gao*10vh;
    float: left;
    line-height:@Gao*70vh ;
  }
  .SGC_more,.SGC_close{
    float: right;
    font-size: @Gao*28vh;
    line-height:@Gao*70vh ;
    padding-right: @Kuan*10vw;
    color:  #ff6700;
  }
  .SGC_comment{
    margin-bottom: @Gao*35vh;
    padding-bottom: @Gao*25vh;
    border-radius: @Gao*30vh;
    box-shadow: 0 @Gao*1vh @Gao*3vw  #D9D9D9C6;
    .SGCC_info{
      //margin: 10px 0;
      .SGCCI_icon{
        img{
          position: absolute;
          width: @Kuan*55vw;
          height: @Gao*55vh;
          border-radius: @Gao*22vh;
        }
        float: left;
        background-color: red;
      }

      .SGCCI_name{
        position: absolute;
        //background-color: #ff6700;
        font-size: @Gao*30vh;
        line-height:@Gao*55vh ;
        left: 90vw*@Kuan;
        color: rgba(52, 52, 52, 0.89);
      }
    }
    .SGCC_content{
      //background-color: #42b983;
      color: rgba(52, 52, 52, 0.78);
      font-size: @Gao*30vh;
      margin-top: @Gao*55vh;
      margin-left: @Kuan*10vw;
      padding: 0 @Kuan*20vw;
    }
  }

  .SGC_hidInfo{
    padding:10px 0;
    width: 100%;
    overflow: scroll;
    position: fixed;
    top: 1334vh*@Gao;
    //width: 100%;
    transition: 1.5s;
    left: 0;
    height: 1334vh*@Gao;
    background-color: white;
    z-index: 99;
        .SGC_comment{
          .SGCC_info{
            .SGCCI_nameT{
              position: absolute;
              //background-color: #ff6700;
              font-size: @Gao*30vh;
              line-height:@Gao*55vh ;
              left: 60vw*@Kuan;
            }
          }
        }
  }
}
</style>
