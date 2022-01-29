<template>
  <slot></slot>
  <div class="fa fa-angle-up g_mook"></div>

</template>

<script>
export default {
  name: "blankPadding"
}
</script>

<style lang="less" scoped>
.g_mook{
  visibility: hidden;
  line-height: @TopTitleHeigh;
  width: 100%;
}
</style>
