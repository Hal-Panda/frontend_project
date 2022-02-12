<template>
<div class="accoutChangePsw">
  <backTopBar>修改-账号密码</backTopBar>
  <accoutChangeShow></accoutChangeShow>
</div>
</template>

<script>
import backTopBar from "../../../components/common/backTopBar";
import accoutChangeShow from "./accoutChangeShow";
export default {
  name: "accoutChangePsw",
  components:{backTopBar,accoutChangeShow}
}
</script>

<style lang="less" scoped>
.accoutChangePsw{

}
</style>
