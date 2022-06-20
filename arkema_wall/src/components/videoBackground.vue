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
        urls : [null,null],
        isTransition : false,
        videoElement : null,
        activeVideo : 1,
        isReady :[true,true],
        activeGroup : null,
        transitionTimeout : null,
        pauseTimeout : null
      }
    },
    methods:{
      //Change the video URL and set ready state
      changeVideo(url){
        let id = this.getInactiveId();
        this.urls[id] = url;
        this.videoElement[id].load();
        this.isReady[id] = false;
      },

      //If video has loaded
      videoReady(id){
        //If video is not a loop
        if(this.isReady[id] == false){
          this.setTransition(true) //Set transition fade
          this.videoElement[id].style.opacity = 1;
          this.videoElement[this.activeVideo].style.opacity = 0;
          this.videoElement[id].play();
          this.activeVideo = id;
          
          //Clear Timeout & pause video after 500ms
          clearTimeout(this.pauseTimeout)
          this.pauseTimeout = setTimeout(()=>{
            let id = this.getInactiveId();
            this.videoElement[id].pause();
            this.videoElement[id].currentTime = 0;
            this.urls[id] = "";
          },500)

          //If transition, load video after fade on other balise
          if(this.isTransition){
            clearTimeout(this.transitionTimeout)
            this.transitionTimeout = setTimeout(()=>{
              let id = this.getInactiveId();
              this.urls[id] = this.activeGroup.videoBackground.data.attributes.url;
              this.videoElement[id].load();
            },500)
          }
          //Change ready state 
          this.isReady[id]=true;
        }

      },

      //If video ended
      videoEnded(id){
        //Reload video if loop
        if(!this.isTransition){
          this.videoElement[id].play();
        }else{
          //Change video if transition from home
          let id = this.getInactiveId();
          this.setTransition(false)
          this.videoElement[id].style.opacity = 1;
          this.videoElement[this.activeVideo].style.opacity = 0;
          this.videoElement[id].play();
          this.isReady[id]=true;
          this.activeVideo = id; 
          this.isTransition = false;
        }
      },
      //Get inactive ID
      getInactiveId(){
        let id = 0;
        if(this.activeVideo == 0){
          id = 1;
        } 
        return id;
      },
      //Change CSS transition value
      setTransition(transition){
        let id = this.getInactiveId();
        if(transition){
          this.videoElement[id].style.transition = "opacity 0.5s linear"
          this.videoElement[this.activeVideo].style.transition = "opacity 0.5s linear"
        }else{
          this.videoElement[id].style.transition = "opacity 0s linear"
          this.videoElement[this.activeVideo].style.transition = "opacity 0s linear"
        }
      }
    },
    mounted(){
        this.videoElement = document.querySelectorAll('.videoBackground video'); //Get video elements
        //Set can play event listener
        this.videoElement[0].oncanplay=()=>{this.videoReady(0)};
        this.videoElement[1].oncanplay=()=>{this.videoReady(1)};
        //Set on ended event listener
        this.videoElement[0].onended=()=>{this.videoEnded(0)};
        this.videoElement[1].onended=()=>{this.videoEnded(1)};

        //Set video on start
        this.urls[0] = this.homeURL.data.attributes.url;
        this.videoElement[0].load();
        this.isReady[0] = false;
    },
    watch:{
      //On group var change
      group(newValue,oldValue){
        let u = null;
        //Is home ?
        if(newValue == null){
          u =this.homeURL.data.attributes.url;
        }else{
          //find which group
          for (const groupe of this.content) {
            if(groupe.Title == newValue){
              if(oldValue == null){
                u = groupe.videoTransition.data.attributes.url
                this.isTransition = true;
                this.activeGroup = groupe;
              }else{
                u = groupe.videoBackground.data.attributes.url
              }
              
            }
          }
        }
        //Change video url fonct
        this.changeVideo(u)
      }
    }
  };
</script>

<template>
    <div class="videoBackground">
      <video :src="this.$APIURL+this.urls[0]" muted playsinline></video>
      <video :src="this.$APIURL+this.urls[1]" muted playsinline style="opacity : 0;"></video>
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
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    transition: opacity 0.5s linear;
  }

</style>
