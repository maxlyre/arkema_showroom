<script>
  import ArticleHeader from "./Article_Header.vue"
  import ArticleInfo from "./Article_Info.vue"
  export default {
    components:{
        ArticleHeader,ArticleInfo
    },
    data() {
      return {
        showElements : false
      }
    },
    props:{
      content: {
        type: Object,
        required: true,
      }
    },
    methods:{
      goToHome(){
        this.$refs.info.goToHome();
        this.showElements=false
      },
      closeArticle(){
        this.$emit('videoEnded')
      },
      videoShowed(){
        this.showElements =true
        this.$emit('videoShowed')
      },
      pauseSound(){
        this.$refs.info.pauseSound();
      }
    }
  };
</script>
<template>
  <div class="article_main">
      <ArticleHeader
        class="header"
        :class="showElements? 'visible' :''"
        :title="this.content.attributes.Title"
        :subtitle="this.content.attributes.Subtitle"
      />
    <ArticleInfo
      :videoUrl="this.content.attributes.Infographics_video.data.attributes.url"
      :soundUrl="this.content.attributes.background_sound.data.attributes.url"
      :soundLoop="this.content.attributes.Background_loop"
      :excerpt="this.content.attributes.Infographics_excerpt"
      :dataBlocks="this.content.attributes.data_block"
      ref="info"
      @videoEnded ="closeArticle()"
      @videoShowed ="videoShowed()"
    />
  </div>

</template>

<style scoped>
  .article_main{
    display: flex;
    flex-direction: column;
    width:100%;
  }
  .header{
    /* opacity: 0; */
    transition: opacity 0.5s ease;
  }
  .header.visible{
    opacity: 1;
  }

</style>
