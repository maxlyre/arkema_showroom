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
        infoVideo : null
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
      changeBlock(ind){
        this.activeData=ind;
      },
      videoPlay(){
        if(this.infoVideo.currentTime > this.infoVideo.duration/2){
          this.infoVideo.pause();
        }
      }
    },
    watch:{
    },
    mounted(){
      this.audioPlayer = new Audio(this.$APIURL+this.soundUrl)
      this.audioPlayer.loop = this.soundLoop;
      this.audioPlayer.play();

      this.infoVideo = document.querySelector('#info_video');
      this.infoVideo.addEventListener("timeupdate", this.videoPlay);
      this.infoVideo.play()
     
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
      <ArticleInfoBlock
      :content = dataBlocks[this.activeData]
      />
    </div>
    <div class="graphic_block col-xs-9">
        <div class="video_block">
            <ul class="points">
              
              <li v-for="point,index in this.dataBlocks" class="data_points" :style="'left:'+point.Bullet_X+'%;top:'+point.Bullet_Y+'%'" @click="changeBlock(index)">
                <span>{{index+1}}</span>
              </li>
            </ul>
            <video id="info_video" :src="this.$APIURL+this.videoUrl"></video>
            <h3 class="excerpt" v-html="excerptText"></h3>
        </div>
        <div class="menu_block">
            <swiper
              :modules="modules"
              :slides-per-view="3"
              :space-between="0"
              :navigation="{
                  nextEl: '.button-next',
                  prevEl: '.button-prev',
              }"
            >
                <swiper-slide v-for="slide,index in dataBlocks" @click="changeBlock(index)">
                 <div v-html="slide.Title.replaceAll('p>','h3>')"></div>
                </swiper-slide>
            </swiper>
            <div class="control" >
              <div :class="'button-next'" class='swiper-button-next'></div>
              <div :class="'button-prev'" class='swiper-button-prev'></div>
            </div>
        </div>
    </div>


  </div>
</template>

<style scope>
  .main_info{
    flex-basis: 77%;
    max-height: 77%;
  }


  .graphic_block{
    border-left : 2px solid white;
    border-top : 2px solid white;
    margin-top: -1px;
    padding:0;
    border-top-left-radius: 80px 80px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .video_block{
    /* height: 100%; */
        flex-basis: 82%;
    max-height: 82%;
  }

  video{
    width: 100%;
    height: 100%;
  }
  .excerpt{
    position: absolute;
    top : 1rem;
    left: 1rem;
    z-index: 95;
  }
  .points{
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 99;
    position: absolute;
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
  }
  .data_block{
    padding-right: 0;
    display: flex;
  }
  .menu_block{
    flex-basis: 18%;
    max-height: 18%;
    border-top : 2px solid white;
  }
  .menu_block .swiper-slide{
    border-right: 2px solid white;
    border-bottom : none;
  }
  .menu .swiper-slide:last-child{
    border-right: none;
  }
  

</style>
