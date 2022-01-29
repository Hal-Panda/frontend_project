<template>
<div class="searchBar">
  <div class="fa fa-search searchIcon"></div>
  <div class="searchPart">
    <input id="SBP" type="text">
    <label for="SBP" class="fa fa-search searchIconIn" @click="searchGoods"></label>
  </div>
</div>

</template>

<script>
export default {
  name: "searchBar",
  methods:{
    searchGoods(){
      // let tab=document.getElementsByClassName('searchPart');
      // // tab[i].setAttribute('style', 'color: white !important');
      // tab[0].style.top=0;
    }
  },
}

</script>

<style lang="less" scoped>
.searchBar{
  position: absolute;
  top: 0;
  //left: 0;
  .searchIcon{
    position: absolute;
    //right: 0;
    left:@Kuan*680vw;
    top: @Gao*30vh;
    &:hover + .searchPart{
      top: 0;
      background-color: #ff6700;
    }
  }

  .searchPart{

    left: 0;
    position: absolute;
    top: -100vh*@Gao;
    //top: 0;
    height: 100vh*@Gao;
    width: 750vw*@Kuan;
    transition: 1500ms;
    background-color: #eeeeee;
    .searchIconIn{
      color: white;
      position: relative;
      top:5vh*@Gao;
    }
    input{
      border: black @Gao*4vh solid;
      position: relative;
      top:2vh*@Gao;
      margin: 0 @Kuan*8vw;
      font-weight: 700;
      height: 80vh*@Gao;
      width: 610vw*@Kuan;
      font-size: @Gao*45vh;
      border-radius: @Gao*35vh;
      padding-left: @Kuan*40vw;
    }

    &:hover {
      top: 0;
      background-color: #ff6700;
    }
  }

}
</style>
