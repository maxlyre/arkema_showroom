<script>
  export default {
    props:{
      url: {
        type: String,      
      },
    },
    data() {
      return {
      }
    },
    computed:{
      fileFormat(){
        let regex = new RegExp('[^.]+$');
        return this.url.match(regex)[0];
      }
    }
  };
</script>
<template>
  <div class="media_player">
    <video autoplay v-if="this.fileFormat == 'webm' || this.fileFormat == 'mp4' && $ELECTRONENV" :src="'local-video://'+this.$APIURL+this.url" playsinline controls></video>
    <video autoplay v-else-if="this.fileFormat == 'webm' || this.fileFormat == 'mp4' && !$ELECTRONENV" :src="this.$APIURL+this.url" playsinline controls></video>

    <img v-else :src="this.$APIURL+this.url" alt="">
  </div>
</template>

<style scoped>
  .media_player{
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background: black;
    z-index: 100;
    display: flex;
    align-items: center;
      justify-content: center;
  }
  video{
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  img{
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
</style>
