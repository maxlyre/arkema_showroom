<script setup>
  import { ref,watch,nextTick,onMounted } from 'vue'
  import { gsap,TweenLite } from 'gsap';
  import Draggable from "gsap/Draggable"; 
  gsap.registerPlugin(Draggable)
  const emit = defineEmits(['controller:position','controller:veille'])

  const props = defineProps(['veille'])
  const knob = ref(null)
  const knobInstance = ref(null)


//when the user drags the knob, we must update the scroll position. We're using the special scrollProxy object of Draggable because it allows us to overscroll (normal browser behavior won't allow it to scroll past the top/bottom). 
function onRotateKnob(e) {  
  emit('controller:position',knobInstance.value.rotation / 360)
}

//if the user flicks/spins/drags with momentum, a tween is created, but if the user interacts again before the tween is done, we must kill that tweens (so as not to fight with the user). This method kills any tweens of the knob or the content's scrollProxy.
function killTweens() {
  TweenLite.killTweensOf([knob.value]);
}
function dragEnd() {
    let interval = 360 / 5
    let deg = 0;
    let oldCalc = 360;
    for(let i = 0;i<5;i++){
      let dist = Math.abs((interval * i)-knobInstance.value.rotation)
      if( dist < oldCalc) deg = i; oldCalc = dist
    }
    TweenLite.to(knob.value, 0.35 ,{
      rotation:deg*interval,
      onUpdate:()=>{
        knobInstance.value.update();
        onRotateKnob();
      }
    });
}

function resetPosition(){
  TweenLite.to(knob.value, 1 ,{
      rotation:0,
      onUpdate:()=>{
        knobInstance.value.update();
        onRotateKnob();
      }
    });
    emit('controller:veille')
}

watch(()=>props.veille,async (veille)=>{
    await nextTick()
    if(veille) resetPosition();
  })

onMounted(()=>{
  //create the knob Draggable
  Draggable.create(knob.value, {
    type:"rotation",
    edgeResistance:1,
    inertia:true,
    bounds:{minRotation:0, maxRotation:360},
    onDragStart:killTweens,
    onDrag: onRotateKnob,
    onDragEnd:dragEnd
  });
  knobInstance.value = Draggable.get(knob.value);
})


</script>

<template>
  <div id="knobContainer">
    <div class="pulse"></div>
    <div id="back">

    </div>
    <div id="knobBG">
      <div id="knob" ref="knob">
        <img src="../assets/fleche.svg" alt="">
      </div>
    </div>
  </div>


</template>

<style scoped>
  #knobContainer{
    display: block;
  }
  #knobBG{
    z-index: 20;
    position: relative;
    width: 18rem;
    height: 18rem;
    flex-shrink: 0;
    border-radius: 100%;
    border: 1px solid #FFF;
    background: linear-gradient(157deg, #55BE9B 4.81%, #1E4E3E 92.42%);
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.20);
  }
  #knob{
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: linear-gradient(157deg, rgba(85, 190, 155, 0.20) 4.81%, rgba(30, 78, 62, 0.20) 92.42%);

  }
  #knob img{
    display: block;
    margin: auto;
    padding-top: 1rem;
  }
  #back{
    width: 21rem;
    height: 21rem;
    flex-shrink: 0;
    position: absolute;
    top : 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    background-image: url('../assets/back.svg');
    background-size: contain;
    backdrop-filter: blur(6.5px);
    z-index: 10;
    border-radius: 100%;
  }
  .pulse{
    background-color: #55BE9B;
    width: 21rem;
    height: 21rem;
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
      transform: translate(-50%,-50%) scale(1.15);
      opacity: 0;
    }
  }
</style>
