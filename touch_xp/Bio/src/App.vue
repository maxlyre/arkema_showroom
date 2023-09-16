<script >
import VideoPlayer from './components/VideoPlayer.vue'
import TextContainer from './components/TextContainer.vue'
import Slider from './components/Slider.vue'

export default {
  components:{
    VideoPlayer,TextContainer,Slider
  },
  data() {
      return {
        currentID : 0,
        veilleTimer : null,
        veille : false
      }
  },
  methods:{
    changePosition(pos){
      this.currentID = pos;
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
    document.onkeyup = (key)=>{
      console.log(key)
      if(key.key < 5){
        this.currentID = parseInt(key.key)
      }
    }
  },
}
</script>
  
<template>
    <main>
      <TextContainer
        :datas="$datas"
        :currentVideo = "currentID"
      />

      <VideoPlayer 
        :datas="$datas"
        :currentID = "currentID"
      />
      <div class="bandeauUp bandeau"></div>
      <div class="bandeauDown bandeau"></div>
      <div class="controller">
        <Slider 
        @controller:position="changePosition"
        :veille="veille"
        @controller:veille="startTimer"
        ></Slider>
      </div>
  </main>
</template>

<style scoped>
  main{
      width: auto;
      height: 100%;
      z-index: 5000;
      aspect-ratio: 9 / 16;
      position: relative;
      margin: auto;
  }
  .bandeau{
    width: 100%;
    height: 0.5rem;
    background: rgba(255, 255, 255, 0.30);
    backdrop-filter: blur(5px);
    position: absolute;
    z-index: 6000;
  }
  .bandeauUp{
    top: 33%;
  }
  .bandeauDown{
    top: 77.7%;
  }
  .controller{
    position: absolute;
    z-index: 800;
    top : 56%;
    right: 2.5rem;
    transform: translateY(-50%);
    z-index: 9000;
  }
  
  .controller.disable{
    pointer-events: none;
  }
  #buttonContainer{
    bottom : 50%;
    right: 0.5rem;
    transform: translate(100% ,50%);
  }
  #buttonKynar{
    bottom: 50%;
    left: -5.5rem;
    transform: translate(-100% ,50%);
  }
</style>
