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
  height: 90rem/50;
  width: 100%;
  display: block;
  background:linear-gradient(45deg, rgba(252, 96, 118, 0.99) 0%, rgba(255, 154, 68, 0.99) 100%);
  color: #42b983;
  border-radius: 3rem/50;
  .text{
    color: white;
    font-size: 50rem/50;
    line-height: 90rem/50;
    text-align: center;
  }
}

</style>
