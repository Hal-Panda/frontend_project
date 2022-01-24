<template>
  <div class="goodPictures">
    <swiper class="mySwiper"
            :slides-per-view="1"
            :space-between="1"
            :pagination='{"clickable": true,type:"bullets"}'
            :navigation="true"
            :autoplay="{delay:3000,disableOnInteraction:false}"
            :loop="true"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
    >

      <swiper-slide  v-for="item in goodId">
          <img  v-bind:src="item['add']" >
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>

import SwiperCore, {Pagination, Navigation, Scrollbar, A11y, Autoplay} from 'swiper';


// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";
// Import Swiper styles
import 'swiper/swiper-bundle.css'



export default {
  name: "goodPictures",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ['goodId'],
  setup() {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  data() {
    return {}
  }
}

</script>

<style lang="less" scoped>
.goodPictures {
  .swiper-container {
    width: 100%;
    height: @Gao*350vh;

    img {
      width: 100%;
      height: @Gao*350vh;
    }
  }

  --swiper-pagination-color: rgba(252, 252, 252, 1);
  --swiper-navigation-color: rgba(154, 154, 154, 0.38);
  --swiper-navigation-size: @Gao*40vh;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); //取消默认选中的背景颜色

}

</style>
