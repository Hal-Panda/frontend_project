<template>
  <div class="userBaseInfo">
    <backTopBar>我的信息</backTopBar>
    <div class="UBI_info">
      <div class="UBI_icon" @click="changeIcon">
        <img v-bind:src="userInfo['usericon']" alt="">
      </div>
      <div class="UBI_name">
        姓名：<span>{{ userInfo['userrealname'] }}</span>
      </div>
      <div class="UBI_userName">
        用户名：<span>{{ userInfo['username'] }}</span>
      </div>
      <div class="UBI_sex">
        性别：
        <span>{{ sexDataForm(userInfo['sex']) }}</span>
      </div>
      <div class="UBI_date">
        出生日期：<span>{{ changeDateForm(userInfo['birthday']) }}</span>
      </div>
      <div class="UBI_other">
        签名：{{ userInfo['userdescribe'] }}
      </div>
    </div>
    <div class="UBI_botton">
      <span @click="changeInfo">修改信息</span>
    </div>

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
        出生日期：<input type="date" v-model="changeBir">
      </div>
      <div class="UBI_other">
        签名：&nbsp;&nbsp;&nbsp;&nbsp;<textarea v-model="changeDescreibe"></textarea>
      </div>
      <div class="UBI_botton2">
        <span @click="cancelChangeInfo">取消</span><span @click="change">确认修改</span>
      </div>
    </div>

  </div>
</template>

<script>
import backTopBar from "../../components/common/backTopBar";
import {request} from "../../network/request";

export default {
  name: "userBaseInfo",
  components: {backTopBar},
  methods: {
    change() {
      if (confirm("确定修改？")) {
        let data=new Date(this.changeBir)
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
            birthday: data,
            describe: this.changeDescreibe
          }
        }).then(res => {
            if (res['data']==1){
              alert("修改成功")
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
    changeInfo() {
      var tab = document.getElementsByClassName('UBI_change');
      tab[0].setAttribute('style', 'top: 0 !important');
    },
    cancelChangeInfo() {
      var tab = document.getElementsByClassName('UBI_change');
      tab[0].setAttribute('style', 'top: -120vh !important');
    },
    changeIcon() {
      alert("暂不支持修改头像")
    },
    changeDateForm(time) {
      let date = new Date(time);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (month < 10) {
        month = "0" + month
      }
      if (day < 10) {
        day = "0" + day;
      }
      this.changeBir = year + "-" + month + "-" + day;
      return this.changeBir;
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

    }
  }
}
</script>

<style lang="less" scoped>
.userBaseInfo {
  .UBI_info {

    div {
      display: flex;
      margin-bottom: @Gao*30vh;
      //box-shadow: @Kuan*0vw @Kuan*1vw @Kuan*3vw rgba(187, 184, 184, 0.88);
      padding-left: 10%;
      width: 80%;
      font-size: @Gao*35vh;
      line-height: @Gao*70vh;
    }

    .UBI_icon {

      height: @Gao*300vh;
      width: 100%;
      box-shadow: @Kuan*0vw @Kuan*0vw @Kuan*0vw rgba(187, 184, 184, 0.88);
      justify-content: center;
      padding-left: 0;

      img {
        margin-top: @Gao*20vh;
        box-shadow: @Kuan*2vw @Kuan*2vw @Kuan*15vw rgba(187, 184, 184, 0.88);
        border-radius: @Gao*10vh;
      }
    }
  }

  .UBI_botton {
    margin-top: @Gao*50vh;
    justify-content: center;
    display: flex;

    span {
      background-color: rgba(8, 211, 205, 0.66);
      padding: @Gao*15vh @Kuan*25vw;
      border-radius: @Gao*10vh;
      color: white;
      line-height: @Gao*60vh;
      font-size: @Gao*40vh;
    }
  }

  .UBI_change {
    position: absolute;
    width: 100%;
    top: -120vh;
    //top: 0;
    height: @Gao*1100vh;
    padding-top: @Gao*300vh;
    //display: none;
    box-shadow: @Kuan*2vw @Kuan*2vw @Kuan*15vw rgba(187, 184, 184, 0.88);
    background-color: white;
    transition: 2s;

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

      span {
        background-color: rgba(211, 62, 8, 0.66);
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
