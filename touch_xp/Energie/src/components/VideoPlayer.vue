<script setup>
  import { ref,watch,nextTick, onMounted  } from 'vue'

  const props = defineProps(['datas','currentID'])
  const clipsArray = ref([])
  const currentVideoID = ref(0)
  const refVideo = ref([])
  let currentVideo = null;
  let type="clip"  

  //Remap Media
  for(let i = 0; i< props.datas.phases.length;i++){
      clipsArray.value.push(props.datas.phases[i].media.clip)
  }

  onMounted(()=>{
    for(let i=0;i<clipsArray.value.length;i++){
      preloadVideo(clipsArray.value[i], refVideo.value[i].children[0])
      if(i == props.currentID){
          currentVideo = refVideo.value[0].children[0]
          currentVideo.play()
      }
    }
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
    await nextTick()
    changeSection()
  })


  // //VIDEO EVENT
  function changeSection(){
    slideTo(props.currentID)
  }

  function slideTo(index){
    const oldVideo = currentVideo;
    currentVideo = refVideo.value[index].children[0]
    currentVideo.play()
    setTimeout(() => {
      currentVideoID.value= index;
      // stopOld(oldVideo)
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
          <video muted playsinline loop autoplay></video>
        </div>
    </div>

</template>

<style scoped>
  .videoPlayer{
    position: absolute;
    top : 0rem;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: black;

  }
  .video_container{
    height: 104%;
    /* pointer-events: none; */
    background-color: black;
    width: 104%;
    position: absolute;
    top: -4%;
    left: -2%;
    opacity: 0.0001;
    transition: opacity 0.5s ease 0.5s;
  }*
  .ratio-9 .video_container{
    height: 104%;
    width: 104%;
    top: -4%;
    left: -2%;
  }
  .ratio-10 .video_container{
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }

  .video_container.show{
    opacity: 1;
    transition: opacity 0.5s ease;
    z-index: 999;
  }
  .video_container video{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>
