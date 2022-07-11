<script>
  export default {
    props:{
      content: {
        type: Object,
        required: true,
      }
    },
    data() {
      return {
        lang:"fr",
        currentActive:0
      }
    },
    methods:{
        changeIndex(index,group){
          let active = document.querySelector('.active');
          if(active != null){
            active.classList.remove("active")
          }
          this.$emit("changeID",index,this.lang,group);
          document.querySelector('a[targetid="'+index+'"]').classList.add("active")
        },
        arrowNav(direction){
          const divs = document.querySelectorAll(".menu li li a")
          function getClass (a){
            return a.classList.contains('active')
          }
          let id = Array.from(divs).findIndex(getClass);


          id += direction;

          if(id > divs.length-1){
            id = 0;
          }else if(id<0){
            id = divs.length-1;
          }
          this.$emit("changeID",divs[id].getAttribute('targetid'),this.lang, divs[id].getAttribute('groupName'));
          let active = document.querySelector('.active');
          if(active != null){
            active.classList.remove("active")
          }
          divs[id].classList.add("active")
          
        },
        changeLang(lang){
          let active = document.querySelector('.active');
          let newIndex = 0;
          if(active != null && active.getAttribute('targetid')!=0){
            let navItem = this.content[active.parentNode.getAttribute('groupindex')].menu_entry[active.parentNode.getAttribute('itemindex')].wall.data;
            if(lang=="fr"){
              newIndex = navItem.id
            }else{
              if(navItem.attributes.localizations.data.length>0){
                newIndex = navItem.attributes.localizations.data[0].id;
              }else{
                newIndex=0
              }
              
            }
          }else{
            newIndex=0;
          }
          
          this.lang = lang;
          this.$emit("changeID",newIndex);
          this.currentActive = newIndex;
        },
    },
    updated(){
      document.querySelector('a[targetid="'+this.currentActive+'"]').classList.add("active")
    },
  };
</script>

<template>
    <div class="menu">
      <div class="lang_switcher">
          <button class="fr" v-bind:class="{ langActive: lang=='fr' }" @click="changeLang('fr')">FR</button>
          <button class="en" v-bind:class="{ langActive: lang=='en' }" @click="changeLang('en')">EN</button>    
      </div>
      <div class="navigation">
          <button class="prev" @click="arrowNav(-1)"><img src="../assets/arrow.svg"/></button>
          <button class="next" @click="arrowNav(1)"><img src="../assets/arrow.svg"/></button>    
      </div>
      <div class="menu_content">
        <ul id="navigation_container">
          <li class="navigation_content">
              <div class="group_title">
            </div>
            <ul class="navigation_sub_container">
              <li :groupindex="-1" :itemindex="-1" class="navigation_sub_content">
                <a targetID="0" class="active" @click="changeIndex(0)">Home</a>
              </li>
            </ul>
          </li>
          <li v-for="(nav,groupindex) in content" class="navigation_content">
            <div v-if="lang=='fr'" class="group_title">
                  {{ nav.Title }}
            </div>
            <div v-else class="group_title">
                  {{ nav.EnglishTitle }}
            </div>
            <ul class="navigation_sub_container">
              <template v-for="(data,index) in nav.menu_entry" >
                <li :groupindex="groupindex" :itemindex="index" v-if="data.wall.data.attributes.localizations.data.length>0 || lang=='fr'" class="navigation_sub_content">
                  <a  v-if="lang=='fr'" :targetid="data.wall.data.id" :groupName="nav.Title" @click="changeIndex(data.wall.data.id,nav.Title)">{{data.wall.data.attributes.Title}}</a>
                  <a  v-else :targetid="data.wall.data.attributes.localizations.data[0].id" :groupName="nav.Title" @click="changeIndex(data.wall.data.attributes.localizations.data[0].id,nav.Title)">{{data.wall.data.attributes.localizations.data[0].attributes.Title}}</a>
                </li>  
              </template>
            </ul>
          </li>
        </ul>
      </div>



    </div>
</template>

<style scoped>
  .menu{
    padding:15px 45px 15px 15px;
  }
  ul{
    list-style: none;
    padding:0;
  }
  .menu{
    position:relative;
  }
  .menu_content{
    position:relative;
  }
  #navigation_container:before{
    content:"";
    width: 2px;
    height: 85vh;
    position: absolute;
    left: 130px;
    top :  50%;
    transform:translateY(-50%);
    background-color: white;
  }
  .navigation_content{
        display: flex;
        padding-bottom: 20px;
  }
  .group_title{
    width: 130px;
    text-align: right;
    padding-right: 20px;
    text-transform: uppercase;
    position: relative;
    color: white;
    font-family: 'Futura Std';
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.2;
    padding-top : 6px;
    flex: none;
  }
  .group_title:after{
    content:"";
    width: 10px;
    height: 2px;
    position: absolute;
    right: 0;
    top : 14px;
    background-color: white;
  }
  .navigation_sub_content{
    position: relative;
    font-family: 'Futura Std';
    font-size: 1rem;
    color: white;
    cursor:pointer;
        padding: 4px 0 4px 20px;

  }
  .navigation_sub_content:before{
    content:"";
    width: 10px;
    height: 2px;
    position: absolute;
    left: 0;
    top : 14px;
    background-color: white;
  }
  .lang_switcher{
    margin-bottom: 20px;
    display:inline-block;
    margin-left : 15px;
  }
  .lang_switcher button{
    background-color: rgba(0,0,0,0); /* Green */
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border : 2px solid white;
    font-family: 'Futura Std';
    font-weight: 600;
    cursor:pointer;

  }
  .lang_switcher .langActive{
    background-color: white;
    color: black;
  }

  .navigation{
    display:inline-block;
    position: absolute;
    left : 90px;
  }
  .navigation button{
    background-color: rgba(0,0,0,0); /* Green */
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    width: 25px;
    height: 25px;
    margin: 0 15px;
    cursor:pointer;
  }
  .prev img{
    transform:rotate(-180deg);
  }

  @media screen and (max-width: 1400px) {
    .group_title{
      font-size: 1.3rem;
    }
    .navigation_sub_content{
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 1200px) {

    .menu{
      position: static;
      padding: 0;
    }
    .menu_content.nav_active{
      display: flex;
    }
    .menu_content{
      position: absolute;
      background-color: black;
      height: 100vh;
      width: 100%;
      z-index: 99;
      align-items: center;
      justify-content: center;
      display: none;
      top : 0;
    }
    .lang_switcher{
      position: absolute;
      bottom : 10px;
      left : 10px;
      margin: 0;
      z-index: 101;
      display: none;
    }
    .lang_switcher.nav_active{
      display: block;
    }
    .navigation{
      position: absolute;
      top : 15px;
      right : 0px;
      text-align: right;
      z-index: 50;
    }
  }

</style>
