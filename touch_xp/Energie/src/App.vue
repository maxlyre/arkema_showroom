<script >
import VideoPlayer from './components/VideoPlayer.vue'
import TextContainer from './components/TextContainer.vue'
import Button from './components/ButtonRecharge.vue'
import Kynar from './components/ButtonKynar.vue'
export default {
  components:{
    VideoPlayer,TextContainer,Kynar,Button
  },
  data() {
      return {
          chargeButton :false,
          kynarButton: false,
          ratio : true
      }
  },
  methods:{
    resizeWindow(){
      document.querySelector('html').style.fontSize = (100 * window.innerHeight / 1920 ) + "%";
      // document.querySelector('.controller').style.transform = `scale(${1* window.innerHeight / 1920})` // Screen

      if((1.3 * window.innerHeight / 1920) < 1.35)  document.querySelector('.controller').style.transform = `scale(${1.3 * window.innerHeight / 1920}) translateX(-50%)` //Tablette
      this.ratio = (window.innerWidth / window.innerHeight) > 0.6 ? false : true;
    }
  },
  mounted(){
    document.onkeyup = (key)=>{
      console.log(key)
      if(key.key < 4){
        this.currentID = parseInt(key.key)
      }
    }
    this.resizeWindow()
    window.addEventListener("resize", ()=>{
      this.resizeWindow()
    });
  },
  computed:{
    currentID(){
      let id = 0;
      if(this.chargeButton & this.kynarButton){
        id = 3;
      }else if(this.chargeButton & !this.kynarButton){
        id = 1;
      }else if(!this.chargeButton & this.kynarButton){
        id = 2;
      }
      return id;
    }
  }
}
</script>
  
<template>
  <main :class="[ratio ? 'ratio-9' : 'ratio-10']">
    <TextContainer
      :datas="$datas"
      :currentID = "currentID"
    />

    <VideoPlayer 
      :datas="$datas"
      :currentID = "currentID"
    />
    <div class="controller">
      <Kynar
        @pointerdown="kynarButton = true"
        @pointerup="kynarButton = false"
      ></Kynar>
      <Button
        @pointerdown="chargeButton = true"
        @pointerup="chargeButton = false"
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
    bottom : 3rem;
    left: 50%;
    transform-origin: bottom center;
    transform: translateX(-50%);
    height: 16.519rem;
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
