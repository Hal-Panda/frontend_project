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
