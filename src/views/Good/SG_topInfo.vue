<template>
  <div class="SG_topInfo clearfix">
    <div class="SGT_price"><span>￥</span>20394.00</div>
    <div class="SG_text">
      <div class="SGT_titel">[有用的衣服有用]的衣服有用的衣服有 用的衣服有用的衣服有用的 衣服有用的衣服有用 的衣服有用的衣服有用的衣服</div>
      <div class="SGT_describe"><span v-for="item in (1,3)">【特12别优惠】 </span></div>
    </div>
    <div class="fa fa-star SGT_like"><span>9999+</span></div>

  </div>
</template>

<script>
export default {
  name: "SG_topInfo"
}
</script>

<style lang="less" scoped>
.SG_topInfo {
  position: relative;
  margin: @Gao*10vh @Kuan*10vw;
  //background-color: #42b983;
  border: @Gao*1vh solid rgba(187, 184, 184, 0.28);
  border-radius: @Gao*25vh;

  .SG_text {
    float: left;
    margin: @Gao*0vh @Kuan*10vw;
    width: 85%;
    //box-shadow: @Kuan*2vw @Gao*2vh @Gao*3vh rgba(187, 184, 184, 0.28);

    .SGT_titel {
      font-size: @Gao*35vh;
      margin: @Gao*0vh @Kuan*25vw;
      font-weight: 600;
      line-height: @Gao*42vh;

    }

    .SGT_describe {
      font-size: @Gao*25vh;
      padding: @Gao*15vh @Kuan*30vw;
      color: #989898;

    }
  }
  .SGT_price{
    font-size: @Gao*50vh;
    margin:0 @Kuan*25vw;
    line-height: @Gao*70vh;
    color: red;
    span{
      font-size: @Gao*30vh;
    }
  }
  .SGT_like {
    position: absolute;
    border-radius: @Gao*12vh;
    float: right;
    right:@Kuan*40vw ;
    margin-top: @Gao*-70vh;
    font-size: @Gao*50vh;
    color: #ff6700;
    span {
      position: absolute;
      left: 0;
      top: @Gao*60vh;
      font-size: @Gao*25vh;
      line-height: @Gao*35vh;
      color: #0e0e0e;
    }
  }
}
</style>
