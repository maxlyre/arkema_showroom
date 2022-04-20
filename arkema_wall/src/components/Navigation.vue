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
        lang:"en",
      }
    },
    methods:{
        changeIndex(index){
          document.querySelector('.active').classList.remove("active")
          this.$emit("changeID",index);
          document.querySelector('a[targetId="'+index+'"]').classList.add("active")
        },
        arrowNav(direction){
          const divs = document.querySelectorAll(".menu li li a")
          function getClass (a){
            return a.classList.contains('active')
          }
          let id = Array.from(divs).findIndex(getClass);
                    console.log(id)

          id += direction;

          if(id > divs.length-1){
            id = 0;
          }else if(id<0){
            id = divs.length-1;
          }
          this.$emit("changeID",id);
          document.querySelector('.active').classList.remove("active")
          divs[id].classList.add("active")
          
        },
        changeLang(lang){
          this.lang = lang;
        },
    },
    mounted(){
      console.log(this.content)
    }
  };
</script>

<template>
    <div class="menu">
      <ul id="example-1">
        <li>
          <ul>
            <li >
              <a targetID="0" class="active">Home</a>
            </li>
          </ul>
        </li>
        <li v-for="nav in content">
          <div v-if="lang=='fr'" class="group_title">
                {{ nav.Title }}
          </div>
          <div v-else class="group_title">
                {{ nav.EnglishTitle }}
          </div>
          <ul>
            <template v-for="data in nav.walls_items.data">
              <li v-if="data.attributes.localizations.data.length>0 || lang=='fr'">
                <a  v-if="lang=='fr'" :targetID="data.id" @click="changeIndex(data.id)">{{data.attributes.Title}}</a>
                <a  v-else :targetID="data.attributes.localizations.data[0].id" @click="changeIndex(data.attributes.localizations.data[0].id)">{{data.attributes.localizations.data[0].attributes.Title}}</a>
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
