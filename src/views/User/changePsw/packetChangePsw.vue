<template>
<div class="packetChangePsw">
  <backTopBar>修改-钱包密码</backTopBar>
  <packetChangeShow></packetChangeShow>
</div>
</template>

<script>
import backTopBar from "../../../components/common/backTopBar";
import packetChangeShow from "./packetChangeShow";
export default {
  name: "packetChangePsw",
  components:{backTopBar,packetChangeShow}
}
</script>

<style lang="less" scoped>
.packetChangePsw{

}
</style>
