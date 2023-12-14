<script setup>
  import { ref} from 'vue'

  const props = defineProps(['texten','textfr'])
</script>

<template>
    <div class="text_content">
      <div class="en">
        <p v-html="props.texten"></p>
      </div>
      <div class="fr">
        <p v-html="props.textfr"></p>
      </div>
    </div>

</template>

<style scoped>
  .text_content{
    position: absolute;
    
    left: 4rem;
    transform: translateY(-50%);
  }
  .ratio-9 .text_content{
    top : 50.4%;
  }
  .ratio-10 .text_content{
    top : 53%;
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

  .en p{
    color: #FFF;
    font-size: 0.85rem;
    font-weight: 600;
    line-height: 1.3;
    margin-top: 0;
    margin-bottom: 4rem;
  }


 
  .fr p{
    color: #55BE9B;
    margin-top: 0;
    font-size: 0.80rem;
    font-style: italic;
    font-weight: 500;
    line-height: 1.3;
  }
  .fade-enter-active{
    transition: opacity 0.35s ease .10s;

  }
  .fade-leave-active {
    transition: opacity 0.35s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
