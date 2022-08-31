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
            <swiper-slide v-for="question,index in content.Questions" >
              <div class="question_container close">
                <div class="question" >
                  <div class="question_text" v-html="question.Question"></div>
                </div>
                <div class="answer_block" >
                  <span @click="answerQuizz(index)">{{question.Answer_A}}</span>
                  <span @click="answerQuizz(index)">{{question.Answer_B}}</span>
                </div>
                <div class="answer">
                  <p class="answer_text"><span :style="'color:'+question.Answer_color">{{question[question.Actual_answer]}}</span> <span v-html="question.Answer_text.replaceAll('<p>','').replaceAll('</p>','')"></span></p>
                  <img :src="this.$APIURL+question.Media.data.attributes.url" alt="" @click="this.$root.showMedia(question.Media.data.attributes.url)">
                </div>
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
