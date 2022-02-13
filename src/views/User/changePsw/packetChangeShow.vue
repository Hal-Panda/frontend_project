<template>
  <div class="packetChangeShow">
    <div class="UBI_metaPsw">
      原密码：&nbsp; &nbsp;<input type="password" v-model="metaPsw">
    </div>
    <div class="UBI_newPsw">
      新密码：&nbsp; &nbsp;<input type="password" v-model="newPsw">
    </div>
    <div class="UBI_againPsw">
      再次确认：<input type="password" v-model="againPsw">
    </div>
    <div class="UBI_botton">
      <span @click="changeInfo">确认修改</span>
    </div>
    <div class="packetPswMsg">初始密码为账号密码后六位</div>
  </div>
</template>

<script>
import {request} from "../../../network/request";

export default {
  name: "packetChangeShow",
  methods: {
    killBlank(str){
      return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    },
    changeInfo() {
      if (confirm("确定修改？")) {
        this.newPsw=this.killBlank(this.newPsw);
        this.metaPsw=this.killBlank(this.metaPsw);
        this.againPsw=this.killBlank(this.againPsw);
        if (this.newPsw != this.againPsw) {
          alert("新密码两次输入不一致")
          return
        }
        request({
          method: "post",
          url: '/cuser/hiden/changePacketPsw',
          headers: {
            token: sessionStorage.getItem("token")
          },
          data: {
            metaPsw: this.metaPsw,
            newPsw: this.newPsw,
            againPsw: this.againPsw,
          }
        }).then(res => {
          if (res['data'] == 1) {
            alert("修改成功")
            this.$router.push("changePsw")
          } else {
            alert(res['msg'])
          }
        }).catch(err => {
          console.log(err);
        })
      }
    }
  },
  data() {
    return {
      metaPsw: "",
      newPsw: "",
      againPsw: ""
    }
  }
}
</script>

<style lang="less" scoped>
.packetChangeShow {
  div {
    display: flex;
    margin-top: @Gao*50vh;
    //box-shadow: @Kuan*0vw @Kuan*1vw @Kuan*3vw rgba(187, 184, 184, 0.88);
    padding-left: 15%;
    width: 70%;
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

  .UBI_botton {
    margin-top: @Gao*50vh;
    margin-left: @Kuan*20vw;
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
  .packetPswMsg{
    position: relative;
    display: flex;
    justify-content: center;
    color: gray;
    font-size: @Gao*30vh;
    bottom: 0;
  }
}

</style>
