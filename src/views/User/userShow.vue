<template>
<div class="userShow">
  <div class="US_base">
    <img src="https://img1.baidu.com/it/u=330753258,1076063408&fm=26&fmt=auto" alt="">
    <div class="US_name">
      扫地僧
    </div>
    <div class="US_describe">
      签名：吾日三省吾身：为人谋而不忠乎？与朋友交而不信乎？传不习乎？
    </div>
  </div>
  <div class="US_other">
    <div class="USO_list">
      <router-link class="USOL" to=""><span class="fa fa-user"></span>我的信息</router-link>
    </div>
    <div class="USO_list">
      <router-link class="USOL" to=""><span class="fa fa-key"></span>修改密码</router-link>
    </div>
    <div class="USO_list">
      <router-link class="USOL" to=""><span class="fa fa-align-justify"></span>我的订单</router-link>
    </div>
    <div class="USO_list">
      <router-link class="USOL" to=""><span class="fa fa-info-circle"></span>帮助</router-link>
    </div>
    <div class="USO_list">
      <router-link class="USOL" to=""><span class="fa fa-cog"></span>设置</router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "userShow"
}
</script>

<style lang="less" scoped>
.userShow{
  .US_base{
    margin: @Gao*5vh @Kuan*5vw;
    position: relative;
    //background-color: #ff253a;
    box-shadow: @Kuan*0vw @Gao*1vh @Gao*8vh rgba(187, 184, 184, 0.88);
    padding-left:@Kuan*20vw ;
    padding-top:@Gao*10vh;
    padding-bottom:@Gao*10vh ;
    img{
      width: @Kuan*200vw;
      height: @Gao*200vh;
      //float: left;
      position: relative;
      //padding: @Gao*20vh;
      border-radius: @Gao*15vh;
      left: @Kuan*10vw;
      display: block;
      //background-color: rgba(175, 166, 166, 0.26);
    }
    .US_name{
      //float: left;
      //background-color: rgba(155, 154, 154, 0.19);
      font-size: @Gao*45vh;
      position: absolute;
      font-weight:700;
      top: @Gao*10vh;
      left: @Kuan*260vw;
      color: rgba(21, 21, 21, 0.88);
    }
    .US_describe{
      position: absolute;
      top: @Gao*150vh;
      left: @Kuan*265vw;
      font-size:@Gao*30vh ;
      width: @Kuan*450vw ;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: rgba(86, 86, 86, 0.88);
    }
  }
  .US_other{
    margin:@Gao*60vh @Kuan*5vw ;
    .USO_list{
      font-size: @Gao*35vh ;
      line-height: @Gao*120vh ;
      box-shadow: @Kuan*0vw @Gao*1vh @Gao*3vh rgba(187, 184, 184, 0.28);

      padding-left: @Kuan*50vw;
      //text-align: center;
      span{
        font-size: @Gao*25vh;
        padding-right:@Kuan*20vw ;
      }
      .USOL{
        color: rgba(52, 52, 52, 0.75);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0); //取消默认选中的背景颜色
      }
    }
  }
}
</style>
