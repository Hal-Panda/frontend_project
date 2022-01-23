<!--<template>-->
<!--<div class="login">-->
<!--  <button class="lg_back" @click="turnBack">{{$store.state.backRecord}}←</button>-->
<!--  <button class="lg_back" @click="showCookie">ShowCookie</button>-->
<!--  <button class="lg_back" @click="showValue">showValue</button>-->
<!--  <router-link tag="button" to="/login/test1">1</router-link>-->
<!--  <router-link tag="button" to="/login/test2">2</router-link>-->
<!--  <router-view></router-view>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--import {request} from "../../network/request";-->
<!--import test1 from "../content/test1";-->
<!--import test2 from "../content/test2";-->

<!--export default {-->
<!--  name: "login",-->
<!--  components:{-->
<!--    test1,test2-->
<!--  },-->
<!--  methods:{-->
<!--    turnBack(){-->
<!--      this.$router.go(-1);-->
<!--    },-->
<!--    showCookie(){-->
<!--      alert(sessionStorage.getItem('xionghhhh'))-->
<!--    },-->
<!--    showValue(){-->
<!--      request({-->
<!--        url:'/showValue',-->
<!--        params:{-->
<!--          id:this.getId,-->

<!--        }-->
<!--      }).then(res=>{-->
<!--        let op=res.headers;-->
<!--        for (let opKey in op) {-->
<!--          alert(opKey)-->
<!--        }-->

<!--      }).catch(err=>{-->
<!--        alert(err);-->
<!--      })-->
<!--    },-->
<!--  },-->
<!--  created() {-->
<!--    request({-->
<!--      url:'/toLogin',-->
<!--      headers: {token4: "12321321321321213"},-->
<!--    }).then(res=>{-->
<!--      sessionStorage.setItem("xionghhhh","22222222222222226");-->
<!--      this.getId=res.data;-->
<!--      alert(res.data);-->
<!--    }).catch(err=>{-->
<!--      alert(err);-->
<!--    })-->
<!--  },-->
<!--  data(){-->
<!--    return{-->
<!--      getId:0,-->

<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="less" scoped>-->
<!--.login{-->
<!--  .lg_back{-->

<!--  }-->
<!--}-->
<!--</style>-->
