<script setup>
  import { ref} from 'vue'

  const props = defineProps(['text'])
</script>

<template>
    <div class="text_content">
      <div class="en" :class="[props.text.line ? 'line':'']" :style="{top : props.text.en.y+'%', left : props.text.en.x+'%' }">
        <h3 v-html="props.text.en.title"></h3>
        <p v-html="props.text.en.text"></p>
      </div>
      <div class="fr" :style="{top : props.text.fr.y+'%', left : props.text.fr.x +'%'}">
        <h3 v-html="props.text.fr.title"></h3>
        <p v-html="props.text.fr.text"></p>
      </div>
    </div>

</template>

<style scoped>
  .en{
    position: absolute;
  }
  .fr{
    position: absolute;
  }
  /* .text_content:after{
    content:"";
    display: block;
    width: 100%;
    height: 350px;
    background: rgba(0, 0, 0, 0.20);
    position: absolute;
    top: 0;
    z-index: -1;
    filter: blur(36px);
  } */
  .en h3{
    color: #FFF;
    font-size: 1.30rem;
    font-weight: 700;
    margin-bottom: 10px;
    margin-top : 0;
  }
  .en p{
    color: #FFF;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.3;
    margin-top: 0;
  }

  .en.line:after{
    content:"";
    display: block;
    margin: 1.188rem 0;
    width: 17rem;
    height: 1px;
    background-color: white;
  }

  .fr h3{
    font-size: 1.1rem;
    font-style: italic;
    font-weight: 600;
    margin-top : 0;
    margin-bottom: 10px;
    color: #55BE9B;
  }
  .fr p{
    margin-top: 0;
    font-size: 0.70rem;
    font-style: italic;
    font-weight: 500;
    color: #55BE9B;
  }
</style>
