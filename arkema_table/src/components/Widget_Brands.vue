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
  <div>
    <div v-html="content.Title"></div>
    <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="0"
        :navigation="{
            nextEl: '.button-next-'+index,
            prevEl: '.button-prev-'+index,
        }"
      >
          <swiper-slide v-for="logo,index in content.Logos.data">
            <img :src="this.$APIURL+logo.attributes.url" alt="">
          </swiper-slide>
    </swiper>
    <div class="control" >
      <div :class="'button-next-'+index" class='swiper-button-next'></div>
      <div :class="'button-prev-'+index" class='swiper-button-prev'></div>
    </div>
  </div>

</template>

<style scope>
  
</style>
