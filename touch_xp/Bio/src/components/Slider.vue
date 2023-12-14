<script setup>
  import { ref,watch,nextTick,onMounted } from 'vue'
  import { gsap,TweenLite } from 'gsap';
  import Draggable from "gsap/Draggable"; 
  gsap.registerPlugin(Draggable)
  const emit = defineEmits(['controller:position','controller:veille'])

  const props = defineProps(['veille'])
  const knob = ref(null)
  const knobInstance = ref(null)
  const markerPos = [
    37,130,306,482,659
  ]
  let currentPos = 0;

//when the user drags the knob, we must update the scroll position. We're using the special scrollProxy object of Draggable because it allows us to overscroll (normal browser behavior won't allow it to scroll past the top/bottom). 
function onRotateKnob(e) {  
    for(let i = 0;i<markerPos.length;i++){
      let dist = Math.abs((markerPos[i])-knobInstance.value.y)
      if(dist< 20 && currentPos != i){
        knobInstance.value.enabled(false)
        setTimeout(() => {
          knobInstance.value.enabled(true)
        }, 200);
        currentPos = i;
      }
    }
}

//if the user flicks/spins/drags with momentum, a tween is created, but if the user interacts again before the tween is done, we must kill that tweens (so as not to fight with the user). This method kills any tweens of the knob or the content's scrollProxy.
function killTweens() {
  TweenLite.killTweensOf([knob.value]);
}
function dragEnd() {
    let pos = 0;
    let oldCalc = 360;
    for(let i = 0;i<markerPos.length;i++){
      let dist = Math.abs((markerPos[i])-knobInstance.value.y)
      if( dist < oldCalc) pos = i; oldCalc = dist
    }
    emit('controller:position',pos)
    TweenLite.to(knob.value, 0.35 ,{
      y:markerPos[pos],
      onUpdate:()=>{
        knobInstance.value.update();
      },

    });
}

function resetPosition(){
  TweenLite.to(knob.value, 1 ,{
      y:37,
      onEnd:()=>{
        knobInstance.value.update();
        currentPos = 0;
        emit('controller:position',0)
      }
    });
    emit('controller:veille')
}
function changePosition(direction){
  let newPos = currentPos+direction;
  if(newPos < 0 || newPos > markerPos.length-1) return
  TweenLite.to(knob.value, 1 ,{
      y:[markerPos[newPos]],
      onEnd:()=>{
        knobInstance.value.update();
        currentPos = newPos;
        emit('controller:position',newPos)
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
    type:"y",
    edgeResistance:1,
    inertia:true,
    bounds: {minY:37, maxY:665},
    onDragStart:killTweens,
    onDrag: onRotateKnob,
    onDragEnd:dragEnd
  });
  knobInstance.value = Draggable.get(knob.value);
})


</script>

<template>
  <div id="knobContainer">
    <div class="up button" @click="changePosition(-1)"></div>
    <div class="down button"  @click="changePosition(1)"></div>
    <div id="back">

      <img src="../assets/slider_back.svg" alt="">
      <div class="pulse"></div>

    </div>
      <div id="knob" ref="knob">
      </div>
  </div>


</template>

<style scoped>
  #knobContainer{
    display: block;
    width: 67px;
    height: 729px;
  }

  #knob{
    width: 34px;
    height: 34px;
    border-radius: 100%;
    background: linear-gradient(152deg, #FFF 10.82%, #585858 211.07%);
    position: absolute;
    z-index: 55;
    stroke:white 1px solid;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.20));
    left: calc( 50% - 17px );
  }
  #back{
    flex-shrink: 0;
    position: absolute;
    top : 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    background-size: contain;
    backdrop-filter: blur(6.5px);
    z-index: 10;
    border-radius: 19px;
    width: 67px;
    height: 729px;
    pointer-events: none;
  }
  #back img{
    width: 67px;
    height: 729px;
  }
  .button{
    position: absolute;
    left: 0;
    width: 100%;
    height: 30px;
    z-index: 500;
  }
  .up{
    top : 0;
  }
  .down{
    bottom: 0px;
  }
  .pulse{
    background-color: #55BE9B;
    width: 100%;
    height: 100%;
    position: absolute;
    top:50%;
    left: 50%;
    z-index: -5;
    opacity: 0.25;
    border-radius: 19px;
    animation: pulse 2s infinite ease;
    transform:  translate(-50%,-50%);
  }
  @keyframes pulse {
    0% {
      transform: translate(-50%,-50%) scale(1,1);
      opacity: 0.4;
    }

    100% {
      transform: translate(-50%,-50%) scale(1.5,1.05);
      opacity: 0;
    }
  }
</style>
