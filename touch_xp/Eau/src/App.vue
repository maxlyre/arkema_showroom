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
          veille : false,
          ratio : true
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
    },
    resizeWindow(){
      document.querySelector('html').style.fontSize = (100 * window.innerHeight / 1920 ) + "%";
      // document.querySelector('.controller').style.transform = `scale(${1* window.innerHeight / 1920})` // Screen

      if((1.4 * window.innerHeight / 1920) < 1.45) document.querySelector('.controller').style.transform = `scale(${1.4 * window.innerHeight / 1920}) translateX(-50%)` //Tablette
      this.ratio = (window.innerWidth / window.innerHeight) > 0.6 ? false : true;
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
    this.resizeWindow()
    window.addEventListener("resize", ()=>{
      this.resizeWindow()
    });
  }
}
</script>
  
<template>
  <main :class="[ratio ? 'ratio-9' : 'ratio-10']">
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
  </main>
</template>

<style scoped>
  main{
      width: auto;
      height: 100%;
      z-index: 5000;
      position: relative;
      margin: auto;
      overflow: hidden;
  }
  main.ratio-9{
    aspect-ratio: 9 / 16;
  }
  main.ratio-10{
    aspect-ratio: 10 / 16;
  }
  .controller{
    position: absolute;
    z-index: 800;
    bottom : 5rem;
    transform-origin: bottom left;
    left: 50%;
    transform: translateX(-50%);
    height: 18rem;
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
