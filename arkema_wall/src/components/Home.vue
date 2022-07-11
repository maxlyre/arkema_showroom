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
    },
  };
</script>

<template>
    <div class="content home">
      <div v-for="(nav,groupindex) in content"
        class="menu_item"
        :style="{left:nav.positionX+'%',top:nav.positionY+'%'}"
      >
        
        <h3 v-if="this.lang =='fr'" @click="changeIndex(nav.menu_entry[0].wall.data.id,nav.Title)">{{nav.Title}}</h3>
        <h3 v-else @click="changeIndex(nav.menu_entry[0].wall.data.attributes.localizations.data[0].id,nav.Title)">{{nav.EnglishTitle}}</h3>
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
    text-transform: uppercase;
    font-size: 1.7rem;
    max-width: 250px;
    display: inline-block;
    text-align:center;
    padding: 0.5rem;
    border-bottom: 1px solid white;

  }
</style>
