<script setup>
  import { ref,watch,nextTick, onMounted,computed   } from 'vue'
  import TextContent from './TextContent.vue'

  const props = defineProps(['datas','currentVideo'])
  const emit = defineEmits([''])
  const text = computed(() => {
    if(props.currentVideo.type == 'clip'){
      return props.datas.cycle[props.currentVideo.id].text
    }else if(props.currentVideo.type == 'flush'){
      let ind = 0;
      for(let i = props.datas.flush.text.length -1; i >= 0; i--){
        if(props.currentVideo.time*1000  > props.datas.flush.text[i].timecode) {
          ind = i
          break;
        }
      }
      return props.datas.flush.text[ind]
    }else{
      return null
    }
    
  })
  onMounted(()=>{

  
  })
</script>

<template>
    <div class="text_container">
      <Transition name="fade" mode="out-in">
        <header v-if="props.currentVideo.id === props.datas.header.showOnCycle">
          <div class="en">
            <h1 v-html="props.datas.header.en.title"></h1>
            <p v-html="props.datas.header.en.subtitle"></p>
          </div>
          <div class="fr">
            <h1 v-html="props.datas.header.fr.title"></h1>
            <p v-html="props.datas.header.fr.subtitle"></p>
          </div>
        </header>
      </Transition>
      <Transition name="fade" mode="out-in">
        <TextContent
          :key="text.en.title"
          v-if="props.currentVideo.type == 'clip' || props.currentVideo.type == 'flush'"
          :text="text"
        />
      </Transition>
    </div>

</template>

<style scoped>
  .text_container{
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 5;
    color: white;
  }
  header{
    position: absolute;
    top : 0;
    width: 100%;
    margin-top: 4rem;
  }
  header:after{
    content:"";
    display: block;
    width: 100%;
    height: 400px;
    background: rgba(0, 0, 0, 0.20);
    position: absolute;
    top: 0;
    z-index: -1;
    filter: blur(36px);
  }
  header .en h1{
    color: #FFF;
    text-align: center;
    font-size: 2.35rem;
    font-weight: 300;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 0.75rem;
  }
  header .en p{
    color: #FFF;
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 0;
    line-height: 1.3;;
  }
  header .en:after{
    content:"";
    display: block;
    margin: 1.188rem auto;
    width: 28.125rem;
    height: 1px;
    background-color: white;
  }
  header .fr h1{
    color: #FFF;
    text-align: center;
    font-size: 1.625rem;
    font-weight: 300;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 0.75rem;
    font-style: italic;
  }
  header .fr p{
    color: #FFF;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: 0;
    line-height: 1.3;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
