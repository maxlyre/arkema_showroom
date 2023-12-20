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
       navLangArray:[]
      }
    },
    methods:{
      changeIndex(id,group){
        this.$emit("changeID",id,group);
      }
    },
    created(){
      
      for(let group of this.content){
        let items = {
          titles:{
            fr:group.Title,
            en:group.EnglishTitle,
            zh:group.ChineseTitle
          },
          positionX : group.positionX,
          positionY : group.positionY,
          entries:{}
        }
        let entriesObject = {
          fr:{
            id:group.menu_entry[0].wall.data.id,
          }
        }
        for(let local of group.menu_entry[0].wall.data.attributes.localizations.data){
          entriesObject[local.attributes.locale] = {
            id:local.id,
          }
        }
        items.entries = entriesObject

        this.navLangArray.push(items)
        
      }
    }
  };
</script>

<template>
    <div class="content home">
      <div v-for="(nav) in navLangArray"
        class="menu_item"
        :style="{left:nav.positionX+'%',top:nav.positionY+'%'}"
      >
      <h3  v-if="nav.entries[lang] != undefined" @click="changeIndex(nav.entries[lang].id,nav.titles[lang])">{{nav.titles[lang]}}</h3>
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
    padding: 1rem;
    border-bottom: 1px solid white;

  }
  @media only screen and (max-width: 600px) {
    .home{
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .menu_item{
      position: static;
      text-align: center;
      margin: 20px 0;
    }
  }

</style>
