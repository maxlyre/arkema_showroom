<script>
  export default {
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
      imgBody(){
        return this.content.Text.replaceAll('img src="', 'img src="'+this.$APIURL);
      }
    }
  };
</script>
<template>
  <div :class="['colonne','text', 'col-md-'+content.column]" v-html="imgBody">
  </div>
</template>

<style>

  h2{
    font-family: 'Work Sans';
    text-transform:uppercase;
    color: white;
    font-size : 2.5rem;
    line-height: 1.3;
    margin-bottom : 2rem;
  }
  h2 .text-big {
    font-weight:bold;
  }
  h2 .text-huge{
    font-weight: 900;
  }
  .text h4{
      font-family: 'Work Sans';
    color: white;
    line-height: 1.4;
    font-size : 1rem;
  }
  .text p,.text td{
    font-family: 'Work Sans';
    color: white;
    font-size : 1.4rem;
    line-height: 1.4;
    margin-bottom: 0.8rem;
  }
  .text p strong{
    font-weight:bold;
  }
  .text p .text-huge,.text td .text-huge{
    font-weight:900;
    font-size: 1.8rem;
  }
  .text ul{
    padding-left: 18px;
  }
  .text li{
    font-family: 'Work Sans';
    color: white;
    line-height: 1.4;
  }
  .text .text-small{
    font-size : 1rem;
    line-height : 1;
  }

</style>
