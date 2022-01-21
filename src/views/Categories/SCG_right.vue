<template>
  <div class="SCG_right">
    <div v-for="item in categoreisContent" class="SCGR_list">
      <div class="SCGR_Part" v-on:click="toGood(item['togood'])">
        <img v-bind:src="item['imgaddress']" alt="">
        <div>{{ item['name'] }}</div>
      </div>
    </div>

  </div>
</template>

<script>
import {request} from "../../network/request";

export default {
  name: "SCGR_Part",
  props:
    ['toChild'],
  methods:{
    toGood(id){
      alert(id)
    }
  },
  watch:{
    toChild(newVal, oldVal) {
      request({
        url: '/categories/showPart' + '/' + newVal
      }).then(res => {
        // alert(this.$route.params.id)
        this.categoreisContent = res.data;
      }).catch(err => {
        alert(err);
      })
    }
  },
  created() {
    request({
      url: '/categories/showPart' + '/' + 1
    }).then(res => {
      // alert(this.$route.params.id)
      this.categoreisContent = res.data;
    }).catch(err => {
      alert(err);
    })
  },
  data() {
    return {
      categoreisContent: [],
      // toChild
    }
  }
}
</script>

<style lang="less" scoped>
.SCG_right {
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    display: none;
  }

  height: @Gao*1144vh;
  overflow: scroll;
  float: right;
  width: @Kuan*550vw;
  //background-color: #42b983;

  .SCGR_Part {
    border-radius:@Kuan*20vw;
    float: left;
    margin-top: @Gao*30vh;
    margin-left: 30vw*@Kuan;
    height: @Kuan*550vw/2;
    box-shadow: @Kuan*1vw @Kuan*1vw @Kuan*15vw rgba(187, 184, 184, 0.88);
    overflow: hidden;

    img {
      //border-radius:@Kuan*20vw;
      width: @Kuan*230vw;
      height: @Kuan*220vw;
    }

    div {
      text-align: center;
      font-size: @Kuan*30vw;
      position: relative;
      top: -6vh*@Gao;
      color: rgb(86, 86, 86);

      //background-color: #313131;
    }
  }
}
</style>
