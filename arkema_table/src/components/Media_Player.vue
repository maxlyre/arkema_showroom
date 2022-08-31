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
    <video autoplay v-if="this.fileFormat == 'webm' || this.fileFormat == 'mp4' " :src="this.$APIURL+this.url" controls></video>
    <img v-else :src="this.$APIURL+this.url" alt="">
  </div>
</template>

<style scope>
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
  }
  img{
    object-fit: contain;
  }
</style>
