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
          kynarButton: false
      }
  },
  methods:{
  },
  mounted(){
    document.onkeyup = (key)=>{
      console.log(key)
      if(key.key < 4){
        this.currentID = parseInt(key.key)
      }
    }
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

</template>

<style scoped>
  .controller{
    position: absolute;
    z-index: 800;
    bottom : 8%;
    left: 50%;
    transform: translateX(-50%)
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
