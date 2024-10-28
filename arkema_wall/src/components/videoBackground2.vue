<script>
    import {EffectFade } from 'swiper';
    import { Swiper, SwiperSlide} from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/effect-fade';
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
      homeURL :{
        type: Object
      },
      group :{
        type: String
      }
    },
    data() {
      return {
        listurls : [],
        swiper : null,
        videoElement : [],
        isTransition : false,
        activeGroup : null,
        oldSlide :0
      }
    },
    methods:{
      //Change the video URL and set ready state
      changeVideo(url){
          this.oldSlide = this.swiper.activeIndex;
          let ind = this.listurls.indexOf(url);
          this.videoElement[ind].play();
          this.swiper.slideTo(ind,500);
      },

      //If video ended
      videoEnded(id){
        //Reload video if loop
        if(!this.isTransition){
          this.videoElement[id].play();
        }else{
          //Change video if transition from home
          let bgUrl = this.activeGroup.videoBackground.data.attributes.url;
          let ind = this.listurls.indexOf(bgUrl);
          this.oldSlide = id;
          this.videoElement[ind].play();
          this.swiper.slideTo(ind,0);

          this.isTransition = false;
          this.$emit('transitionEnded')
        }
      },
      onSlideChange(){
        setTimeout(() => {
          this.videoElement[this.swiper.previousIndex].pause();
          this.videoElement[this.swiper.previousIndex].currentTime = 0;
        }, 50);

      }
    },
    setup() {
      return {
        modules: [EffectFade],
      };
    },
    mounted(){
        this.swiper = document.querySelector('.swiper').swiper;
        setTimeout(() => {
         this.videoElement = document.querySelectorAll('.videoBackground video')
          this.videoElement[0].play()
          this.videoElement[0].onended=()=>{this.videoEnded(0)};
          for(let i=1;i<this.videoElement.length;i++){
            this.videoElement[i].onended=()=>{this.videoEnded(i)};
          }
        }, 500);
          
        this.listurls.push(this.homeURL.data.attributes.url)
        for(let i=0;i< this.content.length;i++){
          this.listurls.push(this.content[i].videoTransition.data.attributes.url)
          this.listurls.push(this.content[i].videoBackground.data.attributes.url)
        }
    },
    watch:{
      //On group var change
      group(newValue,oldValue){
        let u = null;
        //Is home ?
        if(newValue == null){
          u =this.homeURL.data.attributes.url;
          this.isTransition = false;
        }else{
          //find which group
          for (const groupe of this.content) {
            if(groupe.Title == newValue || groupe.ChineseTitle == newValue || groupe.EnglishTitle == newValue){
              if(oldValue == null){
                u = groupe.videoTransition.data.attributes.url
                this.isTransition = true;
                this.activeGroup = groupe;
              }else{
                u = groupe.videoBackground.data.attributes.url
                this.isTransition = false;
              }
              
            }
          }
        }
        //Change video url fonct
        this.changeVideo(u)
      }
    }
  };
</script>

<template>
    <div class="videoBackground">
          <swiper
            class="videoSwiper"
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            :effect ="'fade'"
            :fadeEffect="{
              crossFade:true
            }"
            @slideChangeTransitionEnd="onSlideChange"
          >
            <swiper-slide v-for="slide in listurls">
               <video v-if="$ELECTRONENV" :src="'local-video://'+this.$APIURL+slide" muted playsinline preload="auto"></video>
               <video v-else :src="this.$APIURL+slide" muted playsinline preload="auto"></video> 
            </swiper-slide>
          </swiper>
    </div>
</template>

<style scoped>
  .videoBackground{
    position: fixed;
    top : 0;
    left : 0;
    width: 100%;
    height: 100dvh;
    z-index: -1;
  }
  video{
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    transition: opacity 0.5s linear;
  }
  .swiper{
    height: 100%;
  }
  .swiper-slide{
    width: 100%;
    height: 100%;
  }
</style>
