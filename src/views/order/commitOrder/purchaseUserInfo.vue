<template>
  <div class="purchaseUserInfo">
    <div class="PUI_show clearfix" @click="writeBaseInfo">
      <div class="PUIS_address">
        {{ beforeData[0] }}
      </div>
      <div class="PUIS_base">手机：<span>{{ beforeData[1] }}</span>&nbsp;&nbsp;&nbsp;姓名：<span>{{ beforeData[2] }}</span>
      </div>
    </div>
    <div class="PUI_hidden">
      <div class="PUIH_name"><label for="name">姓名：</label><input v-model="commitName" id="name" type="text"></div>
      <div class="PUIH_tel"><label for="tel">手机：</label><input v-model="commitTel" id="tel" type="tel"></div>
      <div class="PUIH_address"><label>地址：</label><textarea v-model="commitAddress" id="address"></textarea></div>
      <div class="PUIH_botton">
        <div @click="cancel" class="PUIHBC">取消</div>
        <div @click="sure" class="PUIHBS">确定</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "purchaseUserInfo",
  methods: {
    sure() {
      this.beforeData[0] = this.commitAddress;
      this.beforeData[1] = this.commitTel;
      this.beforeData[2] = this.commitName;
      let tab = document.getElementsByClassName('PUI_hidden');
      tab[0].setAttribute('style', 'top:-63vh !important');
      this.$emit("getUserInfo",this.commitName,this.commitTel,this.commitAddress)
    },
    cancel() {

      let tab = document.getElementsByClassName('PUI_hidden');
      tab[0].setAttribute('style', 'top:-63vh !important');
      this.commitAddress = this.beforeData[0];
      this.commitTel = this.beforeData[1];
      this.commitName = this.beforeData[2];
    },
    writeBaseInfo() {
      let tab = document.getElementsByClassName('PUI_hidden');
      tab[0].setAttribute('style', 'top:7vh !important');
    },
  },
  data() {
    return {
      beforeData: ['请填写收货地址', "", ""],
      commitName: "",
      commitTel: "",
      commitAddress: "",
    }
  },
}
</script>

<style lang="less" scoped>
.purchaseUserInfo {
  z-index: 1;
  position: relative;

  .PUI_show {
    transition: 500ms;
    position: relative;
    border-radius: @Gao*30vh;
    margin-top: @Gao*20vh;
    width: 90%;
    //height: @Gao*270vh;
    padding-top: @Gao*10vh;
    margin-left: 5%;
    //margin-right: 5%;
    box-shadow: @Kuan*2vw @Kuan*2vw @Kuan*15vw rgba(187, 184, 184, 0.88);
    float: left;

    .PUIS_address {
      padding: @Gao*15vh @Kuan*30vw;
      font-size: @Gao*40vh;
      color: #646363;
    }

    .PUIS_base {
      padding: @Gao*25vh @Kuan*30vw;
      font-size: @Gao*30vh;
      color: #989898;
    }

  }

  .PUI_hidden {
    transition: 1s;
    top: @Gao*-900vh;
    //display: none;

    position: fixed;
    height: 600vh*@Gao;
    border-radius: @Gao*30vh;
    background-color: white;
    width: 90%;
    //height: @Gao*270vh;
    padding-top: @Gao*200vh;
    margin-left: 5%;
    //margin-right: 5%;
    box-shadow: @Kuan*2vw @Kuan*2vw @Kuan*15vw rgba(187, 184, 184, 0.88);
    float: left;
    color: #676666;
    font-size: @Gao*35vh;

    input, textarea {
      margin-left: @Kuan*10vw;
      font-size: @Gao*35vh;
      border-radius: @Gao*10vh;
      border: 2px solid rgba(0, 0, 0, 0.50);
      width: @Kuan*330vw;
      padding-left: @Kuan*10vw;
      background-color: rgba(238, 238, 238, 0.01);
      transition: 0.5s;

      &:focus {
        background-color: white;
        font-size: @Gao*45vh;
        border: 2px solid #ff6700;
      }
    }

    .PUIH_name {
      padding: @Gao*15vh @Kuan*65vw;
    }

    .PUIH_tel {
      padding: @Gao*15vh @Kuan*65vw;
    }

    .PUIH_address {
      padding: @Gao*15vh @Kuan*65vw;

      textarea {
        height: @Gao*200vh;
        font-size: @Gao*35vh;
      }

      label {
        position: relative;
        top: @Gao*-100vh;
      }
    }

    .PUIH_botton {
      //margin: @Gao*10vh @Kuan*30vw;
      margin-bottom: @Gao*20vh;
      display: flex;
      justify-content: space-around;

      .PUIHBC {
        font-size: @Gao*40vh;
        padding: @Gao*5vh @Kuan*5vw;
      }

      .PUIHBS {
        font-size: @Gao*40vh;
        background-color: #ff6700;
        color: white;
        padding: @Gao*5vh @Kuan*5vw;
        border-radius: @Gao*20vh;
      }

    }
  }

}
</style>
