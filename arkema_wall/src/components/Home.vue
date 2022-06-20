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
      changeIndex(id,group){
        console.log(group)
      this.$emit("changeID",id,group);
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
        
        <h3 v-if="this.lang =='fr'" @click="changeIndex(nav.walls_items.data[0].id,nav.Title)">{{nav.Title}}</h3>
        <h3 v-else @click="changeIndex(nav.walls_items.data[0].attributes.localizations.data[0].id,nav.Title)">{{nav.EnglishTitle}}</h3>
      </div>
    </div>
</template>

<style scoped>
  .content{
    width: 100%;
  }
  .home{
    position: relative;
    height: 100%;
  }
  .menu_item{
    position: absolute;
  }
  h3{
    cursor: pointer;
    color: white;
  }
</style>
