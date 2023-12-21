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
        currentActive:0,
        navLangArray : []
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
            let navItem = this.navLangArray[active.parentNode.getAttribute('groupindex')].entries[active.parentNode.getAttribute('itemindex')];
            
            if(navItem[lang]!= undefined){
              newIndex = navItem[lang].id
            }else{
              newIndex = 0;
            }
          }else{
            newIndex=0;
          }
          
          if(active != null){
            active.classList.remove("active")
          }
          this.lang = lang;
          const groupName = newIndex == 0 ? null :active.getAttribute('groupName');
          this.$emit("changeID",newIndex,this.lang,groupName);
          this.currentActive = newIndex;
        },
    },
    updated(){
      
      document.querySelector('a[targetid="'+this.currentActive+'"]').classList.add("active")
    },
    created(){
      
      for(let group of this.content){
        let items = {
          titles:{
            fr:group.Title,
            en:group.EnglishTitle,
            zh:group.ChineseTitle
          },
          entries:[]
        }
        for(let entry of group.menu_entry){
          let entriesObject = {
            fr:{
              id:entry.wall.data.id,
              title: entry.wall.data.attributes.Title 
            }
          }
          for(let local of entry.wall.data.attributes.localizations.data){
            entriesObject[local.attributes.locale] = {
              id:local.id,
              title : local.attributes.Title
            }
          }
          items.entries.push(entriesObject)
        }
        this.navLangArray.push(items)
      }
    }
    
  };
</script>

<template>
    <div class="menu">
      <div class="lang_switcher">
          <button v-for="langs in Object.keys(navLangArray[0].titles)" :class="langs" v-bind:class="{ langActive: lang==langs }" @click="changeLang(langs)">{{langs.replace('zh','cn').toUpperCase()}}</button>
      </div>
      <div class="navigation">
          <button class="prev" @click="arrowNav(-1)"><img src="/assets/img/arrow.svg"/></button>
          <button class="next" @click="arrowNav(1)"><img src="/assets/img/arrow.svg"/></button>    
      </div>
      <div class="menu_content">
        <ul id="navigation_container">
          <li class="navigation_content">
              <div class="group_title">
            </div>
            <ul class="navigation_sub_container">
              <li :groupindex="-1" :itemindex="-1" class="navigation_sub_content">
                <a targetID="0" class="active" @click="changeIndex(0)">
                  <span v-if="lang != 'zh'" >Home</span>
                  <span v-else>首页</span>
                </a>
              </li>
            </ul>
          </li>
          <li v-for="(nav,groupindex) in navLangArray" class="navigation_content">
            <div v-if="nav.entries[0][lang] != undefined" class="group_title">
                  {{ nav.titles[lang] }}
            </div>
            <ul  v-if="nav.entries[0][lang] != undefined" class="navigation_sub_container">
              <template v-for="(data,index) in nav.entries" >
                <li :groupindex="groupindex" :itemindex="index" class="navigation_sub_content" v-if="data[lang] != undefined">
                  <a :targetid="data[lang].id" :groupName="nav.titles.fr" @click="changeIndex(data[lang].id,nav.titles.fr)">{{data[lang].title}}</a>
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
    margin-top: 30px;
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
    position: absolute;
    left: 100px;
    top: -30px;
  }
  .lang_switcher button{
    background-color: rgba(0,0,0,0); /* Green */
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-style: solid;
    border-color: white;
    border-width: 2px 1px;
    font-family: 'Futura Std';
    font-weight: 600;
    cursor:pointer;
    font-size: 1rem;

  }
  .lang_switcher button:first-child{
    border-left : 2px solid white;
    width: 31px;
  }
  .lang_switcher button:last-child{
    border-right : 2px solid white;
  }
  .lang_switcher .langActive{
    background-color: white;
    color: black;
  }

  .navigation{
    display:inline-block;
    position: absolute;
    left : 85px;
  }
  .navigation button{
    background-color: rgba(0,0,0,0); /* Green */
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    width: 30px;
    height: 30px;
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
      height: 100dvh;
      width: 100%;
      z-index: 99;
      align-items: center;
      justify-content: center;
      display: none;
      top : 0;
      margin-top : 0;
      
    }

    .lang_switcher{
      position: absolute;
      bottom : 10px;
      left : 10px;
      margin: 0;
      z-index: 101;
      display: none;
      top : auto;
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
    #navigation_container:before{
      height: 100%;
    }
  }
  @media screen and (max-width: 500px) {
    .group_title{
      font-size: 1.1rem;
    }
  }
  @media screen and (max-height: 700px) {
    .lang_switcher.nav_active{
      bottom : 0;
      left: 0;
      padding: 10px;
      background-color: black;
      width: calc( 100% - 10px );
    }
    .menu_content.nav_active{
      overflow-y: auto;
      align-items: flex-start;
    }
    #navigation_container{
      height: fit-content;
      margin: 45px 0;
    }
  }
</style>
