<script>
  import Text from "./components/Text.vue";
  import Camembert from "./components/Camembert.vue";
  import Gallery from "./components/Gallery.vue";
  import Planet from "./components/Planet.vue";
  import TheWelcome from "./components/TheWelcome.vue";
  import Navigation from "./components/Navigation.vue"

  export default {
      data() {
        return {
          greeting: 'Hello World!',
          dataNavigation:this.$jsonData.wallNavigation,
          dataWall:this.$jsonData.walls,
          id:2
        }
      },
      components:{
        Text,Camembert,Gallery,Planet,Navigation
      },
      computed:{
      },
      mounted(){
        console.log(this.dataWall[this.id])
      },
      methods:{
        changeID(index){
          this.id = index;
        }
      }
};

</script>

<template>
  <header>
    <!-- <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    /> -->
    <Navigation 
      :content= dataNavigation
      v-on:changeID=changeID
    />

    <section class="container row">
      <h1 class="col-md-12">{{dataWall[id].attributes.Title}}</h1>
      <template v-for="(content,index) in dataWall[id].attributes.Contenu">
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
    </section>
    <!-- <p>{{dataWall}}</p> -->
  </header>
</template>

<style>
@import "./assets/base.css";
@import "./assets/flexbox.css";
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}

.container{
  display: flex;
}
.active{
  text-decoration: underline;
}

</style>
