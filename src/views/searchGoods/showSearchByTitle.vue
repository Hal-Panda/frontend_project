<template>
  <div class="showSearchByTitle">
    <backTopBar>{{ this.$route.params.searchKey }}</backTopBar>

    <Goods v-bind:toSearchKey="this.$route.params.searchKey"></Goods>
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
  methods: {}
}
</script>

<style scoped>
.showSearchByTitle {
  position: relative;
}
</style>
