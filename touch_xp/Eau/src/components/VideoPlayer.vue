<script setup>
  import { ref,watch,nextTick, onMounted  } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { EffectFade } from 'swiper/modules';
  import 'swiper/css/effect-fade';

  // Import Swiper styles
  import 'swiper/css';

  const props = defineProps(['datas','wantedID'])

  const clipsArray = ref([])
  const datasMap= ref([ ... props.datas.cycle])
  const currentID = ref(0)
  let currentVideo = null;
  let oldVideo = null;
  let swiperInstance = null;
  let type="clip"  

  //Remap Media
  let index = 0;
  for(let i = 0; i< props.datas.cycle.length;i++){
    if(props.datas.cycle[i].media.transitionUp != null){
        clipsArray.value.push(props.datas.cycle[i].media.transitionUp)
        datasMap.value[i].media.transitionUp = index;
        index++;
    } 
    if(props.datas.cycle[i].media.clip != null) {
        clipsArray.value.push(props.datas.cycle[i].media.clip)
        datasMap.value[i].media.clip = index;
        index++;
    }
    if(props.datas.cycle[i].media.transitionDown != null) {
        clipsArray.value.push(props.datas.cycle[i].media.transitionDown)
        datasMap.value[i].media.transitionDown = index;
        index++;
    }
  }

  onMounted(()=>{
    // currentVideo = swiperInstance.slides[0].children[0]
    // currentVideo.play()
    // currentVideo.addEventListener('ended',videoEnded)
    for(let i=0;i<clipsArray.value.length;i++){
      preloadVideo(clipsArray.value[i],i)
    }

  })

  function preloadVideo(url,i){
    console.log(url)
    var req = new XMLHttpRequest();
      req.open('GET', 'video/'+url+'.webm', true);
      req.responseType = 'blob';

      req.onload = function() {
        // Onload is triggered even on 404
        // so we need to check the status code
        if (this.status === 200) {
            var videoBlob = this.response;
            var vid = URL.createObjectURL(videoBlob); // IE10+
            // Video is now downloaded
            // and we can set it as source on the video element
            swiperInstance.slides[i].children[0].src = vid;
            swiperInstance.slides[i].children[0].addEventListener('ended',videoEnded)
        }
      }
      req.onerror = function() {
        // Error
      }

      req.send();
  }
  //SWIPER EVENT
  const onSwiper = (s) => {
    swiperInstance = s;
  };

  // const beforeChange = (e) => {
  //   oldVideo = currentVideo;
  //   currentVideo = swiperInstance.slides[e.activeIndex].children[0]
  //   currentVideo.play()
  //   currentVideo.addEventListener('ended',videoEnded)
  // }
  const onSlideChange = (e) => {
    if(oldVideo != null){
      setTimeout(() => {
        oldVideo.pause()
        oldVideo.currentTime = 0;
      },100)
    }
  }


  watch(()=>props.wantedID,async (key)=>{
    await nextTick()
    changeSection()
  })

  function changeSection(){
    let direction = props.wantedID > currentID.value ? 1 : -1;
    let transition = direction == 1 ? 'transitionDown' : 'transitionUp'

    slideTo(datasMap.value[currentID.value].media[transition])
    currentID.value += direction;
    type = 'transition'
  }

  function slideTo(index){
    oldVideo = currentVideo;
    currentVideo = swiperInstance.slides[index].children[0]
    currentVideo.play()
    swiperInstance.slideTo(index)
  }

  function videoEnded(){
    if(props.wantedID == currentID.value){
      if(type == 'transition'){
        oldVideo = currentVideo;
        slideTo(datasMap.value[currentID.value].media.clip)
        type = 'clip'
      }else{
        currentVideo.play()
      }
    }else{
      changeSection()
    }
  }

</script>

<template>
   <swiper
    class="swiper-container"
    :modules="[EffectFade]" 
    effect="fade"
    :fadeEffect="{
      crossFade : true
    }"
    :slides-per-view="1"
    :space-between="0"
    :pagination="false"
    :longSwipes="true"
    :shortSwipes="true"
    :speed="0"
    @swiper="onSwiper"
    @transitionEnd="onSlideChange"
  >
    <swiper-slide v-for="item in clipsArray">
      <video muted playsinline></video>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
  .swiper-container{
    height: 100%;
    /* pointer-events: none; */
    background-color: black;
  }
</style>
