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
  <div>
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
                  <h4>{{article.Title}}</h4>
                  <div class="article_text" v-html="article.Text"></div>
                  <img v-if="article.Media.data != null" :src="this.$APIURL+article.Media.data.attributes.url" alt="">
              </div>

            </swiper-slide>
      </swiper>
      <div class="control" >
        <div :class="'button-next-'+index" class='swiper-button-next'></div>
        <div :class="'button-prev-'+index" class='swiper-button-prev'></div>
      </div>


    
      

     
    </div>
  </div>

</template>

<style scope>
  .answer_block span{
    display: inline-block;
    padding: 10px;
    border: 1px solid white;
    cursor:pointer;
  }
  .close .answer{
    display: none;
  }
  .close .answer_block{
    display: block;
  }
  .answer_block{
    display: none;
  }
</style>
