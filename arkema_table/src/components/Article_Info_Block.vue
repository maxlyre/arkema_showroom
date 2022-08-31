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
  };
</script>
<template>

  <div class="data">
    <div class="text_content">
      <div class="title" v-html="Title.replaceAll('/uploads',this.$APIURL+'/uploads')"></div>
      <div class="text" v-html="this.content.Text"></div>
      <div class="extra" v-html="this.content.Extra_text"></div>
    </div>
    <div class="block_image">
      <img  :src="mediaUrl" alt="" @click="this.$root.showMedia(this.content.Media.data.attributes.url)"/>

    </div>
  </div>
</template>

<style scope>
  .data{
    display: flex;
    flex-direction: column;
  }
  .data .text_content{
    padding:1.5rem ;
  }
  .data .text{
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 125%;
    margin-bottom: 1rem;
    color: #55BE9B;
  }
  .data .extra{
    font-weight: 500;
    font-size: 0.85rem;
    line-height: 120%;
  }
  .title{
    text-align: center;
    margin-bottom: 1rem;
  }
  .data .block_image{
    flex:1;
    overflow: hidden;
  }
  .block_image img{
    display: block;
    position: absolute;
    bottom : 0;
  }
  .text_content p, .text_content h4{
    margin-bottom: 0.5rem;
  }
  .text_content li{
    margin-bottom: 0.2rem;
  }
</style>
