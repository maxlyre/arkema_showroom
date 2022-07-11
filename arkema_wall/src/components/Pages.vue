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
      idPage :Number
    },
    components:{
      Text,Camembert,Gallery,Planet
    },
    data() {
      return {
        tick : false
      }
    },
    methods:{

    },
    update(){
      this.tick = !this.tick;
    }
  };
</script>

<template>
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
              />
              <div v-else>
                {{content.__typename}}
              </div>

        </template>

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

</style>
