<script>
  import 'swiper/css/navigation';
  export default {
    props:{
      content: {
        type: Object,      
      },
    },
    data() {
      return {
        audioPlayer : null,
        isOverflow:false,
        dataContainer : null,
      }
    },
    computed:{
      mediaUrl(){
        if(this.content.Media.data != null){
          return this.$APIURL+this.content.Media.data.attributes.url
        }
      },
      Title(){
        return this.content.Title.replaceAll("p>","h2>")
      }
    },
    methods:{
      isOverflown(element) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
      },
      scroll(direction){
        this.dataContainer.scrollTop = this.dataContainer.scrollTop + 200*direction;
      },
    },
    mounted(){
      const sizeObserver = new ResizeObserver(entries => {
        this.isOverflow = this.isOverflown(entries[0].target);
        console.log(this.isOverflow)
      });
      this.dataContainer = document.querySelector('.data');
      sizeObserver.observe(this.dataContainer);
    }
  };
</script>
<template>
    <div class="data_container" :class="isOverflow ? 'overflow' : ''">
      <div class="data">
        <div class="text_content">
          <div class="title" v-html="Title.replaceAll('/uploads',this.$APIURL+'/uploads')"></div>
          <div class="text" v-html="this.content.Text"></div>
          <div class="extra" v-html="this.content.Extra_text"></div>
        </div>
        <div class="block_image">
          <img  :src="mediaUrl" alt="" @click="this.$root.showMedia(this.content.Media.data.attributes.url)"/>

        </div>
      </div>
      <div class="control_widget" :class="isOverflow ? 'control_active' : ''">
      <div class="next arrow" @click="scroll(1)"><span>next</span></div>
      <div class="prev arrow" @click="scroll(-1)"><span>prev</span></div>
    </div>
    </div>

</template>

<style>
  .data_container{
    height: 100%;
    width: 100%;
    position: relative;
  }
  .data_container.overflow{
    height: calc(100% - 40px);
  }
  .data{
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 100%;
    overflow: auto;
    scroll-behavior: smooth;
  }
  .data .text_content{
    padding:1.5rem ;
  }
  .data .text{
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 125%;
    margin-bottom: 1.2rem;
    color: #55BE9B;
  }
  .data .extra{
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 120%;
  }
    .data .extra p{
    margin-bottom: 0.5rem;
  }
  .data .title{
    text-align: center;
    margin-bottom: 1.2rem;
    margin-top : 1rem
  }
  .data .title img{
    transform:scale(1.3);
    display: inline-block;
    margin-bottom: 1rem;
    max-width: 65%;
  }

  .data .block_image{
    flex:1;
    overflow: hidden;
  }
  .data .block_image img{
    display: block;
    position: absolute;
    bottom : 0;
  }
  .data .text_content p, .text_content h4{
    margin-bottom: 0.5rem;
  }
  .data .text_content li{
    margin-bottom: 0.2rem;
  }

     .data_container .control_widget{
      position : absolute;
      left:50%;
      transform:translateX(-50%);
      bottom : -30px;
      display: none;
    }
    .data_container .control_widget.control_active{
      display : block;
    }
    .data_container .control_widget .arrow{
      width: 50px;
      height: 16px;
      display: inline-block;
      cursor:pointer;
      
    }
    .data_container .control_widget .arrow span{
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
