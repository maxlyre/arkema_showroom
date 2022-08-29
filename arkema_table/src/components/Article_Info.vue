<script>
  export default {
    props:{
      videoUrl: {
        type: String,      
      },
      soundUrl: {
        type: String,      
      },
      soundLoop: {
        type: Boolean,      
      },
      excerpt: {
        type: String,      
      },
      dataBlocks: {
        type: Object,      
      }
    },
    data() {
      return {
      }
    },
    computed:{
      excerptText(){
        return this.excerpt
        .replaceAll('src="', 'src="'+this.$APIURL)
        .replaceAll('srcset="', 'srcset="'+this.$APIURL)
        .replaceAll('<p>','')
        .replaceAll('</p>','');
      }
    }
  };
</script>
<template>
  <div class="main_header">
    <video :src="this.$APIURL+this.videoUrl"></video>
    {{soundUrl}}
    {{soundLoop}}

    <h3 v-html="excerptText"></h3>
    <!-- {{dataBlocks}} -->
  </div>
</template>

<style>
  .main_header{
    border-bottom:2px solid white;
  }
</style>
