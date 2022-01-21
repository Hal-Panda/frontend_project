<template>
<div class="goodPage">
  goodPage
  {{$route.params.id}}
</div>
</template>

<script>
import {request} from "../../network/request";

export default {
  name: "goodPage",
  computed: {
  },
  created() {
    request({
      url:'/showGood'+"/"+this.goodid,
    }).then(res=>{
      alert(res.data)
    }).catch(err=>{
      alert(err);
    })
  },
  data(){
    return{
      goodid:this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>
