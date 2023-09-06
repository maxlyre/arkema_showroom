<script >
import VideoPlayer from './components/VideoPlayer.vue'
export default {
  components:{
    VideoPlayer
  },
  data() {
      return {
          wantedID : 0,
          currentID : 0
      }
  },
  mounted(){
    document.onkeyup = (key)=>{
      this.wantedID = parseInt(key.key)
    }
  }
}
</script>
  
<template>
  <VideoPlayer 
    :datas="$datas"
    :wantedID = "wantedID"
  />
</template>

<style scoped>

</style>
