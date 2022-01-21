<template>
<div class="showCategories">
  <div class="SCG_left">

    <div v-for="item in categoreis"  @click="toTab(item['categoriesid'])" class="SCGL_list">
      {{item['name']}}
    </div>
  </div>
<!--  <router-view></router-view>-->
  <SCG_right v-bind:toChild="turnId"></SCG_right>
</div>
</template>

<script>
import SCG_right from "./SCG_right";
import {request} from "../../network/request";
export default {
  name: "showCategories",

  components:{
    SCG_right
  },
  methods:{
    toTab(id){
      // this.$router.push('/categories'+'/'+id)
      this.turnId=id;
    }
  },
  created() {
    request({
      url:'/categories/showAll'
    }).then(res=>{
      this.categoreis=res.data;
      // this.$router.push('/categories'+'/'+1)
    }).catch(err=>{
      alert(err);
    })
  },
  data(){
    return{
      categoreis:[],
      turnId:1,
    }
  }
}
</script>

<style lang="less" scoped>
.showCategories{
  position: relative;

  .SCG_left{
    height: @Gao*1144vh;
    overflow: scroll;
    float: left;
    width: @Kuan*200vw;
    background: rgba(251, 252, 250, 0.52);
    &::-webkit-scrollbar
    {
      display: none;
    }
    box-shadow: @Kuan*1vw @Kuan*0vw @Kuan*7vw rgba(187, 184, 184, 0.88);
    .SCGL_list{
      text-align: center;
      font-size: @Kuan*35vw;
      line-height: @Kuan*100vw;
      color: rgba(86, 86, 86, 0.78);
      border: @Kuan*1vw rgba(128, 128, 128, 0.04) solid;
    }
  }

}








//.SCG_left::-webkit-scrollbar
//{
//  /*滚动条整体样式*/
//  width: 8px;     /*高宽分别对应横竖滚动条的尺寸*/  height: 1px;
//}
//.AddStyle::-webkit-scrollbar-thumb
//{
//  /*滚动条里面小方块*/
//  border-radius: 10px;  background: #9e9e9e;  box-shadow: inset 0 0 5px rgba(0, 122, 204);
//}
////滚动条底层颜色!
//.AddStyle::-webkit-scrollbar-track
//{
//  border-radius: 10px;  background: #ededed;
//
//  /*滚动条里面轨道*/
//  box-shadow: inset 0 0 5px rgba( 0, 0, 0, .1);
//}
</style>
