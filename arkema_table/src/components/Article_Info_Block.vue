<script>
  export default {
    props:{
      content: {
        type: Object,      
      },
    },
    data() {
      return {
        audioPlayer : null
      }
    },
    computed:{
      mediaUrl(){
        if(this.content.Media.data != null){
          return this.$APIURL+this.content.Media.data.attributes.url
        }
      },
      Title(){
        return this.content.Title.replaceAll("p>","h2>")
      }
    },
    watch:{
    },
    update(){
      console.log(this.content)
    },
    beforeUnmount(){
    }

  };
</script>
<template>

  <div class="data">
    <div v-html="Title"></div>
    <div class="text" v-html="this.content.Text"></div>
    <div class="extra" v-html="this.content.Extra_text"></div>
    <img :src="mediaUrl" alt="">
  <!-- {{this.content}} -->
  </div>
</template>

<style scope>
  

</style>
