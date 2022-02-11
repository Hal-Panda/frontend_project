<template>
  <div class="payGoodInfoShow">
    <div class="PGIS_range">
      <div
        v-for="(item,index) in  JSON.parse(this.$route.query['infos'])" class="SCS_Part">

        <img v-bind:src="item['goodfirimg']" alt="">
        <div class="SCS_content"><a href="#">{{ item['goodname'] }}</a></div>
        <div class="SCS_sunMoney">总价：{{ ((item['goodprice'] * 100) * item['goodcount']) / 100 }}元</div>
        <div class="SCS_count">
          <div class="countRecord">
            <label>数量：</label>
            <span>{{ item['goodcount'] }}</span>
          </div>
        </div>
        <div class="SCS_money">单价：{{ item['goodprice'] }}元</div>
      </div>
    </div>
    <div class="PGIS_hidBT" @click="showHiden">
      <div class="PGISH">
        --------{{hidenText}}更多所购商品信息--------
      </div>
      <div class="PGIS_hidBB" v-bind:class="hidenIcon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "payGoodInfoShow",
  methods:{
    showHiden(){
      if (this.hidenFlat){
        this.hidenFlat=false;
        let tab = document.getElementsByClassName('PGIS_range');
        tab[0].style.overflow="inherit";
        this.hidenIcon=this.hidenIconData[1];
        this.hidenText=this.hidenTextData[1];
      }
      else {
        this.hidenFlat=true;
        let tab = document.getElementsByClassName('PGIS_range');
        tab[0].style.overflow="hidden";
        this.hidenIcon=this.hidenIconData[0];
        this.hidenText=this.hidenTextData[0];
      }


    },
  },
  data() {
    return {
      infoList: [{
        goodname: "撒旦",
        goodprice: 1111.01,
        other: 2,
        showimgid: "https://img1.baidu.com/it/u=330753258,1076063408&fm=26&fmt=auto"
      }, {
        goodname: "撒旦",
        goodprice: 1111.01,
        other: 2,
        showimgid: "https://img1.baidu.com/it/u=330753258,1076063408&fm=26&fmt=auto"
      }, {
        goodname: "撒旦",
        goodprice: 1111.01,
        other: 2,
        showimgid: "https://img1.baidu.com/it/u=330753258,1076063408&fm=26&fmt=auto"
      },],

      hidenFlat:true,
      hidenIcon:'fa fa-sort-down',
      hidenIconData:['fa fa-sort-down','fa fa-sort-up'],
      hidenText:'展示',
      hidenTextData:['展示','隐藏'],
    }
  }
}
</script>

<style lang="less" scoped>
.payGoodInfoShow {
  position: relative;
  top: @Gao*50vh;

  .PGIS_range {
    position: relative;
    height: @Gao*290vh;
    overflow: hidden;
    width: 100%;
    .SCS_Part {
      position: relative;
      //border-radius: @Gao*30vh;
      margin-top: @Gao*8vh;
      width: 90%;
      height: @Gao*270vh;
      padding-top: @Gao*10vh;
      margin-left: 5%;
      //margin-right: 5%;
      box-shadow: @Kuan*2vw @Kuan*2vw @Kuan*15vw rgba(187, 184, 184, 0.88);
      float: left;


      img {
        margin-left: @Kuan*5vw;
        //margin-top: @Gao*5vh;
        width: @Kuan*230vw;
        height: @Gao*260vh;
        float: left;
        //border-radius: @Gao*25vh;

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
          font-weight: 700;
          color: rgba(52, 52, 52, 0.78);
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0); //取消默认选中的背景颜色
        }
      }

      .SCS_sunMoney {
        position: absolute;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        top: 41%;
        left: 40%;
        //left: @Kuan*240vw;
        font-size: @Gao*30vh;
        color: rgba(86, 86, 86, 0.78);
      }

      .SCS_count {
        position: absolute;
        top: 70%;
        left: 40%;
        color: rgba(86, 86, 86, 0.78);

        .countRecord {
          line-height: @Gao*80vh;

          label {
            font-size: @Gao*30vh;
          }

          span {
            font-size: @Gao*30vh;
            position: relative;
          }
        }
      }

      .SCS_money {
        position: absolute;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        top: 60%;
        left: 40%;
        //left: @Kuan*240vw;
        font-size: @Gao*30vh;
        color: rgba(86, 86, 86, 0.78);

        span {
          color: rgba(86, 86, 86, 0.78);
          font-size: @Gao*25vh;
        }
      }
    }
  }

  .PGIS_hidBT {
    color: #989898;

    .PGISH {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-top: @Gao*20vh;
      font-size: @Gao*35vh;
    }

    .PGIS_hidBB {
      width: 100%;
      display: flex;
      justify-content: center;
      //margin-top: @Gao*-10vh;
      font-size: @Gao*20vh;
    }

    //position: relative;
    //margin-top: @Gao*10vh;

  }
}
</style>
