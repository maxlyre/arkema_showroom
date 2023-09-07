<script >
import VideoPlayer from './components/VideoPlayer.vue'
import TextContainer from './components/TextContainer.vue'
import Knob from './components/Knob.vue'
import Button from './components/Button.vue'

export default {
  components:{
    VideoPlayer,TextContainer,Knob,Button
  },
  data() {
      return {
          wantedID : 0,
          currentID : 0,
          activateFlush : false,
          currentVideo : {
            type: 'cycle',
            time: 0,
            id:0
          },
          veilleTimer : null,
          veille : false
      }
  },
  methods:{
    getTime(time){
      this.currentVideo = time;
    },
    posChanged(position){
      let index = Math.floor(position * 5);
      if(index > 4) index = 4;
      this.resetTimer()
      this.wantedID = index;
    },
    flushChanged(flush){
      this.activateFlush = flush
      this.resetTimer()
    },
    startTimer(){
      this.veilleTimer = setTimeout(this.goToVeille,3*60*1000)
    },
    goToVeille(){
      this.veille = true;
      console.log("gotoVeille")
    },
    resetTimer(){
      this.veille = false;
      clearTimeout(this.veilleTimer)
      this.startTimer()
    }
  },
  mounted(){
    this.startTimer()
    document.onkeyup = (key)=>{
      if(key.key < 5){
        this.wantedID = parseInt(key.key)
      }
      if(key.key == 5){
        this.activateFlush = !this.activateFlush;
      }
      
    }
  }
}
</script>
  
<template>
  <TextContainer
    :datas="$datas"
    :currentVideo="currentVideo"
  />

  <VideoPlayer 
    :datas="$datas"
    :wantedID = "wantedID"
    :activateFlush="activateFlush"
    @video:flushEnd="activateFlush = false"
    @video:time="getTime"
  />
  <div class="controller" :class="[activateFlush ? 'disable' : '']">
    <Knob 
      ref="knob"
      @controller:position="posChanged"
      :veille="veille"
      @controller:veille="startTimer"
    />
    <Button
      @controller:flush="flushChanged"
      :flush="activateFlush"
    ></Button>
  </div>

</template>

<style scoped>
  .controller{
    position: absolute;
    z-index: 800;
    bottom : 6%;
    left: 50%;
    transform: translateX(-50%)
  }
  .controller.disable{
    pointer-events: none;
  }
  #buttonContainer{
    bottom : 50%;
    right: -27%;
    transform: translate(100% ,50%);
  }
</style>
