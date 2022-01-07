<template>
  <div class="home">
    <topBar>{{ title }}</topBar>
  </div>
</template>

<script>
import topBar from "../components/content/topBar";

export default {
  name: "user",
  components:{
    topBar
  },
  data(){
    return{
      title:"用户中心",
    }
  }
}
</script>

<style scoped>

</style>
