<script>
  import { Navigation ,Mousewheel } from 'swiper';
  import { Swiper, SwiperSlide} from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/mousewheel';
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props:{
      content: {
        type: Object
      },
      nav: {
        type: Object
      },
      lang:{
        type:String
      }
    },
    data() {
      return {
        idContent:{}
      }
    },
    setup() {
      return {
        modules: [Navigation,Mousewheel],
      };
    },
    beforeMount(){
      for(const c in this.content){
        this.idContent[this.content[c].id] = this.content[c]
      }
    }
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
      :mousewheel="true"
    >
      <template v-for="slide in nav">
        <swiper-slide v-if="this.idContent[slide].attributes.locale == this.lang" :index="this.idContent[slide].id" @click="$emit('changeID',slide)">
          <img :src="this.$APIURL+this.idContent[slide].attributes.Thumbnail.data.attributes.url" alt="">
          <h3>{{this.idContent[slide].attributes.Product}}</h3>
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
