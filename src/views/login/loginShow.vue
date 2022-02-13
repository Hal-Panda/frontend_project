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
          <label class="LSP_label" @click="login">登录</label>
        </div>
        <div class="LSP_toRegister" @click="toRegister">前往注册</div>
      </div>
    </div>
  </div>
</template>

<script>
import backTopBar from "../../components/common/backTopBar";
import {request} from "../../network/request";

export default {
  name: "loginShow",
  components: {
    backTopBar
  },
  methods:{
    toRegister(){
      this.$router.push("registerBase");
    },
    killBlank(str){
        return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    },
    turnWhite(){
      let tab=document.getElementsByClassName('LSP_label');
      tab[0].setAttribute('style', 'background-color: rgba(114, 113, 113, 0.01) !important');
      tab[0].style.color="white";
    },
    login(){
      let tab=document.getElementsByClassName('LSP_label');
      tab[0].setAttribute('style', 'background-color: white !important');
      tab[0].style.color="#ff6700";
      let getNum=this.killBlank(this.user);
      let getPsw=this.killBlank(this.password);
      setTimeout(this.turnWhite,500);
      if (getNum.length<1){
        alert("账号不能为空");
        return;
      }
      if (getPsw.length<1){
        alert("密码不能为空")
        return;
      }
      request({
        url:'/cuser/open/loginBP',
        method:"post",
        data:{
          userId:getNum,
          userPassword:getPsw,
        },
      }).then(res=>{
        if (res['code']==200){
          sessionStorage.setItem("token",res['data'])
          this.$router.go(-1);
        }
        else if (res['code']==-200){
          alert(res['msg']);
        }
        else {
          alert("出错了，请重新登录")
        }
      }).catch(err=>{
        console.log((err));
      })

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
          border: @Gao*2vh solid rgba(0, 0, 0, 0.50);
          width:@Kuan*330vw ;
          padding-left: @Kuan*10vw;
          background-color: rgba(238, 238, 238, 0.01);
          transition: 0.5s;
          &:focus{
            background-color: white;
            font-size: @Gao*45vh;
            border: @Gao*2vh solid #ff6700;
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
          border: @Gao*2vh solid rgba(0, 0, 0, 0.50);
          background-color: rgba(238, 238, 238, 0.01);
          width:@Kuan*330vw ;
          padding-left: @Kuan*10vw;
          transition: 0.5s;
          &:focus{
            background-color: white;
            font-size: @Gao*45vh;
            border: @Gao*2vh solid #ff6700;
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
          //background-color: rgba(114, 113, 113, 0.01);
          border-radius: @Gao*30vh;
          color: white;
          transition: 1s;
          &:hover{
            //background-color: white;
            //color: #ff6700;
          }
        }
      }
      .LSP_toRegister{
        text-decoration: underline;
        font-size: @Gao*20vh;
        position: absolute;
        bottom: 0;
        right: 5%;
        color: black;
      }
    }
  }
}
</style>
