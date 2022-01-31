<template>
  <div class="showGood">
    <backTopBar>{{ GetInfBasePart['goodname'] }}</backTopBar>
    <goodPictures v-bind:imgsData=goodImgsData></goodPictures>
    <SG_topInfo v-bind:goodMainInfo=GetInfoMainPart v-bind:goodBaseInfo=GetInfBasePart></SG_topInfo>
    <div class="SG_choose">

      <div v-if="sg_flatOne==1" class="SGC_One">
        <div class="SGCO_title">
          {{ GetInfoMainPart['nodeonename'] }}
        </div>
        <div class="SGCO_choses">
          <div v-for="(ch,i) in nodesOneData" class="SGCOC" @click="TOChooseOne(ch['nextnodeid'],i,'SGCOC')">
            {{ ch['nodecontent'] }}
          </div>
        </div>
      </div>

      <div v-if="sg_flatOne==0" class="SGC_One">
        <div class="SGCO_title">
          {{ GetInfoMainPart['nodeonename'] }}
        </div>
        <div class="SGCO_choses">
          <div v-for="(ch,i) in nodesOneData" class="SGCOC" @click="TOChooseTwo(ch['todogoodid'],i,'SGCOC')">
            {{ ch['nodecontent'] }}
          </div>
        </div>
      </div>
      <div v-if="nodesFlat" class="SGC_One_empty">无选项</div>
      <div v-if="sg_flatTwo==0" class="SGC_Two">
        <div class="SGCT_title">
          {{ GetInfoMainPart['nodetwoname'] }}
        </div>
        <div class="SGCT_choses">
          <div v-for="(ch,i) in nodesTwoData" class="SGCTC" @click="TOChooseTwo(ch['todogoodid'],i,'SGCTC')">
            {{ ch['nodecontent'] }}
          </div>
        </div>
      </div>

    </div>
    <SG_comment v-bind:commentsData=goodCommentsData></SG_comment>

    <div class="SG_detailImg">
      <div class="SGD_title">商品详情</div>
      <div class="SGDI" v-for="item in goodDescribeImgsData"><img
        v-bind:src="item['imgaddress']" alt=""></div>
    </div>
    <SG_bottom></SG_bottom>
    <blankPadding></blankPadding>
  </div>
</template>

<script>
import backTopBar from "../../components/common/backTopBar";
import goodPictures from "./goodPictures";
import SG_topInfo from "./SG_topInfo";
import SG_comment from "./SG_comments";
import SG_bottom from "./SG_bottom";
import blankPadding from "../../components/content/blankPadding";
import {request} from "../../network/request";

export default {
  name: "showGood",
  components: {
    backTopBar, goodPictures, SG_topInfo, SG_comment, SG_bottom, blankPadding
  },
  methods: {
    updateData(){
      request({
        url: '/show/goodImgs',
        params: {
          goodImgId: this.GetInfBasePart['showimgid']
        }
      }).then(res => {
        this.goodImgsData = res['data']
      }).catch(err => {
        console.log(err);
      })
      request({
        url: '/show/goodComments',
        params: {
          goodCommentId: this.GetInfoMainPart['commentid']
        }
      }).then(res => {
        this.goodCommentsData = res['data']
      }).catch(err => {
        console.log(err);
      })

      request({
        url: '/show/goodDescribeImg',
        params: {
          goodDescribeImgId: this.GetInfBasePart['detailsimgid']
        }
      }).then(res => {
        this.goodDescribeImgsData = res['data']
      }).catch(err => {
        console.log(err);
      })
    },
    TOChooseOne(id, i, cla) {
      this.cleanChoose(cla);
      let tab = document.getElementsByClassName(cla);
      tab[i].style.backgroundColor = "#ff6700";
      tab[i].style.color = "white"
      request({
        url: '/show/nodesInfo',
        params: {
          nodeId: id
        }
      }).then(res => {
        this.nodesTwoData = res['data']
      }).catch(err => {
        console.log(err);
      })
    },
    TOChooseTwo(id, i, cla) {
      this.cleanChoose(cla);
      let tab = document.getElementsByClassName(cla);
      tab[i].style.backgroundColor = "#ff6700";
      tab[i].style.color = "white"
      request({
        url: '/show/goodBase/' + id,
      }).then(res => {
        this.GetInfBasePart = res['data'];

        this.updateData();
      }).catch(err => {
        console.log(err);
      })
    },
    cleanChoose(cla) {
      let Ctab = document.getElementsByClassName(cla);

      for (let i = 0; i < Ctab.length; i++) {
        Ctab[i].style.backgroundColor = "white";
        Ctab[i].style.color = "black"
      }
    },
  },

  created() {

    request({
      url: '/show/mainGood/' + this.$route.params.id,
    }).then(res => {
      // this.categoreis = res['data'];
      // this.$router.push('/categories'+'/'+1)
      this.GetInfoMainPart = res['data'][0];
      this.GetInfBasePart = res['data'][1];
      this.sg_flatOne = this.GetInfoMainPart['nodeonestatus']
      this.sg_flatTwo = this.GetInfoMainPart['nodetwostatus']
      if (this.GetInfoMainPart['nodeonestatus'] != 2) {
        request({
          url: '/show/nodesInfo',
          params: {
            nodeId: this.GetInfoMainPart['nodeoneid']
          }
        }).then(res => {
          this.nodesOneData = res['data'];

        }).catch(err => {
          console.log(err);
        })

        if (this.GetInfoMainPart['nodetwostatus'] != 2) {
          request({
            url: '/show/nodesInfo',
            params: {
              nodeId: this.GetInfoMainPart['nodetwoid']
            }
          }).then(res => {
            this.nodesTwoData = res['data']
          }).catch(err => {
            console.log(err);
          })
        }
      } else {
        this.nodesFlat = true
      }

      request({
        url: '/show/goodImgs',
        params: {
          goodImgId: this.GetInfBasePart['showimgid']
        }
      }).then(res => {
        this.goodImgsData = res['data']
      }).catch(err => {
        console.log(err);
      })

      request({
        url: '/show/goodComments',
        params: {
          goodCommentId: this.GetInfoMainPart['commentid']
        }
      }).then(res => {
        this.goodCommentsData = res['data']
      }).catch(err => {
        console.log(err);
      })

      request({
        url: '/show/goodDescribeImg',
        params: {
          goodDescribeImgId: this.GetInfBasePart['detailsimgid']
        }
      }).then(res => {
        this.goodDescribeImgsData = res['data']
      }).catch(err => {
        console.log(err);
      })



    }).catch(err => {
      console.log(err);
    })
  },
  data() {
    return {
      getGoodId: [
        {name: 1, add: "https://img1.baidu.com/it/u=330753258,1076063408&fm=26&fmt=auto"},
        {name: 2, add: "https://img1.baidu.com/it/u=330753258,1076063408&fm=26&fmt=auto"},
        {name: 3, add: "https://img1.baidu.com/it/u=330753258,1076063408&fm=26&fmt=auto"},
      ],
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

      GetInfoMainPart: {},
      GetInfBasePart: {},
      nodesOneData: [],
      nodesTwoData: [],
      goodImgsData:[],
      goodCommentsData:[],
      goodDescribeImgsData:[],
      nodesFlat: false,
    }
  }
}
</script>
<style lang="less" scoped>
.showGood {
  position: relative;
  overflow: hidden;

  .SG_choose {
    border: @Gao*1vh solid rgba(187, 184, 184, 0.28);
    border-radius: @Gao*25vh;
    position: relative;
    margin: @Gao*10vh @Kuan*10vw;
    padding: @Gao*20vh @Kuan*25vw;

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

    .SGC_One_empty {
      font-size: @Gao*30vh;
      color: white;
      text-align: center;
      //border: @Gao*1vh solid gainsboro;
      width: @Kuan*60vw;
      border-radius: @Gao*10vh;
      background-color: gainsboro;
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
;

  .SG_detailImg {
    border: @Gao*1vh solid rgba(187, 184, 184, 0.28);
    border-radius: @Gao*25vh;
    position: relative;
    margin: @Gao*10vh @Kuan*10vw;

    .SGD_title {
      padding: @Gao*20vh @Kuan*25vw;
      font-size: @Gao*35vh;
      font-weight: 700;
    }

    .SGDI {
      img {
        width: 100%;
        //height: @Gao*400vh;
      }

    }
  }
}
</style>
