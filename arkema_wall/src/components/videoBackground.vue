<script>
  export default {
    props:{

      content: {
        type: Object,
        required: true,
      },
      homeURL :{
        type: Object
      },
      group :{
        type: String
      }
    },
    data() {
      return {
        url : null,
        isTransition : false,
      }
    },
    methods:{

    },
    mounted(){
      console.log(this.group)
      console.log(this.content)
      this.url = this.homeURL.data.attributes.url
      
    },
    updated(){
      console.log(this.content)
    },
    watch:{
      group(newValue,oldValue){
        console.log(newValue)
        let u = null;
        if(this.group == null){
          u =this.homeURL.data.attributes.url;
        }else{
          for (const groupe of this.content) {
            if(groupe.Title == this.group){
              if(oldValue == null){
                u = groupe.videoTransition.data.attributes.url
                this.isTransition = true;
              }else{
                u = groupe.videoBackground.data.attributes.url
              }
              
            }
          }
        }
        this.url = u;
      }
    }
  };
</script>

<template>
    <div class="videoBackground">
      <video :src="this.$APIURL+this.url" loop muted playsinline autoplay></video>
    </div>
</template>

<style scoped>
  .videoBackground{
    position: fixed;
    top : 0;
    left : 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  video{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

</style>
