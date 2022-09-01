<script>
  import ArticleInfoBlock from "./Article_Info_Block.vue";
  import { Navigation } from 'swiper';
  import { Swiper, SwiperSlide} from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  export default {
    components:{
      Swiper,SwiperSlide,
    },
    props:{
      content: {
        type: Object,
      },
      index: {
        type: Number,
      }
    },
    data() {
      return {
      }
    },
    computed:{
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },
  };
</script>
<template>
  <div class="widget_brand">
    <div class="title" v-html="content.Title"></div>
    <div class="slider">
      <swiper

        :modules="modules"
        :slides-per-view="3"
        :space-between="25"
        :loop="true"
        :navigation="{
            nextEl: '.button-next-'+index,
            prevEl: '.button-prev-'+index,
        }"
      >
          <swiper-slide v-for="logo,index in content.Logos.data">
            <img :src="this.$APIURL+logo.attributes.url" alt="">
          </swiper-slide>
    </swiper>
      <div :class="'button-next-'+index" class='swiper-button-next'></div>
      <div :class="'button-prev-'+index" class='swiper-button-prev'></div>
    </div>

  </div>

</template>

<style>
    .widget_brand{
      margin-bottom: 2.5rem;
    }
    .widget_brand .title{
      font-weight: 500;
      font-size: 0.90rem;
      line-height: 125%;
      margin-bottom: 0.75rem;
    }
    .widget_brand .slider{
      padding: 0 2rem;
    }
    .widget_brand .swiper-wrapper{
      align-items: center;

    }
    .widget_brand .swiper-button-next,.widget_brand .swiper-button-prev{
      height: auto;
      width: auto;
      transform:translateY(-50%);
      margin-top : 0;
    }
    .widget_brand .swiper-button-next{
      right: 0;
    }
    .widget_brand .swiper-button-prev{
      left: 0;
    }
    .widget_brand .swiper-button-next::after,.widget_brand .swiper-button-prev::after{
      color: white;
      font-size: 1.8rem;
    }
</style>
