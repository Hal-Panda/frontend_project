<template>
  <div class="registerBase">
    <backTopBar>注册</backTopBar>
    <div class="RGB_content">
      <div class="UBI_metaPsw">
        注册账号：&nbsp;<input type="text" v-model="userId">
      </div>
      <div class="UBI_metaPsw">
        注册用户名：<input type="text" v-model="userName">
      </div>
      <div class="UBI_newPsw">
        登录密码：&nbsp; <input type="password" v-model="newPsw">
      </div>
      <div class="UBI_againPsw">
        再次确认：<input type="password" v-model="againPsw">
      </div>
      <div class="UBI_msg">
        {{registerMsg}}
      </div>
      <div class="UBI_botton">
        <span class="UBIB_cancel" @click="cancel">取消</span>
        <span class="UBIB_commit" @click="commit">提交</span>
      </div>
    </div>
  </div>
</template>

<script>
import backTopBar from "../../components/common/backTopBar";
import {request} from "../../network/request";

export default {
  name: "registerBase",
  components: {backTopBar},
  methods:{
    cancel(){
      this.$router.go(-1);
    },
    commit(){
      this.userName=this.killBlank(this.userName);
      this.userId=this.killBlank(this.userId);
      this.newPsw=this.killBlank(this.newPsw);
      this.againPsw=this.killBlank(this.againPsw);
      if (this.userId.length<6||this.userId.length>=30){
        this.registerMsg="账号长度至少6位及以上,30位以下"
        setTimeout(this.turnEmpty, 5000);
        return;
      }
      if (this.userName.length<1){
        this.registerMsg="用户名不能为空"
        setTimeout(this.turnEmpty, 3000);
        return;
      }
      if (this.userName.length>20){
        this.registerMsg="用户名长度不能超过20位"
        setTimeout(this.turnEmpty, 3000);
        return;
      }
      if (this.newPsw != this.againPsw) {
        this.registerMsg="设置密码不一致"
        setTimeout(this.turnEmpty, 3000);
        return
      }
      if (this.newPsw.length<6||this.newPsw.length>=20){
        this.registerMsg="密码长度至少6位及以上,20位以下"
        setTimeout(this.turnEmpty, 5000);
        return;
      }
      request({
        url:'/cuser/open/registerByAccout',
        method:"post",
        data:{
          userId:this.userId,
          userName:this.userName,
          password:this.newPsw
        },
      }).then(res=>{
          if (res['data']==0){
            this.registerMsg=res['msg'];
            setTimeout(this.turnEmpty, 5000);
            return
          }
          else if (res['data']==1){
            request({
              url:'/cuser/open/loginBP',
              method:"post",
              data:{
                userId:this.userId,
                userPassword:this.newPsw,
              },
            }).then(res=>{
              if (res['code']==200){
                sessionStorage.setItem("token",res['data'])
                  this.$router.push("registerPacketInfo");
              }
              else {
                alert("出错了，请重新登录")
              }
            }).catch(err=>{
              console.log((err));
            })
          }

      }).catch(err=>{
        console.log((err));
      })
    },
    turnEmpty(){
      this.registerMsg="";
    },
    killBlank(str){
      return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }
  },
  data(){
    return{
      registerMsg:"",
      newPsw:"",
      againPsw:"",
      userId: "",
      userName:""
    }
  }
}
</script>

<style lang="less" scoped>
.registerBase {
  .RGB_content {
    div {
      display: flex;
      margin-top: @Gao*50vh;
      //box-shadow: @Kuan*0vw @Kuan*1vw @Kuan*3vw rgba(187, 184, 184, 0.88);
      padding-left: 8%;
      width: 80%;
      font-size: @Gao*30vh;
      line-height: @Gao*70vh;
      justify-content: center;

      input {
        margin-left: @Kuan*10vw;
        font-size: @Gao*35vh;
        border-radius: @Gao*10vh;
        border: @Gao*1vh solid rgba(0, 0, 0, 0.50);
        background-color: rgba(238, 238, 238, 0.01);
        width: @Kuan*330vw;
        padding-left: @Kuan*10vw;
        transition: 0.5s;

        &:focus {
          background-color: white;
          font-size: @Gao*45vh;
          border: @Gao*2vh solid #ff6700;
        }
      }
    }

    .UBI_metaPsw {

    }

    .UBI_newPsw {

    }

    .UBI_againPsw {
      font-size: @Gao*30vh;
    }

    .UBI_msg{
      position: relative;
      top: @Gao*15vh;
      //background-color: #ff6700;
      color: red;
      margin: 0;
      left: 8%;
      //left: -20%;
      display: flex;
      justify-content: center;
    }

    .UBI_botton {
      //margin-top: @Gao*70vh;
      margin-left: 2%;
      justify-content: space-around;
      display: flex;

      span {
        padding: @Gao*15vh @Kuan*25vw;
        border-radius: @Gao*10vh;
        color: white;
        line-height: @Gao*60vh;
        font-size: @Gao*40vh;
      }
      .UBIB_cancel{
        background-color: dimgrey;
      }
      .UBIB_commit{
        background-color: #ff6700;
      }
    }
  }
}
</style>
