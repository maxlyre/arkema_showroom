<script>

  export default {
    props:{
      content: {
        type: Object,
        required: true,
      },
      lang:{
        type:String,
        required:true
      }
    },
    data() {
      return {
      }
    },
    methods:{
      changeIndex(id){
      this.$emit("changeID",id);
      }
    }
  };
</script>

<template>
    <div class="content home">
      <div v-for="(nav,groupindex) in content"
        class="menu_item"
        :style="{left:nav.positionX+'%',top:nav.positionY+'%'}"
      >
        
        <h3 v-if="this.lang =='fr'" @click="changeIndex(nav.walls_items.data[0].id)">{{nav.Title}}</h3>
        <h3 v-else @click="changeIndex(nav.walls_items.data[0].attributes.localizations.data[0].id)">{{nav.EnglishTitle}}</h3>
      </div>
    </div>
</template>

<style scoped>
  .content{
    width: 100%;
  }
  .home{
    position: relative
  }
  .menu_item{
    position: absolute;
  }
  h3{
    cursor: pointer;
  }
</style>
