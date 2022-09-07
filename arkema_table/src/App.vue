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
      methods:{
        changeID(index){
          this.id = index;
          this.dataID = this.dataTable.findIndex(element => element.id ==this.id);
          document.querySelector('#right').classList.remove('open')
        },
        goToHome(){
          this.$refs.articleMain.goToHome();
          this.$refs.widget.show(false);
          document.querySelector('#right').classList.remove('open')
        },
        showWidget(){
          this.$refs.widget.show(true);
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
          this.$refs.articleMain.pauseSound();
        },
        showMedia(url){
          this.urlMedia = url;
          if(this.contentMedia == null){
            this.contentMedia = "";
          }
        },
        closeMedia(){
          this.urlMedia = null;
          this.contentMedia = null;
        },
        togglePanel(){
          const right = document.querySelector('#right');
          right.classList.toggle('open')
            
        }
      },
};
</script>

<template>


    <div class="row" :class="[this.id == 0 ? 'homepage':'articles',this.contentMedia != null ? 'media':'']">
        <section id="main" class=" col-xs-12 col-sm-9">
          <Transition  name="fade" appear mode="out-in">  
            <div v-if="this.id == 0" class="home">
                <img src="./assets/logo_blanc.svg" alt="">
                <h2 v-if="this.lang == 'fr'">Sélectionner un objet dans la colonne de droite</h2>
                <h2 v-else>Select an object in the right column</h2>
            </div>

              <ArticleMain
                ref="articleMain"
                v-else
                :content="this.dataTable[this.dataID]"
                @videoEnded ="changeID(0)"
                @videoShowed="showWidget()"
              />
          </Transition>
          <Transition  name="fade" appear >  
            <MediaPlayer
              v-if="urlMedia != null"
              :url="urlMedia"
            />
          </Transition>
        </section>
        <section id="right" class="col-sm-3">
          <div class="open_bar" @click="togglePanel">
            <img src="/assets/img/arrow.svg" alt="">
          </div>
          <header>
            <Transition  name="fade" appear >  
              <div v-if="id != 0 && urlMedia == null" class="menu_icon" >
                <img src="./assets/menu_icon.svg" alt="" @click="goToHome()">
              </div>
            </Transition>
              <img  v-if="urlMedia != null" class="media_close" @click="closeMedia()" src="./assets/close_icon.svg" alt="">
            
              <div v-else class="lang_switch" :class="this.lang">
                <span class="fr_toggle" @click="changeLang('fr')">FR</span>/<span class="en_toggle" @click="changeLang('en')">EN</span>
              </div>
          </header>

          <div class="right-container">
            <Transition  name="fade" appear mode="out-in">  
              <MenuHome 
                v-if="this.id == 0"
                :content="this.dataTable"
                :lang="this.lang"
                v-on:changeID = changeID
              />

              <WidgetMain
              v-else
              :content="this.dataTable[this.dataID].attributes.Widgets"
              v-on:showVideo="showVideo"
              ref="widget"
              />
            </Transition>
            <Transition  name="fade" appear >  
              <MediaContent
              v-if="this.contentMedia != null"
              :content= contentMedia
              v-on:showMedia="showMedia"
              />
            </Transition>
          </div>
        </section>
    </div>

</template>

<style>
html{
  font-size: 15px;
}
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
  position: absolute;
  width: 100%;
  height: 100%;
}
.home img{
  max-width: 900px;
  width: 80%;
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
  flex-direction: column;
  padding: 0;
  height:100vh;
}
#right .open_bar{
  display: none;
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
  width: 25px;
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
    height:calc(100% - 4.5rem);
    width: calc(100% + 2px);
    background : linear-gradient(180deg, #188D6D 0%, #55BE9B 100%);
}

  @media (min-width: 1024px) {

  }

  @media screen and (max-width: 1450px) {
    html{
      font-size: 14px;
    }
  }

  @media screen and (max-width: 1250px) {
    html{
      font-size: 13px;
    }
    #app{
      overflow:hidden;
    }
    #main{
      flex-basis: 100%;
      max-width: 100%;
      
    }
    .articles .article_main {
      padding-right: 40px;
    }
    #main .home{
      padding-right: 350px;
    }
    #right{
      position: absolute;
      right: 0;
      width: 350px;
      flex-basis: initial;
      max-width: none;
      z-index: 200;
      background-color: rgba(85,190,155,1);
      transition: transform 0.5s ease;
    }
    .articles #right.open{
       transform:translateX(0%);
    }
    .articles #right{
      transform:translateX(100%);
      
    }
    .articles #right .open_bar{
      display: block;
      height : 100%;
      width: 40px;
      position : absolute;
      left: -42px;
      border-left: 2px solid white;
      background: rgba(85,190,155,1);
    }
    .articles #right .open_bar img{
      display: block;
      height : 30px;
      width: 30px;
      left: 4px;
      position : absolute;
      top : 50%;
      transform:translateY(-50%) rotate(180deg);
    }
    .articles #right.open .open_bar img{
      transform:translateY(-50%);
    }

    .media_player{
      padding-right: 350px;
    }
    .media #right .open_bar{
      display: none;
    }
  }
  @media screen and (max-width: 1023px) {
    body:before{
      content:"The minimum resolution for this website is 1024px of width";
      display: block;
      position : absolute;
      width: 100%;
      height : 100%;
      background : rgba(85,190,155,1);
      z-index: 999;
      padding: 40vh 30px;
      text-align: center;
      font-weight: 600;
      font-size: 1.8rem;
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



</style>
