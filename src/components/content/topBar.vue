<template>
    <div class="xh_top_bar">
      <div class="text"><slot></slot></div>
    </div>
</template>

<script>
export default {
  name: "topBar"
}
</script>

<style lang="less" scoped>
.xh_top_bar{
  position: fixed;
  top: 0;
  height: @TopTitleHeigh;
  width: 100%;
  display: block;
  background:linear-gradient(45deg, rgba(252, 96, 118, 0.99) 0%, rgba(255, 154, 68, 0.99) 100%);
  color: #42b983;
  border-radius: @Gao*3vh;
  z-index: 99;
  .text{
    color: white;
    font-weight:700;
    font-size: @TopTitleHeigh/2;
    line-height: @TopTitleHeigh;
    text-align: center;
  }
}

</style>
