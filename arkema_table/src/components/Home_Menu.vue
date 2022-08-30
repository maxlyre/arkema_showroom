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
      console.log(this.content)
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
        modules: [Navigation],
      };
    },
  };
</script>
<template>
  <div class="menu">
    <swiper
      :modules="modules"
      :slides-per-view="3.5"
      :space-between="0"
      :direction="'vertical'"
      :navigation="{
          nextEl: '.button-next',
          prevEl: '.button-prev',
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
      <div :class="'button-next'" class='swiper-button-next'></div>
      <div :class="'button-prev'" class='swiper-button-prev'></div>
    </div>

  </div>

</template>

<style scope>
  .menu{
    width: 100%;
    height: 100%;
    position:relative;
    
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
    padding: 1rem 1rem 3rem 1rem;
    border-bottom: 2px solid white;
    cursor:pointer;
  }
  .swiper-slide img{
    height :100%;
    width: auto;
  }
  .swiper-slide h3{
    text-align: center;
  }
  .control{
    position: absolute;
    width: 40px;
    /* margin-top: 0.5rem; */
    /* margin-bottom: 1rem; */
    border: 1px solid white;
    bottom: 0;
    height: 80px;
    left: -40px;
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
</style>
