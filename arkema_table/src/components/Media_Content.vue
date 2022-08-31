<script>
  export default {
    props:{
      content: {
        type: [Object,String],
      },
    },
    data() {
      return {
      }
    },
  };
</script>
<template>
  <div class="media_content">
    <div class="video" 
    v-if="typeof this.content == 'object'">
      <div v-html="content.Title.replaceAll('p>','h2>')"></div>
      <div v-html="content.Subtitle"></div>
      <ul>
        <li v-for="video,index in content.Video_slide">
          <h3>{{index}}. {{video.Title}}</h3>
          <img :src="this.$APIURL+video.Poster.data.attributes.url" alt="" @click="$emit('showMedia',video.Video.data.attributes.url)">
          <div v-html="video.Subtitle"></div>

        </li>
      </ul>
      <div v-html="content.Call_to_action"></div>
    </div>
  </div>
</template>

<style>
  .media_content{
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background: black;
    z-index: 100;
    overflow: auto;
  }
</style>
