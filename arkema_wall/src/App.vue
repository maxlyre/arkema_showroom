<script>
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
        },
        toggleMobileNavigation(){
          document.querySelector('.open_button').classList.toggle('nav_active');
          document.querySelector('.close_button').classList.toggle('nav_active');
          document.querySelector('.menu_content').classList.toggle('nav_active');
          document.querySelector('.lang_switcher').classList.toggle('nav_active');
        } 
      }
};

</script>

<template>
  <header>
    <div class="nav_button" @click="toggleMobileNavigation">
      <img class="open_button nav_active" src="./assets/menu-8.svg" alt="">
      <img class="close_button" src="./assets/e-remove.svg" alt="">
    </div>
    <Navigation 
      ref="navigation"
      :content= dataNavigation
      v-on:changeID=changeID
    />
  </header>
    <section class="container">
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
    width: 100%;
  }

  #app {
    height: 100vh;
    width: 100%;
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
  flex: 1;
  max-height: 100vh;
  overflow-y :auto;
}
.active{
  text-decoration: underline;
}
.nav_button{
  display: none;
}
  @media screen and (max-width: 1024px) {
    #app{
      height: 100vh;
    }
    header{
      position: static;
    }
    .nav_button{
      display: block;
      position: absolute;
      z-index: 100;
      top : 10px;
      left: 10px;
      width: 25px
    }
    .nav_button .nav_active{
      display: block;
    }
    .open_button{
      display: none;
    }
    .close_button{
      display: none;
    }
  }

</style>
