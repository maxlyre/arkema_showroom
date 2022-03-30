<script>
  import { Navigation, Pagination } from 'swiper';
  import { Swiper, SwiperSlide} from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props:{
      content: {
        type: Object,
        required: true,
      }
    },
    data() {
      return {
      }
    },
    computed:{
    },
    mounted(){
      console.log(this.content)
    },
    setup() {
      
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination],
      };
    },
  };
</script>
<template>
  <div :class="['colonne', 'col-md-'+content.column]">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      navigation
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="slide in content.image.data">
        <img :src="this.$APIURL+slide.attributes.url" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>

</style>
