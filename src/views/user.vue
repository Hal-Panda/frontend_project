<template>
  <div class="xh_user">
    <topBar>{{ title }}</topBar>
    <div class="xh_range">
      <div class="xh_centent">
        4
      </div>
    </div>
  </div>
</template>

<script>
import topBar from "../components/content/topBar";

export default {
  name: "user",
  components:{
    topBar
  },
  data(){
    return{
      title:"用户中心",
    }
  }
}
</script>

<style lang="less" scoped>
.xh_user{
  .xh_range {
    margin-top: 90rem/50;
    height: 1143.6rem/50;
    overflow: scroll;

    .xh_centent {
      height: 2000rem/50;
      background-color: #ff6700;
    }
  }
}
</style>
