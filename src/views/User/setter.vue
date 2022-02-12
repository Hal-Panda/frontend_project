<template>
  <div class="setter">
    <backTopBar>设置</backTopBar>
    <div class="US_other">
      <div class="USO_list" @click="overLogin">
        <div class="USOL" >退出登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import backTopBar from "../../components/common/backTopBar";
import {request} from "../../network/request";

export default {
  name: "setter",
  components: {backTopBar},
  methods:{
    overLogin(){
      request({
        url: '/cuser/enterVoid',
        headers: {
          token: sessionStorage.getItem("token")
        },
      }).then(res => {
          if (res['code']==100){
            sessionStorage.setItem("token","null");
            this.$router.push("/");
          }
      }).catch(err => {
        console.log(err);
      })

    }
  },
}
</script>

<style lang="less" scoped>
.setter {
  .US_other {
    margin: @Gao*5vh @Kuan*5vw;

    .USO_list {
      font-size: @Gao*40vh;
      line-height: @Gao*120vh;
      box-shadow: @Kuan*0vw @Gao*1vh @Gao*3vh rgba(187, 184, 184, 0.28);

      //padding-left: @Kuan*50vw;
      //text-align: center;
      text-align: center;

      .USOL {
        color: rgba(52, 52, 52, 0.75);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0); //取消默认选中的背景颜色
      }
    }
  }
}
</style>
