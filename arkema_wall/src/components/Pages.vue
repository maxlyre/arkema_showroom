<script>

  import Text from "./Text.vue";
  import Camembert from "./Camembert.vue";
  import Gallery from "./Gallery.vue";
  import Planet from "./Planet.vue";

  export default {
    props:{
      contents: {
        type: Object,
        required: true,
      },
      idPage :Number,
      lang: String,
      oldID : [String,Number]
    },
    components:{
      Text,Camembert,Gallery,Planet
    },
    mounted(){
      if(this.oldID == 0){
        document.querySelector('.pageContainer').classList.add('hide')
      }
    }
  };
</script>

<template>
  <div class="pageContainer">
    <h1 >{{contents.attributes.Title}}</h1>
      <div class="content pages row">

            <template v-for="(content,index) in contents.attributes.Contenu">

                <Text 
                  v-if="content.__typename == 'ComponentWallComponentText'" 
                  :content= content
                />
                <Camembert 
                  v-else-if="content.__typename == 'ComponentWallComponentCamembert'" 
                  :content= content
                  :index = index
                  :lang = lang
                />
                <Gallery 
                  v-else-if="content.__typename == 'ComponentWallComponentGallerie'" 
                  :content= content
                  :index = index
                />
                <Planet 
                  v-else-if="content.__typename == 'ComponentWallComponentPlanete'" 
                  :content= content
                  :index = index
                  :lang = lang
                />
                <div v-else>
                  {{content.__typename}}
                </div>

          </template>

      </div>
  </div>
</template>

<style scoped>
  .content{
    width: 100%;
    padding : 0rem 3rem 4rem 3rem;
  }
  h1{
    font-family: 'Work Sans';
    text-transform:uppercase;
    color: white;
    font-size : 1.3rem;
    margin-bottom : 4.5rem;
    padding: 4rem 3rem 0 3rem;
    font-weight: normal;
  }
  .pageContainer{
    position: absolute;
    width: 100%;
    transition: opacity 0.6s ease;
  }
  .hide{
    opacity: 0;
     transition: opacity 0.6s ease;
  }
</style>
