<script>
  export default {
    props:{
      title: {
        type: String,      
      },
      subtitle: {
        type: String,      
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
<div class="main_header">
    <h2 v-html="this.title.replace('<p>','').replace('</p>','')"></h2>
    <div v-html="subtitle"></div>
  </div>
</template>

<style>
  .main_header{
    border-bottom:2px solid white;
  }
</style>
