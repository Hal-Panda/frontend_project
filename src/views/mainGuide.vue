<template>
  <div class="mainGuide">
    <div>
      <router-link class="g_rou" to="/">首页</router-link>
    </div>
    <div>
      <router-link  class="g_rou" to="/about">关于</router-link>
    </div>
    <div>
      <router-link  class="g_rou" to="/about">设置</router-link>
    </div>
    <div>
      <router-link  class="g_rou" to="/about">用户</router-link>
    </div>
    <!--    <div class="oooo"><p>11212323</p></div>-->

  </div>

</template>

<script>
export default {
  name: "guide"
}
</script>

<style lang="less" scoped>
.mainGuide {
  display: flex;
  //justify-content:flex-end;

  position: fixed;
  bottom:  0;
  width: 100%;
  //bottom: 0;
  //top: 667rem/50;


  div {
    //margin-right: 2rem/50;
    //width: 100%;
    text-align: center;
    background-color: lightgray;
    //border: #42b983 1rem/50 solid;
    flex-grow: 1;
    .g_rou{
      &:hover{
        color: coral;
      }
      //:hover{
      //  color: red;
      //}

      color: white;
    }
  }
}

//.guide div .g_rou a:hover{
//
//  //font-size: 40px;
//}


</style>
