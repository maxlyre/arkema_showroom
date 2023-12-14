<script setup>
  import { ref,watch,nextTick, onMounted  } from 'vue'

  const props = defineProps(['datas','currentID'])
  const clipsArray = ref([])
  const backVideo = ref(null)
  const currentVideoID = ref(0)
  const refVideo = ref([])
  let currentVideo = null;

  //Remap Media
  for(let i = 0; i< props.datas.phases.length;i++){
      clipsArray.value.push(props.datas.phases[i].media.clip)
  }

  onMounted(()=>{
    for(let i=0;i<clipsArray.value.length;i++){
      preloadVideo(clipsArray.value[i], refVideo.value[i].children[0])
    }
    preloadVideo(props.datas.back, backVideo.value)

  })

  function preloadVideo(url,video){
    var req = new XMLHttpRequest();
      req.open('GET', 'video/'+url+'.webm', true);
      req.responseType = 'blob';
      const videobuf = video;
      req.onload = function(){
        // Onload is triggered even on 404
        // so we need to check the status code
        if (this.status === 200) {
            var videoBlob = this.response;
            var vid = URL.createObjectURL(videoBlob); // IE10+
            // Video is now downloaded
            // and we can set it as source on the video element
            videobuf.src = vid;
            videobuf.currentTime = 0.01;
        }
      }
      req.onerror = function() {
        // Error
      }

      req.send();
  }
  
  //WATCH

  watch(()=>props.currentID,async (key)=>{
    if(key >0){
      await nextTick()
      changeSection()
    }else{
      currentVideoID.value= -1;
      
    }

  })


  // //VIDEO EVENT
  function changeSection(){
    slideTo(props.currentID-1)
  }

  function slideTo(index){
    console.log(index)
    const oldVideo = currentVideo;
    currentVideo = refVideo.value[index].children[0]
    currentVideo.play()
    setTimeout(() => {
      if(currentVideoID.value != -1) stopOld(oldVideo)
      currentVideoID.value= index;

    }, 25);
  }
  const stopOld = (video) => {
    if(video != null){
      setTimeout(() => {
        video.pause()
        video.currentTime = 0;
      },500)
    }
  }
</script>

<template>
    <div class="videoPlayer">
        <div v-for="(item,index) in clipsArray"
          ref="refVideo"
          class="video_container"
          :class="[currentVideoID == index ? 'show' : '']"
        >
          <video muted playsinline></video>
        </div>
        <video class="videoback" ref="backVideo" muted playsinline loop autoplay></video>
    </div>

</template>

<style scoped>
  .videoback{
    position: absolute;
    top : 0rem;
    left: 0;
    width: 100%;
    height: auto;
    z-index: -1;

  }
  .videoPlayer{
    position: absolute;
    top : 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    width: auto;
    height: 100%;
    z-index: 0;
    background-color: black;
    aspect-ratio: 9 / 16;
  }
  .ratio-9 .videoPlayer{
    aspect-ratio: 9 / 16;

  }
  .ratio-10 .videoPlayer{
    aspect-ratio: 10 / 16;
    top : 43%;
  }
  .video_container{
    height: 100%;
    /* pointer-events: none; */
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.0001;
    transition: opacity 0.5s ease;
  }
  .video_container.show{
    opacity: 1;
    transition: opacity 0s ease;
    z-index: 999;
  }
  .video_container video{
    object-fit: contain;
    width: 100%;
    height: auto;
  }
</style>
