<template>
  <div class="home">
    <topBar>{{ title }}</topBar>
  </div>
</template>

<script>
import topBar from "../components/content/topBar";
export default {
  name: "home",
  components:{
    topBar
  },
  data(){
    return{
      title:"首页",
    }
  }
}
</script>

<style lang="less" scoped>

</style>
