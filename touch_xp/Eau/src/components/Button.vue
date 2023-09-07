<script setup>
  import { ref,onMounted, watch, nextTick } from 'vue'
  const emit = defineEmits(['controller:flush'])
  const props = defineProps(['flush'])
  const flushActivated = ref(false)
  function flush(){
    emit('controller:flush',true)
    flushActivated.value = true;
  }
  watch(()=>props.flush,async (flush)=>{
    await nextTick()
    if(!flush) flushActivated.value = false;
  })


</script>

<template>
  <div id="buttonContainer">
    <div class="pulse"></div>
    <div id="back">
    </div>
    <div id="button" @pointerup="flush" :class="[props.flush ? 'actif' : '']">
     <p>FLUSH</p>
    </div>
  </div>


</template>

<style scoped>
  #buttonContainer{
    display: block;
    position: absolute;
    z-index: 999;
  }
  p{
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 600;
    color: white;
    position: absolute;
    left: 50%;
    top : 50%;
    transform: translate(-50%,-50%);
    margin: 0;
    pointer-events: none;
  }
  #button{
    width:4.125rem;
    height: 4.125rem;
    border: 1px solid white;
    position: relative;
    z-index: 20;
    border-radius: 100%;
    background:linear-gradient(328deg, rgba(85, 190, 171, 0.80) 18.04%, #28285F 62.04%, rgba(40, 40, 95, 0.20) 104.25%);
    background-size: 400%;
    background-position: 0%;
    transition: background-position 0.1s ease;
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.20);
  }
  #button.actif{
    background-position: 100%;
  }
  #back{
    width:5.625rem;
    height: 5.625rem;
    flex-shrink: 0;
    position: absolute;
    top : 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    background-color: rgba(80,190,155,0.2);
    backdrop-filter: blur(6.5px);
    z-index: 10;
    border-radius: 100%;
    border: 1px solid rgba(80,190,155,0.7);
  }
  .pulse{
    background-color: #55BE9B;
    width:5.625rem;
    height: 5.625rem;
    position: absolute;
    top:50%;
    left: 50%;
    z-index: -5;
    opacity: 0.25;
    border-radius: 100%;
    animation: pulse 2s infinite ease;
    transform:  translate(-50%,-50%) scale(0.6);
  }
  @keyframes pulse {
    0% {
      transform: translate(-50%,-50%) scale(0.6);
      opacity: 1;
    }

    100% {
      transform: translate(-50%,-50%) scale(1.30);
      opacity: 0;
    }
  }
</style>
