<template>
  <div class="showSearchByTitle">
    <backTopBar>{{ searchKeyWord }}</backTopBar>

    <Goods v-bind:toSearchKey="searchKeyWord"></Goods>
  </div>

</template>

<script>
import Goods from "../Home/showGoods/Goods";
import backTopBar from "../../components/common/backTopBar";
import searchBar from "../../components/content/searchBar";

export default {
  name: "showSearchByTitle",
  components: {
    Goods, backTopBar, searchBar
  },
  created() {
    this.searchKeyWord=sessionStorage.getItem("RecordSearchKey");
  },
  methods: {},
  data(){
    return{
      searchKeyWord:"",
    }
  }
}
</script>

<style scoped>
.showSearchByTitle {
  position: relative;
}
</style>
