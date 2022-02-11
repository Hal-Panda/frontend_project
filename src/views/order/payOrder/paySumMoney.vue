<template>
<div class="paySumMoney">
  <div class="SCS_sumMoney">
    <div>总金额:
      <slot></slot>
      元
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "paySumMoney"
}
</script>

<style lang="less" scoped>
.paySumMoney{
  margin-top: @Gao*35vh;
  .SCS_sumMoney {
    line-height: @Gao*80vh;
    position: relative;
    //border-radius: @Gao*20vh;
    margin-top: @Gao*30vh;
    margin-bottom: @Gao*30vh;
    width: 100%;
    //padding-top: @Gao*0vh;
    //margin-left: 5%;
    //margin-right: 5%;
    box-shadow: @Kuan*0vw @Kuan*-1vw  @Kuan*2vw rgba(211, 209, 209, 0.88);
    //float: left;
    display: flex;
    justify-content: right;
    //align-items: center;

    div {
      padding:@Gao*10vh @Kuan*35vw;
      font-size: @Gao*40vh;
      color: #6b6a6a;
      font-weight: 700;
    }
  }
}
</style>
