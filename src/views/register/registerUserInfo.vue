<template>
<div class="registerUserInfo">
  <topBar>信息填写</topBar>
  <div class="UBI_change">
    <div class="UBI_name">
      姓名：&nbsp; &nbsp;<input type="text" v-model="changeName">
    </div>
    <div class="UBI_userName">
      用户名：<input type="text" v-model="changeUserName">
    </div>
    <div class="UBI_sex">
      性别：&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="radio" value="1" name="sex" v-model="changeSex">男<input value="0" type="radio" name="sex"
                                                                           v-model="changeSex">女
    </div>
    <div class="UBI_date">
      出生日期：<input type="date" v-model="dataRecord">
    </div>
    <div class="UBI_other">
      签名：&nbsp;&nbsp;&nbsp;&nbsp;<textarea v-model="changeDescreibe"></textarea>
    </div>
    <div class="UBI_botton2">
      <span class="UBIB" @click="cancelChangeInfo">跳过</span><span @click="change">提交</span>
    </div>
  </div>
</div>
</template>

<script>
import topBar from "../../components/content/topBar";
import {request} from "../../network/request";
export default {
  name: "registerUserInfo",
  components:{topBar},
  methods: {
    killBlank(str){
      return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    },
    change() {

      if (confirm("确定提交？")) {
        this.changeName=this.killBlank(this.changeName);
        this.changeUserName=this.killBlank(this.changeUserName);
        this.changeDescreibe=this.killBlank(this.changeDescreibe);
        request({
          method: "post",
          url: '/cuser/changeMainInfo',
          headers: {
            token: sessionStorage.getItem("token")
          },
          data: {
            realName: this.changeName,
            userName: this.changeUserName,
            sex: this.changeSex,
            birthday: this.dataRecord,
            describe: this.changeDescreibe
          }
        }).then(res => {
          if (res['data']==1){
            alert("提交成功")
            sessionStorage.setItem("token","null");
            this.$router.push("user")
          }
          else {
            alert("修改失败，请重试")
          }
        }).catch(err => {
          console.log(err);
        })
      }
    },
    cancelChangeInfo() {
      this.$router.push("/");
    },
    changeIcon() {
      alert("暂不支持修改头像")
    },

    sexDataForm(num) {
      if (num == 1) {
        return "男"
      } else if (num == 0) {
        return "女"
      } else {
        return "未知"
      }
    }
  },
  created() {

    request({
      url: '/cuser/getUserMainInfo',
      headers: {
        token: sessionStorage.getItem("token")
      },
    }).then(res => {
      this.userInfo = res['data'];
      this.changeUserName = this.userInfo['username'];
      this.changeName = this.userInfo['userrealname'];
      this.changeBir = this.userInfo['birthday'];
      this.changeSex = this.userInfo['sex'];
      this.changeDescreibe = this.userInfo['userdescribe'];

      this.dataRecord=this.changeDateForm(this.changeBir);
    }).catch(err => {
      console.log(err);
    })
  },
  data() {
    return {
      userInfo: {},
      changeUserName: "",
      changeName: "",
      changeBir: "",
      changeSex: "",
      changeDescreibe: "",
      dataRecord:"",
    }
  }
}
</script>

<style lang="less" scoped>
.registerUserInfo{

  .UBI_change {
    position: absolute;
    width: 100%;
    //top: -120vh;
    //top: 0;
    //height: @Gao*1100vh;
    margin-top: @Gao*150vh;
    //display: none;
    //box-shadow: @Kuan*2vw @Kuan*2vw @Kuan*15vw rgba(187, 184, 184, 0.88);
    background-color: white;
    //transition: 2s;

    div {
      display: flex;
      margin-bottom: @Gao*30vh;
      //box-shadow: @Kuan*0vw @Kuan*1vw @Kuan*3vw rgba(187, 184, 184, 0.88);
      padding-left: 15%;
      width: 70%;
      font-size: @Gao*35vh;
      line-height: @Gao*70vh;
    }

    .UBI_name, .UBI_userName {
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

    .UBI_sex {
      input {
        position: relative;
        top: @Gao*15vh;
      }
    }

    .UBI_other {
      textarea {
        width: 60%;
        height: @Gao*180vh;
        margin-left: @Kuan*10vw;
        font-size: @Gao*35vh;
        border-radius: @Gao*10vh;
        border: @Gao*1vh solid rgba(0, 0, 0, 0.50);
        background-color: rgba(238, 238, 238, 0.01);
        //width:@Kuan*330vw ;
        padding-left: @Kuan*10vw;
        transition: 0.5s;

        &:focus {
          background-color: white;
          font-size: @Gao*35vh;
          border: @Gao*2vh solid #ff6700;
        }
      }
    }

    .UBI_date {
      input {
        width: 60%;
        //height: @Gao*180vh;
        margin-left: @Kuan*10vw;
        font-size: @Gao*25vh;
        border-radius: @Gao*10vh;
        border: @Gao*1vh solid rgba(0, 0, 0, 0.50);
        background-color: rgba(238, 238, 238, 0.01);
        //width:@Kuan*330vw ;
        padding-left: @Kuan*10vw;
        transition: 0.5s;
      }
    }

    .UBI_botton2 {
      margin-top: @Gao*50vh;
      justify-content: space-around;
      display: flex;
      .UBIB{
        background-color: #696969;
      }
      span {
        background-color: #ff6700;
        padding: @Gao*15vh @Kuan*25vw;
        border-radius: @Gao*10vh;
        color: white;
        line-height: @Gao*60vh;
        font-size: @Gao*40vh;

      }
    }
  }
}
</style>
