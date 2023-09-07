<script setup>
  import { ref} from 'vue'

  const props = defineProps(['text'])
</script>

<template>
    <div class="text_content" v-if="props.text != null">
      <div class="en">
        <h3 v-html="props.text.en.title"></h3>
        <p v-html="props.text.en.text"></p>
      </div>
      <div class="fr">
        <h3 v-html="props.text.fr.title"></h3>
        <p v-html="props.text.fr.text"></p>
      </div>
    </div>

</template>

<style scoped>
  .text_content{
    position: absolute;
    top : 45%;
    left: 4rem;
  }
  .text_content:after{
    content:"";
    display: block;
    width: 100%;
    height: 350px;
    background: rgba(0, 0, 0, 0.20);
    position: absolute;
    top: 0;
    z-index: -1;
    filter: blur(36px);
  }
  .en h3{
    color: #FFF;
    font-size: 1.40rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .en p{
    color: #FFF;
    font-size: 0.85rem;
    font-weight: 600;
    line-height: 1.3;
    margin-top: 0;
  }

  .en:after{
    content:"";
    display: block;
    margin: 1.188rem 0;
    width: 17rem;
    height: 1px;
    background-color: white;
  }

  .fr h3{
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 600;
    margin-top : 0;
    margin-bottom: 10px;
  }
  .fr p{
    margin-top: 0;
    font-size: 0.80rem;
    font-style: italic;
    font-weight: 500;
  }
</style>
