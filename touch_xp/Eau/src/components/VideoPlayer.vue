<script setup>
  import { ref,watch,nextTick, onMounted  } from 'vue'

  const props = defineProps(['datas','wantedID','activateFlush'])
  const emit = defineEmits(['video:time','video:flushEnd'])
  const clipsArray = ref([])
  const datasMap= ref([ ... props.datas.cycle])
  const currentID = ref(0)
  const currentVideoID = ref(0)
  const refVideo = ref([])
  let currentVideo = null;
  let type="clip"  
  const refFlush = ref(null)

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

    for(let i=0;i<clipsArray.value.length;i++){
      preloadVideo(clipsArray.value[i], refVideo.value[i].children[0])
      refVideo.value[i].children[0].addEventListener('ended',videoEnded.bind(null, i), false)
      refVideo.value[i].children[0].addEventListener('timeupdate',sendTime.bind(null, 'cycle'), false)
      if(i == 0){
          currentVideo = refVideo.value[0].children[0]
          currentVideo.play()
      }
    }
    preloadVideo(props.datas.flush.clip,refFlush.value.children[0])
    refFlush.value.children[0].addEventListener('ended',flushEnd, false)
    refFlush.value.children[0].addEventListener('timeupdate',sendTime.bind(null, 'flush'), false)
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

  watch(()=>props.wantedID,async (key)=>{
    await nextTick()
    changeSection()
  })
  watch(()=>props.activateFlush,async (key)=>{
    await nextTick()
    if(key){
      refFlush.value.children[0].play()
    }else{
      setTimeout(() => {
        refFlush.value.children[0].pause()
        refFlush.value.children[0].currentTime = 0;
      }, 350);
    }
    sendTime('flush')
  })

  //VIDEO EVENT
  function changeSection(){
    let direction = props.wantedID > currentID.value ? 1 : -1;
    let transition = direction == 1 ? 'transitionDown' : 'transitionUp'

    slideTo(datasMap.value[currentID.value].media[transition])
    currentID.value += direction;
    type = 'transition'
    sendTime('cycle')
  }

  function slideTo(index){
    const oldVideo = currentVideo;
    currentVideo = refVideo.value[index].children[0]
    currentVideo.play()
    setTimeout(() => {
      currentVideoID.value= index;
      stopOld(oldVideo)
    }, 25);
  }
  const stopOld = (video) => {
    if(video != null){
      setTimeout(() => {
        video.pause()
        video.currentTime = 0;
      },50)
    }
  }
  function videoEnded(i){
    if(i == currentVideoID.value){
      if(props.wantedID == currentID.value){
        if(type == 'transition'){
          slideTo(datasMap.value[currentID.value].media.clip)
          type = 'clip'
        }else{
          currentVideo.play()
        }
      }else{
        changeSection()
      }
    }
  }
  function flushEnd(){
    emit('video:flushEnd')
  }
  function sendTime(i){
    if(props.activateFlush && i == 'flush'){
      emit('video:time',{
        type: 'flush',
        time : refFlush.value.children[0].currentTime
      })
    }else if(!props.activateFlush){
      emit('video:time',{
        type: type,
        time : currentVideo.currentTime,
        id:currentID.value
      })
    }

  }
</script>

<template>
    <div class="videoPlayer">
      <div class="video_container flush" :class="[props.activateFlush ? 'show' : '']" ref="refFlush">
        <video muted playsinline></video>
      </div>
      <div v-for="(item,index) in clipsArray"
        ref="refVideo"
        class="video_container"
        :class="[currentVideoID == index ? 'show' : '']"
      >
        <video muted playsinline></video>
      </div>
    </div>

</template>

<style scoped>
  .videoPlayer{
    position: absolute;
    top : 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  .video_container{
    height: 100%;
    /* pointer-events: none; */
    background-color: black;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.01;
  }
  .video_container.show{
    opacity: 1;

  }
  .video_container video{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .video_container.flush{
    z-index: 99;
    transition: opacity 0.35s ease;
  }
</style>
