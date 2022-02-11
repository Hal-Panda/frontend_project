<template>
  <div class="SG_bottom">
    <div class="fa fa-star SGB_like" @click="turnRed(true)">点赞</div>
    <div class="SGB_cart" @click="addShopCart">加入购物车</div>
    <div class="SGB_shop" @click="commitOrder">去购买&nbsp;</div>
  </div>
</template>

<script>
import {request} from "../../network/request";
import router from "../../router";

export default {
  name: "SG_bottom",
  methods: {
    commitOrder(){
      request({
        url: '/cuser/enterVoid',
      }).then(res => {
        if (res['code']==100){
          this.goodList[0]=[this.goodBaseInfo['goodid'],1,this.goodMainInfo['maingoodimg']];
          router.push({
            path:"/commitOrder",
            query:{
              buyList: this.goodList,
            }
          });
        }

      }).catch(err => {
        console.log(err);
      })


    },
    addShopCart(){
      request({
        url: '/shopCart/addGood',
        method: "post",
        data:{
          goodId:this.goodBaseInfo['goodid'],
          goodPrice:this.goodBaseInfo['goodprice'],
          goodName:this.goodBaseInfo['goodname'],
          goodImgId:this.goodBaseInfo['detailsimgid'],
          goodMainId:this.goodMainInfo['sellgoodsid']
        },
        headers:{
          token:sessionStorage.getItem("token")
        },
      }).then(res => {
          // alert()

        if (res['data']==1){
         if (confirm(res['msg']+",是否跳转购物车")) {
           router.push("/shopCart");
         }
        }
      }).catch(err => {
        console.log(err);
      })
    },
    turnRed(clickFlat) {
      if (this.loginFlat) {
        let tab = document.getElementsByClassName("SGB_like");
        // tab[0].setAttribute('style', 'top: 1334vh*@Gao !important');
        if (this.likeFlat == 0) {
          if (clickFlat){
            request({
              url: '/cuser/addLike',
              params: {
                sellGoodId: this.goodMainInfo['sellgoodsid']
              }
            }).then(res => {
              if (res['data'] == 1) {
                this.$emit("likeChange",1)
                this.likeFlat = 1;
                tab[0].style.color = "#ff6700";
                tab[0].style.borderColor = "#ff6700";
              } else {
                alert("异常错误，请重试")
              }
            }).catch(err => {
              console.log(err);
            })
          }
          else {
            this.likeFlat = 1;
            tab[0].style.color = "#ff6700";
            tab[0].style.borderColor = "#ff6700";
          }

        } else if (this.likeFlat == 1) {
          if (clickFlat) {
            request({
              url: '/cuser/reduceLike',
              params: {
                sellGoodId: this.goodMainInfo['sellgoodsid']
              }
            }).then(res => {
              if (res['data'] == 1) {
                this.$emit("likeChange",0)
                this.likeFlat = 0;
                tab[0].style.color = "#9e9e9e";
                tab[0].style.borderColor = "#9e9e9e";
              } else {
                alert("异常错误，请重试")
              }
            }).catch(err => {
              console.log(err);
            })
          } else {
            this.likeFlat = 0;
            tab[0].style.color = "#9e9e9e";
            tab[0].style.borderColor = "#9e9e9e";
          }
        } else {
          alert("异常错误，请重试")
        }

      } else {
        request({
          url: '/cuser/getUserLikeInfo',
          params: {
            sellGoodId: this.goodMainInfo['sellgoodsid']
          }
        }).then(res => {
          this.likeFlat = res['data'];
          this.loginFlat = true;
          this.turnRed();
        }).catch(err => {
          console.log(err);
        })
      }


      // request({
      //   url: '/show/goodDescribeImg',
      //   params: {
      //     goodDescribeImgId: this.GetInfBasePart['detailsimgid']
      //   }
      // }).then(res => {
      //   this.goodDescribeImgsData = res['data']
      // }).catch(err => {
      //   console.log(err);
      // })


    }
  },
  mounted() {
    if (sessionStorage.getItem("token") != "" && sessionStorage.getItem("token") != null) {
      // alert(1)
      // alert(this.goodMainInfo['sellgoodsid'])
      request({
        url: '/cuser/getUserLikeInfo',
        params: {
          sellGoodId: this.goodMainInfo['sellgoodsid']
        }
      }).then(res => {
        this.likeFlat = res['data'];
        this.loginFlat = true;
        this.turnRed(false);

      }).catch(err => {
        console.log(err);
      })
    }


  },
  props: ['goodMainInfo', 'goodBaseInfo'],
  data() {
    return {
      likeFlat: 0,
      loginFlat: false,
      goodList:[],
    }
  }
}
</script>

<style lang="less" scoped>
.SG_bottom {
  background-color: white;
  box-shadow: @Kuan*1vw @Kuan*0vw @Kuan*7vw rgba(187, 184, 184, 0.88);
  position: fixed;
  border-radius: @Gao*20vh;
  //bottom: ;
  width: 100%;
  height: @Gao*100vh;
  top: @Gao*1234vh;
  z-index: 9;

  display: flex;

  .SGB_like {
    flex-grow: 1;
    border: #9e9e9e 1vh*@Gao solid;
    //background-color: rgba(255, 0, 0, 0.74);
    //position: absolute;
    //top: @Gao*18vh;
    //left: @Kuan*30vw;
    border-radius: @Gao*40vh;
    font-size: @Gao*35vh;
    //padding: @Gao*15vh;
    //color: white;
    color: #9e9e9e;
    text-align: center;
    line-height: @Gao*80vh;
    margin: @Gao*10vh @Kuan*20vw;
  }

  .SGB_cart {
    flex-grow: 3;
    background-color: rgba(255, 255, 255, 0.87);
    border: #ff6700 1vh*@Gao solid;
    //position: absolute;
    //top: @Gao*13vh;
    //left: @Kuan*350vw;
    border-radius: @Gao*40vh;
    font-size: @Gao*30vh;
    //padding: @Gao*15vh;
    color: #9e9e9e;
    text-align: center;
    line-height: @Gao*76vh;
    margin: @Gao*12vh @Kuan*20vw @Gao*12vh  @Kuan*60vw;
  }

  .SGB_shop {
    flex-grow: 3;
    border: #ffffff 2vh*@Gao solid;

    background-color: #ff6700;
    font-weight: 700;
    //position: absolute;
    //top: @Gao*13vh;
    //left: @Kuan*570vw;
    border-radius: @Gao*40vh;
    font-size: @Gao*30vh;
    //padding: @Gao*15vh;
    color: white;
    text-align: center;
    line-height: @Gao*80vh;
    margin: @Gao*10vh @Kuan*20vw;
  }
}
</style>
