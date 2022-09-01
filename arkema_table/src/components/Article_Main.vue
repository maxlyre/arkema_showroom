<script>
  import ArticleHeader from "./Article_Header.vue"
  import ArticleInfo from "./Article_Info.vue"
  export default {
    components:{
        ArticleHeader,ArticleInfo
    },
    props:{
      content: {
        type: Object,
        required: true,
      }
    },
    data() {
      return {
      }
    },
    computed:{
    }
  };
</script>
<template>
  <div class="article_main">
      <ArticleHeader
    :title="this.content.attributes.Title"
    :subtitle="this.content.attributes.Subtitle"
  />
  <ArticleInfo
    :videoUrl="{webm:this.content.attributes.Infographics_video_WEBM.data.attributes.url,mp4:this.content.attributes.Infographics_video_MP4.data.attributes.url}"
    :soundUrl="this.content.attributes.background_sound.data.attributes.url"
    :soundLoop="this.content.attributes.Background_loop"
    :excerpt="this.content.attributes.Infographics_excerpt"
    :dataBlocks="this.content.attributes.data_block"
  />
  </div>

</template>

<style scoped>
  .article_main{
    display: flex;
    flex-direction: column;
    width:100%;
  }
</style>
