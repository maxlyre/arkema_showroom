<script setup>
  import { ref} from 'vue'

  const props = defineProps(['datas','currentID'])
</script>

<template>
        <header>
          <div class="en">
            <h1 v-html="props.datas.phases[props.currentID].text.en.title"></h1>
            <p v-html="props.datas.phases[props.currentID].text.en.cta"></p>
          </div>
          <div class="fr">
            <h1 v-html="props.datas.phases[props.currentID].text.fr.title"></h1>
            <p v-html="props.datas.phases[props.currentID].text.fr.cta"></p>
          </div>
        </header>
</template>

<style scoped>
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
    line-height: 1.3;
  }
  header .en:after{
    content:"";
    display: block;
    margin: 1rem auto;
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

  .fade-enter-active{
    transition: opacity 0.35s ease;

  }
  .fade-leave-active {
    transition: opacity 0.35s ease 0.35s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
