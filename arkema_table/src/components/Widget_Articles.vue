<script>
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
        required: true,
      },
      index: {
        type: Number,
      }
    },
    data() {
      return {
      }
    },
    methods:{
    },
    mounted(){
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },
  };
</script>
<template>
  <div class="widget_article">
    <h3>{{content.Title}}</h3>
    <div class="quizz_block">
      <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="0"
          :navigation="{
              nextEl: '.button-next-'+index,
              prevEl: '.button-prev-'+index,
          }"
        >
            <swiper-slide v-for="article,index in content.article_post" >
              <div class="article_container">
                  <div class="article_title">
                    <h4 v-html="article.Title"></h4>
                  </div>
                  <div class="article_text" v-html="article.Text"></div>
                  <img v-if="article.Media.data != null" :src="this.$APIURL+article.Media.data.attributes.url" alt=""  @click="this.$root.showMedia(article.Media.data.attributes.url)">
              </div>

            </swiper-slide>
      </swiper>
        <div :class="'button-next-'+index" class='swiper-button-next'></div>
        <div :class="'button-prev-'+index" class='swiper-button-prev'></div>
      
    </div>
  </div>

</template>

<style>
  .widget_article h3{
    font-weight: 700;
    font-size: 1.6rem;
    color: #AFE4D3;
    
  }
  .widget_article .article_title{
    height: 30px;
    margin-bottom : 1rem;
  }
  .widget_article h4{
    font-weight: 600;
    font-size: 1rem;
    line-height: 120%;
    width: 100%;
    text-align: center;
    padding: 0 2rem;
    
    position: absolute;
    top: 50%;
    transform:translateY(-50%);
  }
  .widget_article .article_container img{
    cursor:pointer;
    margin-top: 2rem;
  }
  .widget_article .swiper-button-next,.widget_article .swiper-button-prev{
    height: auto;
    width: auto;
    transform:translateY(-50%);
    margin-top : 0;
    top : 2.5rem;
  }
  .widget_article .article_text{
    padding-top: 0.75rem;
  }
  .widget_article .article_text p{
    font-size: 0.9rem;
    line-height: 130%;
  }
  .widget_article .swiper{
    padding-top : 1.5rem;
  }
  .widget_article .swiper-button-next{
    right: 0;
  }
  .widget_article .swiper-button-prev{
    left: 0;
  }
  .widget_article .swiper-button-next::after,.widget_article .swiper-button-prev::after{
    color: white;
    font-size: 1.8rem;
  }
</style>
