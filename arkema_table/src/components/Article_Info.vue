<script>
  import ArticleInfoBlock from "./Article_Info_Block.vue";
  import { Navigation } from 'swiper';
  import { Swiper, SwiperSlide} from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';

  export default {
    components:{
        ArticleInfoBlock, Swiper,SwiperSlide,
    },
    props:{
      videoUrl: {
        type: String,      
      },
      soundUrl: {
        type: String,      
      },
      soundLoop: {
        type: Boolean,      
      },
      excerpt: {
        type: String,      
      },
      dataBlocks: {
        type: Object,      
      }
    },
    data() {
      return {
        audioPlayer : null,
        activeData :0,
        infoVideo : null,
        slideByView : 0,
        swiper: null,
        intro : true,
        showElements : false,
        showPoints : false
      }
    },
    computed:{
      excerptText(){
        return this.excerpt
        .replaceAll('/uploads', this.$APIURL+'/uploads')
        .replaceAll('<p>','')
        .replaceAll('</p>','');
      }
    },
    methods:{
      goToHome(){
         this.infoVideo.play();
         this.showPoints = false;
      },
      pauseSound(){
        this.audioPlayer.pause();
      },
      changeBlock(ind){
        this.activeData=ind;
        this.swiper.slideTo(ind);
      },
      videoPlay(){
        if(this.infoVideo.currentTime > this.infoVideo.duration/2 && this.intro){
          this.infoVideo.pause();
          this.intro = false;
          this.showPoints = true;
          this.$emit('videoShowed')
        }else if(this.infoVideo.currentTime >= this.infoVideo.duration){
          this.$emit('videoEnded');
          this.infoVideo.pause();
          this.showElements = false;
        }
      }
    },
    mounted(){
       this.showElements =true;
      if(this.$ELECTRONENV){
        this.audioPlayer = new Audio('local-video://'+this.$APIURL+this.soundUrl)
      }else{
        this.audioPlayer = new Audio(this.$APIURL+this.soundUrl)
      }
      this.audioPlayer.loop = this.soundLoop;
      this.audioPlayer.play();

      this.infoVideo = document.querySelector('#info_video');
      this.infoVideo.addEventListener("timeupdate", this.videoPlay);
      setTimeout(() => {
        this.infoVideo.play()
      }, 1250);

      this.slideByView = this.dataBlocks.length < 4 ? this.dataBlocks.length : 3.1;
      this.swiper = document.querySelector('.menu_block_swiper').swiper
      setTimeout(() => {
          this.swiper.slideTo(0,0)
      }, 100);
      
    },
    beforeUnmount(){
      this.audioPlayer.pause();
      this.audioPlayer = null;
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },

  };
</script>
<template>
  <div class="main_info row">
    <div class="data_block col-xs-3">
      <Transition  name="fade" appear>  
        <ArticleInfoBlock
        v-show="showElements"
        :content = dataBlocks[this.activeData]
        />
       </Transition>
    </div>
    
    <div class="graphic_block col-xs-9" :class="showElements?'showBorder' : ''">
        <div class="video_block" :class="showElements?'show' : ''">
            <Transition  name="fade" appear >  
              <ul class="points" v-show="this.showPoints">
              
                <li v-for="point,index in this.dataBlocks" 
                  
                  class="data_points" 
                  :key="index"
                  :style="'left:'+point.Bullet_X+'%;top:'+point.Bullet_Y+'%'" 
                  @click="changeBlock(index)" 
                  :class="index == activeData ? 'active' : ''">
                  <span>{{index+1}}</span>
                </li>

            </ul>
            </Transition>
            <video v-if="$ELECTRONENV" muted playsinline id="info_video" >
                <source :src="'local-video://'+this.$APIURL+this.videoUrl" type='video/mp4'>
            </video>
            <video v-else muted playsinline id="info_video" >
                <source :src="this.$APIURL+this.videoUrl" type='video/mp4'>
            </video>
            <Transition  name="fade" appear>  
            <h3 class="excerpt" v-html="excerptText" v-if="this.showPoints"></h3>
            </Transition>
        </div>
        <Transition  name="fademenu" appear>  
        <div class="menu_block">
            <swiper
              class="menu_block_swiper"
              :modules="modules"
              :slides-per-view="slideByView"
              :space-between="0"

              :navigation="{
                  nextEl: '.button-next',
                  prevEl: '.button-prev',
              }"
            >


                <swiper-slide v-for="slide,index in dataBlocks" @click="changeBlock(index)" :class="index == activeData ? 'active' : ''">
                  <div class="number">{{index+1}}</div> 
                  <div class="block_title" v-html="slide.Title.replaceAll('p>','h3>').replaceAll('/uploads',this.$APIURL+'/uploads')"  ></div>
                </swiper-slide>

              
            </swiper>
            <div class="control" >
              <div :class="'button-prev'" class='swiper-button-prev'></div>
              <div :class="'button-next'" class='swiper-button-next'></div>
            </div>
        </div>
        </Transition>
    </div>


  </div>
</template>

<style>
  .main_info{
    flex-basis: 81%;
    max-height: 81%;
    margin: 0;
    width: 100%;
  }


  .graphic_block{
    border-left : 2px solid rgba(255,255,255,0);
    border-top : 2px solid rgba(255,255,255,0);
    margin-top: -2px;
    padding:0;
    border-top-left-radius: 80px 80px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: border-color 0.5s ease 0.2s;
    z-index: 0;
  }
  .graphic_block.showBorder{
    border-color: white;
  }
  .video_block{
    /* height: 100%; */
    flex-basis: 85%;
    max-height: 85%;
    background: #0c0d20;
    opacity: 0;
    transition: opacity 1s ease 0.75s;
  }
  .video_block.show{
    opacity: 1;
  }
  #info_video{
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .excerpt{
    position: absolute;
    top : 2rem;
    left: 2.5rem;
    z-index: 95;
    font-weight: 600;
    line-height: 125%;
    font-size: 1.4rem;
    transition-delay: 0.4s !important;
  }
  .excerpt .text-big{
    font-weight: 700;
  }
  .points{
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 99;
    position: absolute;
    transition-delay: O.25s !important;
  }
  .data_points{
    position: absolute;
    left:0;
    top : 0;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: #28285F;
    border: 2.25px solid #FFFFFF;
    list-style: none;
    transform:translate(-50%,-50%);
    cursor: pointer;
    transition: background 0.5s ease, transform 0.5s ease;
  }
  .data_points span{
    position: absolute;
    top : 50%;
    left: 50%;
    transform:translate(-50%,-51%);
    font-weight: 600;
    font-size: 1.4rem;

  }
  .data_points.active{
    background-color: #55BE9B;
    transform:translate(-50%,-50%) scale(1.2);
  }
  .data_block{
    padding: 0;
    display: flex;
  }
  .menu_block{
    flex-basis: 15%;
    max-height: 15%;
    border-top : 2px solid white;
    width: 100%;
    z-index: 100;
  }
  .menu_block .swiper{
    height: 100%;
    width : 100%;
  }
  .menu_block .swiper-slide{
    border-right: 2px solid white;
    border-bottom : none;
    display: flex;
    align-items: center;
    padding: 2rem 1.5rem;
    transition: background 0.5s ease;
    cursor: pointer;
  }
  .menu_block .active{
    background-color : rgba(85,190,155,0.8)
  }
  .menu_block .swiper-slide:last-child{
    border-right: none;
  }
  
  .menu_block .swiper-slide >div{
    display: inline-block;
  }
  .menu_block .swiper-slide .number{
    font-weight: 600;
    font-size: 4rem;
    line-height: 70px;
    margin-right : 1.5rem;
  }
  .menu_block .block_title h3{
    font-weight: 600;
    font-size: 1rem;
    line-height: 125%;
    text-transform: uppercase;
  }
  .menu_block .block_title img{
    max-width: 100%;
    transform: scale(0.8) translateY(3px);
    transform-origin: center left;
  }
  .menu_block .control{
    position: absolute;
    top : -45px;
    left : 0;
  }
  .menu_block .swiper-button-next,.menu_block .swiper-button-prev{
    height: 45px;
    width: 45px;
    margin-top : 0;
    position: relative;
    display: inline-block;
    border: 2px solid white;
  }
  .menu_block .swiper-button-lock{
    display: none;
  }
  .menu_block .swiper-button-next{
    left: -4px;
  }
  .menu_block .swiper-button-prev{
    left: -2px;
  }
  .menu_block .swiper-button-disabled{
    opacity : 1;
  }
   .menu_block .swiper-button-disabled:after{
    opacity : 0.35;
  }
  .menu_block .swiper-button-next::after,.menu_block .swiper-button-prev::after{
    color: white;
    font-size: 1.8rem;
    position: absolute;
    top : 50%;
    left: 50%;
    transform:translate(-50%,-50%);
  }

  .fade-enter-active{
    transition: opacity 0.5s ease 0.25s;
  }

  .fade-leave-active {
    transition: opacity 0.5s ease 0.15s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .fademenu-enter-active{
    transition: opacity 0.5s ease 0.5s;
  }

  .fademenu-leave-active {
    transition: opacity 0.5s ease;
  }
  .fademenu-enter-from,
  .fademenu-leave-to {
    opacity: 0;
  }
</style>
