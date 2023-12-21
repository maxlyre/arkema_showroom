<script>
  import { Navigation, Pagination ,Autoplay } from 'swiper';
  import { Swiper, SwiperSlide} from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/autoplay';
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props:{
      content: {
        type: Object,
        required: true,
      },
      index: {
        type: Number
      }
    },
    data() {
      return {
        // swiperOption: {
        //   slidesPerView: 4,
        //   spaceBetween: 20,
        //   pagination: {
        //     el: '.' + this.customClassName + '__pagination',
        //     clickable: true
        //   },
        //   navigation: {
        //     nextEl: '.' + this.customClassName + '__next',
        //     prevEl: '.' + this.customClassName + '__prev'
        //   },
        // }
      }
    },
    computed:{
    },
    mounted(){
    },
    setup() {
      
      // const onSwiper = (swiper) => {
      //   console.log(swiper);
      // };
      // const onSlideChange = () => {
      //   console.log('slide change');
      // };
      return {
        // onSwiper,
        // onSlideChange,
        modules: [Navigation, Pagination,Autoplay],
      };
    },
  };
</script>
<template>
  <div :class="['colonne','gallery', 'col-sm-'+content.column,{bottom: content.position == 'bottom',right: content.position == 'right' }, 'col-xs-12']">
    <swiper
      :modules="modules"
      :slides-per-view=content.slidesPerView
      :space-between="0"
      :navigation="{
          nextEl: '.button-next'+index,
          prevEl: '.button-prev'+index,
      }"
      :pagination="{ clickable: true,el:'.pagination'+index }"
      :autoplay="{delay:3000}"
    >
      <swiper-slide v-for="slide in content.image.data">
        <img :src="this.$APIURL+slide.attributes.url" alt="">
      </swiper-slide>
    </swiper>
    <div class="control" >
      <div :class="'pagination'+index" class='swiper-pagination'></div>
      <div :class="'button-next'+index" class='swiper-button-next'></div>
      <div :class="'button-prev'+index" class='swiper-button-prev'></div>
    </div>

  </div>

</template>

<style>
  .control{
    position: relative;
    height: 30px;
    margin-top : 0.5rem;
    margin-bottom: 1rem;
  }

  .gallery .swiper-button-prev,.gallery .swiper-button-next{
    color: white;
  }
  .gallery .swiper-button-prev:after,.gallery .swiper-button-next:after{
    font-size : 22px;
  }
  .gallery .swiper-button-prev{
    left: 0;
  }
  .gallery .swiper-button-next{
    right: 0;
  }
  .gallery .swiper-pagination{
    position: relative;
    bottom : 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 35px;
  }
  .gallery .swiper-pagination-bullet{
    border-radius : 0;
    background-color: #BFBFBF;
    opacity: 1;
    width: 24px;
    height: 4px;
    margin: 0 1px !important;
  }
  .gallery .swiper-pagination-bullet-active{
    background-color: white;
  }

  .right{
    display: flex;
  }
  .right .swiper{
    flex: 1;
  }
  .right .control{
    padding : 0 30px;
    height: 16px;
    margin-left: 10px;
  }
  .gallery.right .swiper-pagination-bullet{
    width: 6px;
    height: 14px;
    margin: 0 3px !important;
  }
</style>
