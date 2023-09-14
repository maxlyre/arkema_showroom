<script setup>
  import { ref,watch,nextTick, onMounted,computed   } from 'vue'
  import TextContent from './TextContent.vue'
  import HeaderContent from './HeaderContent.vue'
  const props = defineProps(['datas','currentID'])
</script>

<template>
    <div class="text_container">
        <HeaderContent
          :key="props.currentID"
          :datas = props.datas
          :currentID = props.currentID
        />
      <Transition name="fade" mode="out-in">
        <TextContent
          :key="props.currentID"
          :textfr="props.datas.phases[props.currentID].text.fr.text"
          :texten="props.datas.phases[props.currentID].text.en.text"
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

</style>
