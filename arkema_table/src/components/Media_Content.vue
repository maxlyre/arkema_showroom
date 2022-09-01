<script>
  export default {
    props:{
      content: {
        type: [Object,String],
      },
    },
    data() {
      return {
        isOverflow:false,
        widgetContainer : null
      }
    },
    methods:{
      isOverflown(element) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
      },
      scroll(direction){
        this.widgetContainer.scrollTop = this.widgetContainer.scrollTop + 300*direction;
      }
    },
    mounted(){
      const sizeObserver = new ResizeObserver(entries => {
        this.isOverflow = this.isOverflown(entries[0].target);
        
      });
      this.widgetContainer = document.querySelector('.video');
      sizeObserver.observe(this.widgetContainer);
    }
  };
</script>
<template>
  <div class="media_content">
    <div class="media_container">
      <div class="video" 
      v-if="typeof this.content == 'object'">
        <div class="title" v-html="content.Title.replaceAll('p>','h2>').replaceAll('/uploads',this.$APIURL+'/uploads')"></div>
        <div  class="subtitle" v-html="content.Subtitle"></div>
        <ul>
          <li class="video_list" v-for="video,index in content.Video_slide">
            <h3>{{index}}. {{video.Title}}</h3>
            <img :src="this.$APIURL+video.Poster.data.attributes.url" alt="" @click="$emit('showMedia',video.Video.data.attributes.url)">
            <div class="text" v-html="video.Subtitle"></div>
          </li>
        </ul>
        <div  class="call" v-html="content.Call_to_action"></div>
      </div>
    </div>
    <div class="control_widget" :class="isOverflow ? 'control_active' : '' ">
      <div class="next arrow" @click="scroll(1)"><span>next</span></div>
      <div class="prev arrow" @click="scroll(-1)"><span>prev</span></div>
    </div>
  </div>
</template>

<style>
  .media_content{
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #188D6D 0%, #55BE9B 100%);
    z-index: 100;
    
    border-top-left-radius: 80px 80px;
    overflow: hidden;

  }
  .media_container{
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding-bottom:60px;


  }
  .video{
    padding: 3rem 2rem;
    overflow: auto;
    height: 100%;
    scroll-behavior: smooth;
  }
  .media_content ul{
    margin-left: 0;
    padding: 0;
  }
  .media_content li{
    list-style: none;
    padding: 0;
    margin-left: 0;
  }
  .media_content .title h2{
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 120%;
    margin-bottom : 1.3rem;
  }
  .media_content .subtitle{
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 120%;
    margin-bottom : 2.5rem;
  }
  .media_content .video_list h3{
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 120%;
    margin-bottom : 1.3rem;
  }
  .media_content .video_list img{
    cursor:pointer;
  }
  .media_content .video_list .text{
    font-weight: 500;
    font-size: 0.85rem;
    line-height: 120%;
    margin-top : 0.8rem;
  }
  .media_content .video_list{
    margin-bottom: 2.5rem;
  }
  .media_content .call{
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 125%;
    margin-bottom : 1.3rem;
  }

  .media_content .control_widget{
      position : absolute;
      left:50%;
      transform:translateX(-50%);
      bottom : 0;
      padding-left: 15px;
      padding-right: 15px;
      display: none;
    }
   .media_content  .control_widget.control_active{
      display : block;
    }
    .media_content .control_widget .arrow{
      width: 50px;
      height: 50px;
      display: inline-block;
      cursor:pointer;
      
    }
    .media_content .control_widget .arrow span{
      font-family: swiper-icons;
      font-size: 1.8rem;
      text-transform: none!important;
      letter-spacing: 0;
      font-variant: initial;
      line-height: 1;
      transform: translate(-50%,-50%) rotate(90deg);
      display: block;
      position : absolute;
      left: 50%;
      top : 50%;

    }
</style>
