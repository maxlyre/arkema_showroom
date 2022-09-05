<script>
  import { Navigation } from 'swiper';
  import { Swiper, SwiperSlide} from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props:{
      content: {
        type: Object
      },
      lang:{
        type:String
      }
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },
  };
</script>

<template>
  <div class="menu">
    <swiper
      :modules="modules"
      :slides-per-view="3.2"
      :space-between="0"
      :direction="'vertical'"
      :navigation="{
          nextEl: '.button-next-home',
          prevEl: '.button-prev-home',
      }"
    >
      <template v-for="slide in content">
        <swiper-slide v-if="slide.attributes.locale == this.lang" :index="slide.id" @click="$emit('changeID',slide.id)">
          <img :src="this.$APIURL+slide.attributes.Thumbnail.data.attributes.url" alt="">
          <h3>{{slide.attributes.Product}}</h3>
        </swiper-slide>
      </template>
    </swiper>
    <div class="control" >
      <div :class="'button-prev-home'" class='swiper-button-prev'></div>
      <div :class="'button-next-home'" class='swiper-button-next'></div>

    </div>

  </div>

</template>

<style scoped>
  .menu{
    width: 100%;
    height: 100%;
    position:absolute;
    border-top-left-radius: 80px 80px;
  }
  .swiper{
    height:100%;
    border-top-left-radius: 80px 80px;
    position:relative;
    left:-2px;
    overflow: hidden;

  }
  .swiper-slide{
    text-align: center;
    padding: 2rem 3rem 4.5rem 3rem;
    border-bottom: 2px solid white;
    cursor:pointer;
  }
  .swiper-slide img{
    height :100%;
    width: auto;
  }
  .swiper-slide h3{
    text-align: center;
    margin-top: 1rem;
    font-weight: 600;
    font-size: 1.4rem;
  }
  .control{
    position: absolute;
    width: 50px;
    border-top: 2px solid white;
    border-left: 2px solid white;
    bottom: 0;
    left: -52px;
    padding-top : 20px;
    border-top-left-radius: 80px 80px;
  }

  
  .menu .swiper-button-next,.menu .swiper-button-prev{
    height: 50px;
    width: 50px;
    transform:rotate(90deg);
    margin-top : 0;
    display: block;
    position: relative;
  }
  .menu .swiper-button-next{
    right: 0;
  }
  .menu .swiper-button-prev{
    left: 0;
  }
  .menu .swiper-button-next::after,.menu .swiper-button-prev::after{
    color: white;
    font-size: 1.6rem;
    position: absolute;
    top : 50%;
    left: 50%;
    transform:translate(-50%,-50%)
  }
</style>
