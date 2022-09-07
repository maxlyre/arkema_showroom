<script>
  import WidgetBrands from "./Widget_Brands.vue"
  import WidgetQuizz from "./Widget_Quizz.vue"
  import WidgetArticles from "./Widget_Articles.vue"
  import 'swiper/css/navigation';
  export default {
    components:{
        WidgetBrands,WidgetQuizz,WidgetArticles
    },
    props:{
      content: {
        type: Object,
        required: true,
      }
    },
    data() {
      return {
        isOverflow:false,
        widgetContainer : null,
        showElements :false
      }
    },
    methods:{
      isOverflown(element) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
      },
      scroll(direction){
        this.widgetContainer.scrollTop = this.widgetContainer.scrollTop + 200*direction;
      },
      show(active){
        this.showElements = active;
      }
    },
    computed:{
      videoContent(){
        return this.content.find(element => element.__typename == "ComponentTableComponentsVideo")
      }
    },
    mounted(){
      const sizeObserver = new ResizeObserver(entries => {
        this.isOverflow = this.isOverflown(entries[0].target);
        
      });
      this.widgetContainer = document.querySelector('.widget_container');
      sizeObserver.observe(this.widgetContainer);
    }
  };

</script>
<template>
  <div  class="widget" v-show="showElements">
    <!-- {{videoContent}} -->
    <ul class="widget_container">
      <template v-for="(widget,index) in content">
        <li v-if="widget.__typename == 'ComponentTableComponentsWidgets'">
        <WidgetBrands 
            :content="widget"
            :index = index
          />

        </li>
        <li v-else-if="widget.__typename == 'ComponentTableComponentsQuizz'">
          <WidgetQuizz
            :content="widget"
            :index = index
          />
        </li>
        <li v-else-if="widget.__typename == 'ComponentTableComponentsArticles'">
          <WidgetArticles
            :content="widget"
            :index = index
        />
        </li>
      </template>
    </ul>
    <div class="control_widget" :class="[isOverflow ? 'control_active' : '' ,videoContent!=undefined ? 'half':'' ]">
      <div class="next arrow" @click="scroll(1)"><span>next</span></div>
      <div class="prev arrow" @click="scroll(-1)"><span>prev</span></div>
    </div>
    <div class="video_button" 
      v-if="videoContent!=undefined" 
      @click="$emit('showVideo',videoContent)"
    >VIDEOS
    </div>

  </div>

</template>

<style scoped>
    .widget{
      height: 100%;
      border-top-left-radius: 80px 80px;
      overflow: hidden;
      padding-bottom: 75px;
      transition-delay: 0.5s;
    }
    .widget_container{
      margin: 0;
      padding: 3rem 2rem 0 2rem;
      height: 100%;
      overflow:auto;
      scroll-behavior: smooth;
    }
    .widget_container li{
      list-style: none;
    }
    .widget .video_button{
      position:  absolute;
      bottom : 0;
      right: 0;
      font-weight: 700;
      font-size: 1.75rem;
      text-transform: uppercase;
      padding: 1rem 2rem 1rem 3.5rem ;
      
      background: #188D6D;
      border-top: 2px solid #FFFFFF;
      border-left: 2px solid #FFFFFF;
      border-top-left-radius: 80px 80px;
      cursor: pointer;
    }
    .widget .control_widget.half{
      position : absolute;
      left:0;
      bottom : 0;
      padding-left: 15px;
      padding-right: 15px;
      display: none;
      transform: none;
    }
    .widget .control_widget{
      position : absolute;
      left:50%;
      transform:translateX(-50%);
      bottom : 0;
      padding-left: 15px;
      padding-right: 15px;
      display: none;
    }
    .widget .control_widget.control_active{
      display : block;
    }
    .widget .control_widget .arrow{
      width: 50px;
      height: 50px;
      display: inline-block;
      cursor:pointer;
      
    }
    .widget .control_widget .arrow span{
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
