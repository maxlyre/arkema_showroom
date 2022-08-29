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
  <ArticleHeader
    :title="this.content.attributes.Title"
    :subtitle="this.content.attributes.Subtitle"
  />
  <ArticleInfo
    :videoUrl="this.content.attributes.Infographics_video.data.attributes.url"
    :soundUrl="this.content.attributes.background_sound.data.attributes.url"
    :soundLoop="this.content.attributes.Background_loop"
    :excerpt="this.content.attributes.Infographics_excerpt"
    :dataBlocks="this.content.attributes.data_block"
  />
</template>

<style>

</style>
