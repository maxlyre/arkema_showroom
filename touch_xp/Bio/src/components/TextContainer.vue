<script setup>
  import { ref,watch,nextTick, onMounted,computed   } from 'vue'
  import TextContent from './TextContent.vue'

  const props = defineProps(['datas','currentVideo','ratio'])
  const emit = defineEmits([''])
  const text = computed(() => {
      if(props.currentVideo == 0) return null

      return props.datas.phases[props.currentVideo-1].text
  })
  onMounted(()=>{

  
  })
  console.log(props.datas,props.currentVideo)
</script>

<template>
    <div class="text_container">
      <Transition name="fade" mode="out-in">
        <header v-if="props.currentVideo === props.datas.header.showOnID">
          <div class="en">
            <h1 v-html="props.datas.header.en.title"></h1>
            <p v-html="props.datas.header.en.cta"></p>
          </div>
          <div class="fr">
            <h1 v-html="props.datas.header.fr.title"></h1>
            <p v-html="props.datas.header.fr.cta"></p>
          </div>
        </header>
      </Transition>
      <Transition name="fade" mode="out-in">
        <TextContent
          v-if="text != null"
          :key="text.en.title"
          :text="text"
          :ratio = "props.ratio"
        />
      </Transition>
    </div>

</template>

<style scoped>
  .text_container{
    position: absolute;
    top : 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    width: auto;
    height: 100%;
    z-index: 5000;
    aspect-ratio: 9 / 16;
  }
  .ratio-9 .text_container{
    aspect-ratio: 9 / 16;
  }
  .ratio-10 .text_container{
    aspect-ratio: 10 / 16;
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
    color: #55BE9B;
    text-align: center;
    font-size: 1.625rem;
    font-weight: 300;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 0.75rem;
    font-style: italic;
  }
  header .fr p{
    color: #55BE9B;
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
