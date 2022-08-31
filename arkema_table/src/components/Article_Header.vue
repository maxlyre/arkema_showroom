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

<style scope>
  .main_header{
    border-bottom:2px solid white;
    display: flex;
    padding: 2rem;
    flex-basis: 23%;
    max-height: 23%;
  }
  .main_header h2{
    flex: 1;
    font-style: normal;
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 125%;
  }
  .main_header h2 .text-big{
    font-weight: bold;
  }
  .main_header div{
    padding-left: 1rem;
    flex: 1;
    font-style: normal;
    font-weight: 700;
    font-size: 0.85rem;
    line-height: 125%;
    margin-top: 0.75rem;
  }
</style>
