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
      }
    },
    components:{
      Text,Camembert,Gallery,Planet
    },
    data() {
      return {
      }
    },
    methods:{

    },
  };
</script>

<template>
    <div class="content pages">
        <h1 class="col-md-12">{{contents.attributes.Title}}</h1>
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
  }
</style>
