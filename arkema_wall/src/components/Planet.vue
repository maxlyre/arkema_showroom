<script>
  export default {
    components: {
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
    },
    mounted(){
      console.log(this.content)
    },
  };
</script>
<template>
  <div :class="['colonne', 'col-md-'+content.column]">
  </div>
</template>

<style scoped>

</style>
