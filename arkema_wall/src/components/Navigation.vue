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
          
        }
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
          {{ nav.Title }}
          <ul>
            <li v-for="data in nav.walls_items.data">
              <a :targetID="data.id" @click="changeIndex(data.id)">{{data.attributes.Title}}</a>
            </li>  
          </ul>
        </li>
      </ul>
      <div class="navigation">
          <button class="prev" @click="arrowNav(-1)">Prev</button>
          <button class="next" @click="arrowNav(1)">Next</button>    
      </div>
    </div>
</template>

<style scoped>

</style>
