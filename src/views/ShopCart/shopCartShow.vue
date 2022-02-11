<template>
  <div class="shopCartShow">
    <div
      v-for="(item,index) in getVal" class="SCS_Part">
      <input class="SCB_SoloCheck" type="checkbox" name="shop" @click="chooseGood(index)">
      <img @click="toGoodShow(item['goodMainId'])" v-bind:src="item['firImgAddress']" alt="">
      <div class="SCS_content"><a href="">{{ item['goodName'] }}</a></div>
      <div class="SCS_count">
        <div class="countRecord">
          <button @click="des(index)" :disabled="counts[index]<=1">-</button>
          <span>{{ counts[index] }}</span>
          <button @click="inc(index)">+</button>
        </div>
      </div>
      <div class="SHC_cancel" @click="cancelGood(index)">×</div>
      <div class="SCS_money"><span>￥</span>{{ item['goodPrice'] }}</div>
    </div>
  </div>
  <div class="shopCartBottom">
    <input class="SCB_check" type="checkbox" @click="choseAll" name="sum">
    <div class="SCB_quanxuan" >全选</div>
    <div class="SCB_sum">合计:</div>
    <div class="SCB_money"><span>￥</span>{{ sumMoney }}</div>
    <div class="SCV_go" @click="commitOrder">去结算({{ sumCounys }})</div>
  </div>
</template>

<script>
import countRecord from "../../components/common/countRecord";
import {request} from "../../network/request";
import router from "../../router";

export default {
  components: {
    countRecord
  },
  methods: {
    cancelGood(index){
      if (confirm("确定移除该商品？")){
        request({
          url: '/shopCart/cancelCartGood',
          headers: {
            token: sessionStorage.getItem("token")
          },
          params:{
            goodId:this.getVal[index]['goodId'],
          }
        }).then(res => {
          request({
            url: '/shopCart/showCart',
            headers: {
              token: sessionStorage.getItem("token")
            },
          }).then(res => {
            this.getVal = res['data'];
            for (let i = 0; i < this.getVal.length; i++) {
              this.money[i] = this.getVal[i]['goodPrice'];
              this.flat[i] = false;
              this.counts[i] = this.getVal[i]['amount']
              // this.goodIdList[i]=this.getVal[i]['goodId']
            }
          }).catch(err => {
            console.log(err);
          })
        }).catch(err => {
          console.log(err);
        })


      }
    },
    commitOrder() {
      if (this.goodIdList.length<1){
        alert("请选择商品")
      }
      else {
        router.push({
          path: "/commitOrder",
          query: {
            buyList: this.goodIdList,
          }
        });
      }

    },
    toGoodShow(id) {
      this.$router.push('/showGood/' + id)
    },
    choseAll() {
      if (this.allFlat == false) {
        this.allFlat = true;
        let ones = document.getElementsByClassName('SCB_SoloCheck');
        // input.setAttribute('checked',true)
        this.goodIdList=[];
        for (let i = 0; i < ones.length; i++) {
          this.goodIdList.push([this.getVal[i]['goodId'],this.getVal[i]['amount'],this.getVal[i]['firImgAddress']])
          ones[i].checked = true;
          this.flat[i] = true;
        }
        this.reloadPrice();
      } else if (this.allFlat == true) {
        this.goodIdList=[];
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
    des(index) {
      if (this.flat[index]){
        this.goodIdList.some((item,i)=>{
          if (item[0]==this.getVal[index]['goodId']){
            this.goodIdList.splice(i,1)
            return true
          }
        })
        this.getVal[index]['amount']--;
        this.counts[index]--;
        this.goodIdList.push([this.getVal[index]['goodId'],this.getVal[index]['amount'],this.getVal[index]['firImgAddress']])
      }
      else {
        this.getVal[index]['amount']--;
        this.counts[index]--;
      }
      this.reloadPrice();
      request({
        url: '/shopCart/decCount',
        headers: {
          token: sessionStorage.getItem("token")
        },
        params:{
          goodId:this.getVal[index]['goodId'],
        }
      }).then(res => {

      }).catch(err => {
        console.log(err);
      })
    },
    inc(index) {
      if (this.flat[index]){
        this.goodIdList.some((item,i)=>{
          if (item[0]==this.getVal[index]['goodId']){
            this.goodIdList.splice(i,1)
            return true
          }
        })
        this.getVal[index]['amount']++;
        this.counts[index]++;
        this.goodIdList.push([this.getVal[index]['goodId'],this.getVal[index]['amount'],this.getVal[index]['firImgAddress']])
      }
      else {
        this.getVal[index]['amount']++;
        this.counts[index]++;
      }
      this.reloadPrice();
      request({
        url: '/shopCart/incCount',
        headers: {
          token: sessionStorage.getItem("token")
        },
        params:{
          goodId:this.getVal[index]['goodId'],
        }
      }).then(res => {

      }).catch(err => {
        console.log(err);
      })
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
    // delete(id) { //根据传入的ID来删除数据
    //   // 1.根据ID来找到要删除的这一项的索引
    //   // 2. 找到索引后，调用数组的splice方法
    //   // 方法一
    //   this.list.some((item, i) => {
    //     if (item.id == id) {
    //       this.list.splice(i, 1)
    //       // 在数组的some方法中，如果return true，就会立即终止这个数组的后续循环,所以相比较foreach，如果想要终止循环，那么建议使用some
    //       return true;
    //     }
    //   })
    // },
    chooseGood(index) {
      if (this.flat[index] == false) {
        this.flat[index] = true;
        this.goodIdList.push([this.getVal[index]['goodId'],this.getVal[index]['amount'],this.getVal[index]['firImgAddress']])
        this.reloadPrice();
        // alert(this.sumMoney)
      } else if (this.flat[index] == true) {
        this.goodIdList.some((item,i)=>{
          if (item[0]==this.getVal[index]['goodId']){
            this.goodIdList.splice(i,1)
            return true
          }
        })
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
      url: '/shopCart/showCart',
      headers: {
        token: sessionStorage.getItem("token")
      },
    }).then(res => {
      this.getVal = res['data'];
      for (let i = 0; i < this.getVal.length; i++) {
        this.money[i] = this.getVal[i]['goodPrice'];
        this.flat[i] = false;
        this.counts[i] = this.getVal[i]['amount']
        // this.goodIdList[i]=this.getVal[i]['goodId']
      }
    }).catch(err => {
      console.log(err);
    })
  },
  data() {
    return {
      getVal: [],
      money: [],
      sumMoney: 0.0,
      counts: [],
      sumCounys: 0,
      goodIdList: [],
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

      font-size: @Gao*35vh;
      //line-height: @Gao*65vh;
      //background-color: #42b983;
      a {
        color: rgba(86, 86, 86, 0.78);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0); //取消默认选中的背景颜色
      }
    }

    .SCS_count {
      position: absolute;
      top: 60%;
      left: 70%;
      color: rgba(86, 86, 86, 0.78);
      z-index: 1;

      .countRecord {
        line-height: @Gao*80vh;

        span {
          margin: 0 @Gao*20vh;
          font-size: @Gao*40vh;
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
      font-size: @Gao*45vh;
      color: rgba(255, 0, 0, 0.66);

      span {
        color: rgba(86, 86, 86, 0.78);
        font-size: @Gao*25vh;
      }
    }
    .SHC_cancel{
      font-size: @Gao*40vh;
      position: absolute;
      top: 2%;
      right: 2%;
      &:hover{
        color: red;
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
    top: @Gao*29vh;
    left: @Kuan*28vw;

    span {
      font-size: @Gao*27vh;
      position: relative;
      top: @Gao*6vh;
      //left: @Kuan*4vw;
    }
  }

  .SCV_go {
    background-color: rgba(255, 0, 0, 0.74);;
    position: absolute;
    top: @Gao*13vh;
    left: @Kuan*500vw;
    border-radius: @Gao*40vh;
    font-size: @Gao*30vh;
    padding: @Gao*15vh;
    color: white;
  }
}
</style>
