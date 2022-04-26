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
        changeIndex(index){
          let active = document.querySelector('.active');
          if(active != null){
            active.classList.remove("active")
          }
          console.log(index)
          this.$emit("changeID",index);
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
          this.$emit("changeID",divs[id].getAttribute('targetid'));
          let active = document.querySelector('.active');
          if(active != null){
            active.classList.remove("active")
          }
          divs[id].classList.add("active")
          
        },
        changeLang(lang){
          let active = document.querySelector('.active');
          let newIndex = 0;
        console.log(active)
          if(active != null && active.getAttribute('targetid')!=0){
            let navItem = this.content[active.parentNode.getAttribute('groupindex')].walls_items.data[active.parentNode.getAttribute('itemindex')]
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
    created(){
      console.log(this.content);
      
    },
    updated(){
      document.querySelector('a[targetid="'+this.currentActive+'"]').classList.add("active")
    }
  };
</script>

<template>
    <div class="menu">
      <ul id="example-1">
        <li>
          <ul>
            <li :groupindex="-1" :itemindex="-1">
              <a targetID="0" class="active" @click="changeIndex(0)">Home</a>
            </li>
          </ul>
        </li>
        <li v-for="(nav,groupindex) in content">
          <div v-if="lang=='fr'" class="group_title">
                {{ nav.Title }}
          </div>
          <div v-else class="group_title">
                {{ nav.EnglishTitle }}
          </div>
          <ul>
            <template v-for="(data,index) in nav.walls_items.data" >
              <li :groupindex="groupindex" :itemindex="index" v-if="data.attributes.localizations.data.length>0 || lang=='fr'">
                <a  v-if="lang=='fr'" :targetid="data.id" @click="changeIndex(data.id)">{{data.attributes.Title}}</a>
                <a  v-else :targetid="data.attributes.localizations.data[0].id" @click="changeIndex(data.attributes.localizations.data[0].id)">{{data.attributes.localizations.data[0].attributes.Title}}</a>
              </li>  
            </template>

          </ul>
        </li>
      </ul>
      <div class="navigation">
          <button class="prev" @click="arrowNav(-1)">Prev</button>
          <button class="next" @click="arrowNav(1)">Next</button>    
      </div>
      <div class="lang_switcher">
          <button class="fr" @click="changeLang('fr')">FR</button>
          <button class="en" @click="changeLang('en')">EN</button>    
      </div>
    </div>
</template>

<style scoped>

</style>
