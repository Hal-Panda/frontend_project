<template>
  <div class="shopCartShow">
    <div
      v-for="(item,index) in getVal" class="SCS_Part">
      <input class="SCB_SoloCheck" type="checkbox" name="shop" @click="chooseGood(index)">
      <img src="https://img1.baidu.com/it/u=330753258,1076063408&fm=26&fmt=auto" alt="">
      <div class="SCS_content"><a href="">{{ item['decribe'] }}</a></div>
      <div class="SCS_count">
        <div class="countRecord">
          <button @click="des(index)" :disabled="counts[index]<=1">-</button>
          <span>{{ counts[index] }}</span>
          <button @click="inc(index)">+</button>
        </div>
      </div>
      <div class="SCS_money"><span>￥</span>{{ money[index] }}</div>
    </div>
  </div>
  <div class="shopCartBottom">
    <input class="SCB_check" type="checkbox" @click="choseAll" name="sum">
    <div class="SCB_quanxuan">全选</div>
    <div class="SCB_sum">合计:</div>
    <div class="SCB_money"><span>￥</span>{{ sumMoney }}</div>
    <div class="SCV_go">去结算({{ sumCounys }})</div>
  </div>
</template>

<script>
import countRecord from "../../components/common/countRecord";
import {request} from "../../network/request";

export default {
  components: {
    countRecord
  },
  methods: {
    choseAll() {
      if (this.allFlat == false) {
        this.allFlat = true;
        let ones = document.getElementsByClassName('SCB_SoloCheck');
        // input.setAttribute('checked',true)
        for (let i = 0; i < ones.length; i++) {
          ones[i].checked = true;
          this.flat[i] = true;
        }
        this.reloadPrice();
      } else if (this.allFlat == true) {
        this.allFlat = false;
        let ones = document.getElementsByClassName('SCB_SoloCheck');
        // input.setAttribute('checked',true)
        for (let i = 0; i < ones.length; i++) {
          ones[i].checked = false;
          this.flat[i] = false;
        }
        this.reloadPrice();
      }
    },
    des(i) {
      this.counts[i]--;
      this.reloadPrice();
    },
    inc(i) {
      this.counts[i]++;
      this.reloadPrice();
    },
    reloadPrice() {
      this.sumMoney = 0;
      this.sumCounys = 0;
      for (let i = 0; i < this.getVal.length; i++) {
        if (this.flat[i] == true) {
          this.sumCounys += this.counts[i];
          for (let j = 0; j < this.counts[i]; j++)
            this.sumMoney += this.money[i];
        }
        this.sumMoney = Math.round(this.sumMoney * 100) / 100
      }
    },
    chooseGood(index) {
      if (this.flat[index] == false) {
        this.flat[index] = true;
        this.reloadPrice();
        // alert(this.sumMoney)
      } else if (this.flat[index] == true) {
        this.flat[index] = false;
        if (this.allFlat == true) {
          this.allFlat = false;
          let all = document.getElementsByClassName('SCB_check');
          all[0].checked = false;
        }
        this.reloadPrice();
      }
    }
  },

  name: "shopCartShow",
  created() {
    request({
      url: '/test'
    }).then(res => {
      this.getVal = res.data;

      for (let i = 0; i < this.getVal.length; i++) {
        this.money[i] = this.getVal[i]['price'];
        this.flat[i] = false;
        this.counts[i] = this.getVal[i]['goodid']
      }

    }).catch(err => {
      alert(err);
    })
  },
  data() {
    return {
      getVal: [],
      money: [],
      sumMoney: 0.0,
      counts: [],
      sumCounys: 0,
      flat: [],
      allFlat: false,
    }
  }
}
</script>

<style lang="less" scoped>
.shopCartShow {
  //width: 100%;

  .SCS_Part {
    position: relative;
    border-radius: @Gao*30vh;
    margin-top: @Gao*40vh;
    width: 90%;
    height: @Gao*270vh;
    padding-top: @Gao*10vh;
    margin-left: 5%;
    //margin-right: 5%;
    box-shadow: @Kuan*2vw @Kuan*2vw @Kuan*15vw rgba(187, 184, 184, 0.88);
    float: left;

    input {
      float: left;
      position: relative;
      top: @Gao*55vh;
      zoom: 150%;
    }

    img {
      width: @Kuan*230vw;
      height: @Gao*230vh;
      float: left;
      border-radius: @Gao*15vh;
    }

    .SCS_content {
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: @Gao*130vh;
      padding-left: @Kuan*20vw;
      margin-top: @Gao*10vh;

      font-size: @Gao*40vh;
      //line-height: @Gao*65vh;
      //background-color: #42b983;
      a {
        color: rgba(86, 86, 86, 0.78);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0); //取消默认选中的背景颜色
      }
    }

    .SCS_count {
      position: relative;
      top: @Gao*55vh;
      left: @Kuan*200vw;
      color: rgba(86, 86, 86, 0.78);
      z-index: 1;

      .countRecord {
        line-height: @Gao*80vh;

        span {
          margin: 0 @Kuan*20vw;
          font-size: @Kuan*40vw;
          position: relative;
          top: @Gao*3vh;
        }
      }
    }

    .SCS_money {
      position: relative;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      top: @Gao*-70vh;
      left: @Kuan*20vw;
      font-size: @Gao*50vh;
      color: rgba(255, 0, 0, 0.66);

      span {
        color: rgba(86, 86, 86, 0.78);
        font-size: @Gao*30vh;
      }
    }
  }
}

.shopCartBottom {
  background-color: white;
  box-shadow: @Kuan*1vw @Kuan*0vw @Kuan*7vw rgba(187, 184, 184, 0.88);
  position: fixed;
  //bottom: ;
  width: 100%;
  height: @Gao*100vh;
  top: @Gao*1133vh;
  z-index: 9;

  * {
    float: left;
  }

  .SCB_check {
    position: relative;
    top: @Gao*36vh;
  }

  .SCB_quanxuan {
    font-size: @Gao*30vh;
    position: relative;
    top: @Gao*35vh;
  }

  .SCB_sum {
    font-size: @Gao*30vh;
    position: relative;
    top: @Gao*36vh;
    left: @Kuan*25vw;
  }

  .SCB_money {
    font-size: @Gao*43vh;
    position: relative;
    top: @Gao*24vh;
    left: @Kuan*18vw;

    span {
      font-size: @Gao*27vh;
      position: relative;
      top: @Gao*9vh;
      left: @Kuan*4vw;
    }
  }

  .SCV_go {
    background-color: rgba(255, 0, 0, 0.74);;
    position: absolute;
    top: @Gao*13vh;
    left: @Kuan*550vw;
    border-radius: @Gao*40vh;
    font-size: @Gao*30vh;
    padding: @Gao*15vh;
    color: white;
  }
}
</style>
