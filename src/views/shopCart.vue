<template>
  <div class="home">
    <topBar>{{ title }}</topBar>
  </div>
</template>

<script>
import topBar from "../components/content/topBar";

export default {
  name: "shopCart",
  components:{
    topBar
  },
  data(){
    return{
      title:"购物车",
    }
  }
}
</script>

<style scoped>

</style>
