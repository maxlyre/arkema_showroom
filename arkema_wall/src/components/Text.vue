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
  <div :class="['colonne', 'col-md-'+content.column]" v-html="imgBody">
  </div>
</template>

<style scoped>

</style>
