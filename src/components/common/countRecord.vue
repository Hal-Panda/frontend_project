<template>
<div class="countRecord">
  <button @click="des()" :disabled="counts<=1">-</button>
  <span>{{counts}}</span>
  <button @click="inc()">+</button>
</div>
</template>

<script>
export default {
  name: "countRecord",
  methods: {
    des() {
      this.counts--;
    },
    inc() {
      this.counts++;
    },
    // remove(index) {
    //   this.books.splice(index, 1);
    //   this.books.sort();
    // }
  },
  data(){
    return{
      counts:1,
    }
  }
}
</script>

<style lang="less" scoped>
.countRecord{
  line-height:@Gao*80vh ;
  span{
    margin: 0 @Kuan*20vw;
    font-size: @Gao*40vh;
    position: relative;
    top:@Gao*3vh;
  }
}
</style>
