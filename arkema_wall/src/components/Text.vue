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
        
        let text = this.content.Text
        if(!this.$ELECTRONENV){
          text = text.replaceAll('http://localhost:1338/uploads/','/uploads/')
          text = text.replaceAll(this.$APIURL+'/uploads/','/uploads/');
          text = text.replaceAll('/uploads/', this.$APIURL+'/uploads/');
        }

        return text
      }
    }
  };
</script>
<template>
  <div :class="['colonne','text', 'col-sm-'+content.column, 'col-xs-12']" v-html="imgBody">
  </div>
</template>

<style>
  
  h2{
    font-family: 'Work Sans';
    text-transform:uppercase;
    color: white;
    font-size : 2.5rem;
    line-height: 1.3;
    margin-bottom : 2.5rem;
    font-weight: normal;
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
    font-size : 1.3rem;
    margin-top : 1.4rem;
    font-weight: normal;
  }
  .text p,.text td{
    font-family: 'Work Sans';
    color: white;
    font-size : 1.6rem;
    line-height: 1.5;
    margin-bottom: 0.8rem;
  }
  .text td{
    padding: 0.5rem;
  }

  .text p strong{
    font-weight:bold;
  }
  .text p .text-huge,.text td .text-huge{
    font-weight:900;
    font-size: 2rem;
  }
  .text ul{
    padding-left: 18px;
  }
  .text li{
    font-family: 'Work Sans';
    color: white;
    line-height: 1.5;
    font-size : 1.4rem;
  }
  .text .text-small{
    font-size : 1.2rem;
    line-height : 1;
  }

  @media screen and (max-width: 800px) {
    .text .table td{
      display: block;
      width: 100% !important;
      margin-bottom: 4rem;
    }
    .text .table td td{
      margin-bottom: 0;
    }

  }

</style>
