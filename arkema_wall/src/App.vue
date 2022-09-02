<script>
  import VideoBackground from "./components/videoBackground2.vue"
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
          oldID : null,
          lang : "fr",
          group : null,

        }
      },
      components:{
        Navigation,Pages,Home,VideoBackground
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
        changeID(index,lang,group){
          this.oldID = this.id;
          this.id = index;
          this.lang = lang;
          this.group = group;
          if(document.querySelector('.menu_content').classList.contains('nav_active')){
              this.toggleMobileNavigation();
          }
        },
        changeIDHome(index,group){
          this.$refs.navigation.changeIndex(index,group)
        },
        toggleMobileNavigation(){
          document.querySelector('.open_button').classList.toggle('nav_active');
          document.querySelector('.close_button').classList.toggle('nav_active');
          document.querySelector('.menu_content').classList.toggle('nav_active');
          document.querySelector('.lang_switcher').classList.toggle('nav_active');
        } ,
        showPage(){
          document.querySelector('.pageContainer').classList.remove('hide')
        }
      },
      update(){
        console.log(this.lang)
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

        <Transition name="fade" mode="out-in">

          <Home v-if="this.id == 0" 
            :content= dataNavigation
            :lang = lang
            v-on:changeID = changeIDHome
          />

            <Pages v-else
              :contents= dataWall[id] 
              :lang = lang
              :key="id"
              :oldID= oldID
            />
        </Transition>
    </section>
    <VideoBackground
      :content= dataNavigation
      :homeURL = $jsonData.homeBackgroundVideo
      :group = group
      v-on:transitionEnded = showPage
    />
</template>

<style>

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
  position: relative;
}
.active{
  text-decoration: underline;
}
.nav_button{
  display: none;
}
  @media screen and (max-width: 1400px) {
      html{
      font-size: 13px;
    }
  }
  @media screen and (max-width: 1200px) {

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
    .colonne{
      margin-bottom: 3rem;
    }
    figure{
      display:inline-block;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.6s ease 0.1s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .pointer{
    display: block;
    position: absolute;
    background: rgba(0,0,0,0);
    border: 2px solid white;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    z-index: 9000;
    margin-left: -10px;
    margin-top: -10px;
    pointer-events: none;
  }

</style>
