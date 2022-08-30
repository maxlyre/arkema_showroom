<script>
  import WidgetBrands from "./Widget_Brands.vue"
  import WidgetQuizz from "./Widget_Quizz.vue"
  import WidgetArticles from "./Widget_Articles.vue"
  export default {
    components:{
        WidgetBrands,WidgetQuizz,WidgetArticles
    },
    props:{
      content: {
        type: Object,
        required: true,
      }
    },
    data() {
      return {
      }
    },
    computed:{
    }
  };
</script>
<template>
  <div>
    <template v-for="(widget,index) in content">
      <li v-if="widget.__typename == 'ComponentTableComponentsWidgets'">
       <WidgetBrands 
          :content="widget"
          :index = index
        />

      </li>
      <li v-else-if="widget.__typename == 'ComponentTableComponentsQuizz'">
        <WidgetQuizz
          :content="widget"
          :index = index
        />
      </li>
      <li v-else-if="widget.__typename == 'ComponentTableComponentsArticles'">
        <WidgetArticles
          :content="widget"
          :index = index
       />
      </li>
    </template>

  </div>

</template>

<style scope>
  
</style>
