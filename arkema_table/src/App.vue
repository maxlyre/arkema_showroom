<script>
  import MenuHome from "./components/Home_Menu.vue"
  import ArticleMain from "./components/Article_Main.vue"
  import WidgetMain from "./components/Widget_Main.vue"
  import MediaPlayer from "./components/Media_Player.vue"
  import MediaContent from "./components/Media_Content.vue"
  export default {
      data() {
        return {
          dataTable:this.$jsonData,
          id:0,
          lang : "fr",
          dataID:-1,
          urlMedia : null,
          contentMedia : null
        }
      },
      components:{
         MenuHome,ArticleMain,WidgetMain,MediaPlayer,MediaContent
      },
      computed:{
      },
      created(){
        console.log(this.dataTable)
        console.log(this.id)
      },
      methods:{
        changeID(index){
          this.id = index;
          this.dataID = this.dataTable.findIndex(element => element.id ==this.id);
        },
        changeLang(lang){
          this.lang = lang;
          if(this.id != 0 && this.dataTable[this.dataID].attributes.locale != this.lang){
            this.changeID(this.dataTable[this.dataID].attributes.localizations.data[0].id)
          }
        },
        showVideo(content){
          this.urlMedia = content.Video_slide[0].Video.data.attributes.url;
          this.contentMedia = content;
        },
        showMedia(url){

          this.urlMedia = url;
          if(this.contentMedia == null){
            this.contentMedia = "";
          }
                    console.log(this.contentMedia)
        },
        closeMedia(){
          this.urlMedia = null;
          this.contentMedia = null;
        }
      },
};
</script>

<template>
          <!-- <Transition name="fade" mode="out-in">

          </Transition> -->
    <div class="row">
        <section id="main" class="col-xs-9">
          <div v-if="this.id == 0" class="home">
              <img src="./assets/logo_blanc.svg" alt="">
              <h2 v-if="this.lang == 'fr'">Sélectionner un objet dans la colonne de droite</h2>
              <h2 v-else>Select an object in the right column</h2>
          </div>

            <ArticleMain
              v-else
              :content="this.dataTable[this.dataID]"
            />
            <MediaPlayer
              v-if="urlMedia != null"
              :url="urlMedia"
            />
        </section>
        <section id="right" class="col-xs-3">
          <header>
            <div v-if="id != 0 && urlMedia == null" class="menu_icon" @click="changeID(0)">
              <img src="./assets/menu_icon.svg" alt="">
            </div>
             
              <img  v-if="urlMedia != null" class="media_close" @click="closeMedia()" src="./assets/close_icon.svg" alt="">
            
            <div v-else class="lang_switch" :class="this.lang">
              <span class="fr_toggle" @click="changeLang('fr')">FR</span>/<span class="en_toggle" @click="changeLang('en')">EN</span>
            </div>
          </header>
          <div class="right-container">

            <MenuHome 
              v-if="this.id == 0"
              :content="this.dataTable"
              :lang="this.lang"
              v-on:changeID = changeID
            />

            <div v-else class="widget">
              <WidgetMain
              :content="this.dataTable[this.dataID].attributes.Widgets"
              v-on:showVideo="showVideo"
              />
            </div>
            
            <MediaContent
            v-if="this.contentMedia != null"
            :content= contentMedia
            v-on:showMedia="showMedia"
            />
          </div>
        </section>
    </div>

    <!-- <VideoBackground
      :content= dataNavigation
      :homeURL = $jsonData.homeBackgroundVideo
      :group = group
      v-on:transitionEnded = showPage
    /> -->
</template>

<style>

#app {
  min-height: 100vh;
  display: flex;
  font-weight: normal;
  background: linear-gradient(90deg, #28285F -0.08%, #55BE9B 76.29%);
}
#app >.row{
  width: 100%;
  margin:0;
  padding: 0;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

#main{
  display: flex;
  padding: 0;
}
.home{
  flex:1;
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.home img{
  max-width: 900px;
  width: 100%;
  height: auto;
}
.home h2{
  font-style: normal;
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 120%;
  /* identical to box height, or 30px */
  margin-top: 2rem;
  text-align: center;
}
#right{
  border-left: 2px solid white;
  display: flex;
  flex-direction: column;
  padding: 0;
  height:100vh;
}
header{
  height: 4.5rem;
  padding: 1rem 2rem;
  display: flex;
    justify-content: flex-end;
}

.lang_switch{
  float:right;
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  line-height: 27px;
  align-self: center;
  justify-self: right;

}
.lang_switch span{
  cursor: pointer;
}
.lang_switch.en .en_toggle{
  color: #28285F;
}
.lang_switch.fr .fr_toggle{
  color: #28285F;
}

.media_close{
  cursor: pointer;
  width: auto;
}

.menu_icon{
  justify-self: start;
  flex: 1;
}
.menu_icon img{
  width: auto;
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.right-container{
    flex: 1;
    border-top : 2px solid white;
    border-left : 2px solid white;
    border-top-left-radius: 80px 80px;
    position:relative;
    left:-2px;
    height:100%;
    background : linear-gradient(180deg, #188D6D 0%, #55BE9B 100%);
}

@media (min-width: 1024px) {

}

  @media screen and (max-width: 1400px) {

  }
  @media screen and (max-width: 1200px) {


  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.6s ease 0.1s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }



</style>
