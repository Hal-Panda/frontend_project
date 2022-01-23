<template>
  <div class="showGood">
    <backTopBar>商品展示</backTopBar>
    <goodPictures v-bind:goodId=getGoodId></goodPictures>
    <SG_topInfo></SG_topInfo>
    <div class="SG_choose">

      <div v-if="sg_flatOne==1" class="SGC_One">
        <div class="SGCO_title">
          {{ getChoseInfo['name'] }}
        </div>
        <div class="SGCO_choses">
          <div v-for="(ch,i) in getChoseInfo['fdata']" class="SGCOC" @click="TOChooseOne(ch['id'],i,'SGCOC')">
            {{ ch['key'] }}
          </div>
        </div>
      </div>

      <div v-if="sg_flatOne==0" class="SGC_One">
        <div class="SGCO_title">
          {{ getChoseInfo['name'] }}
        </div>
        <div class="SGCO_choses">
          <div v-for="(ch,i) in getChoseInfo['fdata']" class="SGCOC" @click="TOChooseTwo(ch['id'],i,'SGCOC')">
            {{ ch['key'] }}
          </div>
        </div>
      </div>

      <div v-if="sg_flatTwo==0" class="SGC_Two">
        <div class="SGCT_title">
          {{ getChoseInfo2['name'] }}
        </div>
        <div class="SGCT_choses">
          <div v-for="(ch,i) in getChoseInfo2['fdata']" class="SGCTC" @click="TOChooseTwo(ch['id'],i,'SGCTC')">
            {{ ch['key'] }}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import backTopBar from "../../components/common/backTopBar";
import goodPictures from "./goodPictures";
import SG_topInfo from "./SG_topInfo";


export default {
  name: "showGood",
  components: {
    backTopBar, goodPictures, SG_topInfo
  },
  methods: {
    TOChooseOne(id,i,cla) {
      this.cleanChoose(cla);
      let tab=document.getElementsByClassName(cla);
      tab[i].style.backgroundColor="#ff6700";
      tab[i].style.color="white"

      if (id=='2222'){
        this.getChoseInfo2=this.getChoseInfo3;
        this.cleanChoose('SGCTC');
      }
      else {
        this.getChoseInfo2=this.getChoseInfo4;
        this.cleanChoose('SGCTC');
      }

    },
    TOChooseTwo(id,i,cla) {
      this.cleanChoose(cla);
      let tab=document.getElementsByClassName(cla);
      tab[i].style.backgroundColor="#ff6700";
      tab[i].style.color="white"
      alert(id)
    },
    cleanChoose(cla){
      let Ctab=document.getElementsByClassName(cla);

      for (let i=0;i< Ctab.length;i++) {
        Ctab[i].style.backgroundColor="white";
        Ctab[i].style.color="black"
      }
    },
  },
  created() {

  },
  data() {
    return {
      getGoodId: [
        {name: 1, add: "https://img1.baidu.com/it/u=330753258,1076063408&fm=26&fmt=auto"},
        {name: 2, add: "https://img1.baidu.com/it/u=330753258,1076063408&fm=26&fmt=auto"},
        {name: 3, add: "https://img1.baidu.com/it/u=330753258,1076063408&fm=26&fmt=auto"}],
      getChoseInfo: {
        name: '颜色',
        fdata: [{id: '3333', key: '黑色'}, {id: '1111', key: '红色'}, {id: '2222', key: '白色'}, {
          id: '3333',
          key: '黑色'
        }, {id: '1111', key: '红色'}, {id: '2222', key: '白色'}],
        flat: 0
      },
      getChoseInfo2: {
        name: '大小',
        fdata: [{id: '10001', key: '50k'}, {id: '10002', key: '100k'}, {id: '10003', key: '150k'},],
        flat: 0
      },
      getChoseInfo3: {
        name: '大小',
        fdata: [{id: '10004', key: '50G'}, {id: '10005', key: '100G'}, {id: '10006', key: '150G'},],
        flat: 0
      },
      getChoseInfo4: {
        name: '大小',
        fdata: [{id: '10007', key: '50k'}, {id: '10008', key: '100k'}, {id: '10009', key: '150k'},],
        flat: 0
      },
      sg_flatOne: 1,
      sg_flatTwo: 0,
    }
  }
}
</script>
<style lang="less" scoped>
.showGood {
  position: relative;
  .SG_choose {
    border: @Gao*1vh solid rgba(187, 184, 184, 0.28);
    border-radius: @Gao*25vh;
    position: relative;
    margin: @Gao*10vh @Kuan*10vw;
    padding:@Gao*20vh @Kuan*25vw ;
    .SGC_One {
      .SGCO_title {
        font-size: @Gao*30vh;
        font-weight: 700;
      }
      .SGCO_choses {
        display: flex;
        flex-wrap: wrap;
        .SGCOC {
          font-size: @Gao*30vh;
          width: 20%;
          //background-color: #ff6700;
          border: @Gao*1vh solid rgba(255, 103, 0, 0.51);
          text-align: center;
          margin: @Gao*5vh @Kuan*10vw;
          border-radius: @Gao*10vh;
          color: #4f4e4e;
        }
      }
    }
    .SGC_Two {
      margin-top: @Gao*20vh;
      .SGCT_title {
        font-size: @Gao*30vh;
        font-weight: 700;
      }
      .SGCT_choses {
        display: flex;
        flex-wrap: wrap;
        .SGCTC {
          font-size: @Gao*30vh;
          width: 20%;
          //background-color: #ff6700;
          border: @Gao*1vh solid rgba(255, 103, 0, 0.51);
          text-align: center;
          margin: @Gao*5vh @Kuan*10vw;
          border-radius: @Gao*10vh;
          color: #4f4e4e;
        }
      }
    }
  }
}
</style>
