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
        answersDiv : null
      }
    },
    methods:{
      answerQuizz(index){
        this.answersDiv[index].classList.remove('close');

      },
    },
    mounted(){
      this.answersDiv = document.querySelectorAll('.question_container')
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },
  };
</script>
<template>
  <div class="widget_quizz">
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
            <swiper-slide v-for="question,index in content.Questions" >
              <div class="question_container close">
                <div class="question" >
                  <div class="question_text" v-html="question.Question"></div>
                </div>
                <div class="answer_block" >
                  <span v-bind:style="question.Actual_answer == null ? 'width: 100%; margin-left: 0': ''" @click="answerQuizz(index)">{{question.Answer_A}}</span>
                  <span v-if="question.Actual_answer != null" @click="answerQuizz(index)">{{question.Answer_B}}</span>
                </div>
                
                <div class="answer">
                  <p class="answer_text"><span v-if="question.Actual_answer != null" class="actual_answer" :style="'color:'+question.Answer_color">{{question[question.Actual_answer]}}.</span> <span v-html="question.Answer_text.replaceAll('<p>','').replaceAll('</p>','')"></span></p>
                  <img  v-if="question.Media.data != null" :src="this.$APIURL+question.Media.data.attributes.url" alt="" @click="this.$root.showMedia(question.Media.data.attributes.url)">
                </div>
              </div>

            </swiper-slide>
      </swiper>
        <div :class="'button-next-'+index" class='swiper-button-next'></div>
        <div :class="'button-prev-'+index" class='swiper-button-prev'></div>  
    </div>
  </div>

</template>

<style scoped>
  .widget_quizz{

  }
  .widget_quizz h3{
    font-weight: 700;
    font-size: 1.6rem;
    color: #ffffff;
    margin-bottom : 1.5rem;
  }
  .widget_quizz .question_text{
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 120%;

    text-align: center;
    color: #ffffff;
    padding: 0 2rem;
    margin-bottom : 1.5rem;
  }
  .answer_block{
    display: none;
    padding: 0 2rem;
  }
  .answer_block span{
    display: inline-block;
    padding: 10px;
    border: 2px solid white;
    cursor:pointer;
    width: 50%;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.9rem;
  }
  .answer_block span:last-child{
    margin-left: -2px;
  }
  .close .answer{
    display: none;
  }
  .close .answer_block{
    display: block;
  }

  .answer .actual_answer{
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 120%;
    text-transform: uppercase;
  }
  .answer_text{
    font-weight: 400;
    font-size: 0.90rem;
    line-height: 120%;
    margin-bottom : 1rem;
  }
  .answer img{
    cursor:pointer;
  }

  .widget_quizz .swiper-button-next,.widget_quizz .swiper-button-prev{
    height: auto;
    width: auto;
    transform:translateY(-50%);
    margin-top : 0;
    top : 1.5rem;
  }
  .widget_quizz .swiper-button-next{
    right: 0;
  }
  .widget_quizz .swiper-button-prev{
    left: 0;
  }
  .widget_quizz .swiper-button-next::after,.widget_quizz .swiper-button-prev::after{
    color: white;
    font-size: 1.8rem;
  }
</style>
