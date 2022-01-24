<template>
  <div class="loginShow">
    <backTopBar>登录</backTopBar>
    <div class="LS">
      <div class="LS_part">
        <div class="LSP_user">
          <label for="user">账号</label><input id="user" type="text" v-model="user">
        </div>
        <div class="LSP_password">
          <label for="pass">密码</label><input id="pass" type="password" v-model="password">
        </div>
        <div class="LSP_login">
          <label @click="login">登录</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import backTopBar from "../../components/common/backTopBar";

export default {
  name: "loginShow",
  components: {
    backTopBar
  },
  methods:{
    login(){

      // alert('账号:'+this.user+"   "+"密码:"+this.password)
    }
  },
  data(){
    return{
      user:"",
      password:"",
    }
  }
}
</script>

<style lang="less" scoped>
.loginShow {
  background-image: url("../../assets/img/img.png");
  background-repeat: no-repeat;
  background-size: cover;
  transition: 2s;
  width: 100%;
  height: @Gao*1334vh;
  .LS{
    .LS_part{
      transition: 1s;
      background-color: rgba(255, 255, 255, 0.38);
      border: @Gao*1vh solid rgba(187, 184, 184, 0.28);
      border-radius: @Gao*25vh;
      position: absolute;
      top: @Gao*500vh;
      left: 10%;
      text-align: center;
      width: @Kuan*600vw;
      //height: @Gao*300vh;
      line-height:@Gao*100vh ;
      padding-top: @Gao*33vh;
      //background-color: #9e9e9e;
      .LSP_user{
        input{
          margin-left: @Kuan*10vw;
          font-size: @Gao*35vh;
          border-radius: @Gao*10vh;
          border: 2px solid rgba(0, 0, 0, 0.50);
          width:@Kuan*330vw ;
          padding-left: @Kuan*10vw;
          background-color: rgba(238, 238, 238, 0.01);
          transition: 0.5s;
          &:focus{
            background-color: white;
            font-size: @Gao*45vh;
            border: 2px solid #ff6700;
          }
        }
        label{
          font-size: @Gao*35vh;
          color: white;
        }
      }
      .LSP_password{
        input{
          margin-left: @Kuan*10vw;
          font-size: @Gao*35vh;
          border-radius: @Gao*10vh;
          border: 2px solid rgba(0, 0, 0, 0.50);
          background-color: rgba(238, 238, 238, 0.01);
          width:@Kuan*330vw ;
          padding-left: @Kuan*10vw;
          transition: 0.5s;
          &:focus{
            background-color: white;
            font-size: @Gao*45vh;
            border: 2px solid #ff6700;
          }
        }
        label{
          font-size: @Gao*35vh;
          color: white;
        }
      }
      .LSP_login{
        label{
          font-size: @Gao*40vh;
          font-weight: 700;
          padding: @Gao*10vh @Kuan*10vw;
          border: @Gao*1vh solid white;
          //background-color: rgba(114, 113, 113, 0.54);
          border-radius: @Gao*30vh;
          color: white;
          transition: 1s;
          &:hover{
            background-color: white;
            color: #ff6700;
          }
        }
      }
    }
  }
}
</style>
