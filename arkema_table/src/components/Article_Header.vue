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
    display: flex;
    padding: 3rem;
    min-height: 19%;
  }
  .main_header h2{
    flex: 1;
    font-style: normal;
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 125%;
  }
  .main_header .text-big{
    font-weight: 600;
  }
  .main_header div{
    padding-left: 2rem;
    flex: 1;
    font-style: normal;
    font-weight: 600;
    font-size: 0.90rem;
    line-height: 125%;
    margin-top: 0.75rem;
  }
</style>
