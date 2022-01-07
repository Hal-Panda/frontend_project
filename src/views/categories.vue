<template>
  <div class="home">
    <topBar>{{ title }}</topBar>
  </div>
</template>

<script>
import topBar from "../components/content/topBar";

export default {
  name: "categories",
  components:{
    topBar
  },
  data(){
    return{
      title:"分类",
    }
  }
}
</script>

<style scoped>

</style>
