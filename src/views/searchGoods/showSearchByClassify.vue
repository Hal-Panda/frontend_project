<template>
<div class="showSearchByClassify">
  <backTopBar>{{classifyName}}</backTopBar>

  <Goods v-bind:toMyClashKey="classifyKey"></Goods>
</div>
</template>

<script>
import Goods from "../Home/showGoods/Goods";
import backTopBar from "../../components/common/backTopBar";

export default {
  name: "showSearchByClassify",
  components: {
    Goods, backTopBar,
  },
  created() {
    this.classifyKey=sessionStorage.getItem("RecordSearchClassifyKey");
    this.classifyName=sessionStorage.getItem("RecordSearchClassifyName");
  },
  data(){
    return{
      classifyKey:"",
      classifyName:"",
    }
  },
}
</script>

<style scoped>
.showSearchByClassify{

}
</style>
