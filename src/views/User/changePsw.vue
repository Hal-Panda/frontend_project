<template>
  <div class="changePsw">
    <backTopBar>修改密码</backTopBar>
    <div class="US_other">
      <div class="USO_list">
        <router-link class="USOL" to="accoutChangePsw"><span class="fa fa-user"></span>修改-账户密码</router-link>
      </div>
      <div class="USO_list">
        <router-link class="USOL" to="packetChangePsw"><span class="fa fa-credit-card"></span>修改-钱包密码</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import backTopBar from "../../components/common/backTopBar";

export default {
  name: "changePsw",
  components: {backTopBar},
}
</script>

<style lang="less" scoped>
.changePsw {
  .US_other {
    margin: @Gao*10vh @Kuan*5vw;

    .USO_list {
      font-size: @Gao*35vh;
      line-height: @Gao*120vh;
      box-shadow: @Kuan*0vw @Gao*1vh @Gao*3vh rgba(187, 184, 184, 0.28);

      padding-left: @Kuan*50vw;
      //text-align: center;
      span {
        font-size: @Gao*25vh;
        padding-right: @Kuan*20vw;
      }

      .USOL {
        color: rgba(52, 52, 52, 0.75);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0); //取消默认选中的背景颜色
      }
    }
  }
}
</style>
