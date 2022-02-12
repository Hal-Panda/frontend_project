<template>
  <div class="userShow">
    <div class="US_base">
      <img v-bind:src="userIcon" alt="" @click="iconChange">
      <div class="US_name" @click="infoChange">
        {{ userName }}
      </div>
      <div class="US_describe"  @click="infoChange">
        签名：{{userDescribe}}
      </div>
    </div>
    <div class="US_other">
      <div class="USO_list">
        <router-link class="USOL" to="userBaseInfo"><span class="fa fa-user"></span>我的信息</router-link>
      </div>
      <div class="USO_list">
        <router-link class="USOL" to="changePsw"><span class="fa fa-key"></span>修改密码</router-link>
      </div>
      <div class="USO_list">
        <router-link class="USOL" to="myOrder"><span class="fa fa-align-justify"></span>我的订单</router-link>
      </div>
      <div class="USO_list">
        <router-link class="USOL" to="packetShow"><span class="fa fa-credit-card"></span>钱包</router-link>
      </div>
      <div class="USO_list">
        <router-link class="USOL" to="setter"><span class="fa fa-cog"></span>设置</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {request} from "../../network/request";

export default {
  name: "userShow",
  methods:{
    infoChange(){
      this.$router.push("userBaseInfo")
    },
    iconChange(){
      alert("暂不支持修改头像")
    }
  },
  created() {
    request({
      url: '/cuser/getUserInfo',
      headers: {
        token: sessionStorage.getItem("token")
      },
    }).then(res => {
      this.userName=res['data']['username'];
      this.userDescribe=res['data']['userdescribe'];
      this.userIcon=res['data']['usericon']

    }).catch(err => {
      console.log(err);
    })
  },
  data() {
    return {
      userName: "",
      userDescribe: "",
      userIcon:"",
    }
  }
}
</script>

<style lang="less" scoped>
.userShow {
  .US_base {
    margin: @Gao*5vh @Kuan*5vw;
    position: relative;
    //background-color: #ff253a;
    box-shadow: @Kuan*0vw @Gao*1vh @Gao*8vh rgba(187, 184, 184, 0.88);
    padding-left: @Kuan*20vw;
    padding-top: @Gao*10vh;
    padding-bottom: @Gao*10vh;

    img {
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

    .US_name {
      //float: left;
      //background-color: rgba(155, 154, 154, 0.19);
      font-size: @Gao*45vh;
      position: absolute;
      font-weight: 700;
      top: @Gao*10vh;
      left: @Kuan*260vw;
      color: rgba(21, 21, 21, 0.88);
    }

    .US_describe {
      position: absolute;
      top: @Gao*150vh;
      left: @Kuan*265vw;
      font-size: @Gao*30vh;
      width: @Kuan*450vw;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: rgba(86, 86, 86, 0.88);
    }
  }

  .US_other {
    margin: @Gao*60vh @Kuan*5vw;

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
