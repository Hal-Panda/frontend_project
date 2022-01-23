<template>
  <div class="xh_user">
    <topBar>{{ title }}</topBar>
    <div class="xh_range">
      <div class="xh_centent">
<!--        <button @click="toLogin">toLogin</button>-->
<!--        <button class="lg_back" @click="showData">{{ $store.state.backRecord }}showValue</button>-->
        <userShow></userShow>
      </div>
      <blankPadding></blankPadding>
    </div>
  </div>
  <mainGuide></mainGuide>
</template>

<script>
import topBar from "../components/content/topBar";
import mainGuide from "../components/common/mainGuide";
import blankPadding from "../components/content/blankPadding";
import userShow from "./User/userShow";

export default {
  name: "user",
  components: {
    topBar, mainGuide,blankPadding,userShow
  },
  methods: {
    // toLogin() {
    //   this.$router.push('/login')
    // },
    // showData() {
    //   alert(sessionStorage.getItem('xionghhhh'))
    // }
  },
  data() {
    return {
      title: "用户中心",
    }
  }
}
</script>

<style lang="less" scoped>
.xh_user {
  .xh_range {
    margin-top: @TopTitleHeigh;
    overflow: hidden;
    //height: @MainContantHeigh;
    //overflow: scroll;
    .xh_centent {
      //height: 2000rem/50;
      //background-color: #ff6700;
    }
  }
}
</style>
