<script>
  import TheWelcome from "./components/TheWelcome.vue";
  import Navigation from "./components/Navigation.vue"
  import Pages from "./components/Pages.vue"
  import Home from "./components/Home.vue"
  export default {
      data() {
        return {
          greeting: 'Hello World!',
          dataNavigation:this.$jsonData.wallNavigation,
          dataWall:this.$jsonData.walls,
          id:0,
          lang : "fr"
        }
      },
      components:{
        Navigation,Pages,Home
      },
      computed:{
      },
      created(){
        this.dataWall['0']={
          attributes:{
            Title : "",
            Contenu : []
          }
        }
      },
      methods:{
        changeID(index,lang){
          this.id = index;
          this.lang = lang;
        },
        changeIDHome(index){
          this.$refs.navigation.changeIndex(index)
        }
      }
};

</script>

<template>
  <header>
    <Navigation 
      ref="navigation"
      :content= dataNavigation
      v-on:changeID=changeID
    />
  </header>
    <section class="container row">
        <Home v-if="this.id == 0" 
          :content= dataNavigation
          :lang = lang
          v-on:changeID = changeIDHome
        />
        <Pages v-else
          :contents= dataWall[id] 
        />
    </section>
</template>

<style>
@import "./assets/base.css";
@import "./assets/flexbox.css";
#app {
  padding: 1rem;
  display: flex;
  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    padding: 0 1rem;
    height: 100vh;
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
