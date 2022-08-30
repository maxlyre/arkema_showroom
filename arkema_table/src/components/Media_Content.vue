<script>
  export default {
    props:{
      content: {
        type: Object,      
      },
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
  <div class="media_content">

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
  }
</style>
