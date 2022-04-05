<script>
  import {initPlaycanvas} from '../assets/planete_start.js'
  export default {
    components: {
    },
    props:{
      content: {
        type: Object,
        required: true,
      }
    },
    data() {
      return {
        app :undefined
      }
    },
    computed:{
    },
    mounted(){
      this.app = initPlaycanvas();
              var app = pc.Application.getApplication();
        app.on("start", function () {
            // get the root of the scene.
            fetch("http://127.0.0.1:1337/uploads/arkj_6d132c6ac2.json").then(function(response) {
                // Convert to JSON
                return response.json();
            }).then(function(j) {
                app.fire("set:json", j)
            }).catch(function(error) {
                console.log('Request failed', error)
            });
            
            // do other stuff here
        });
    },
    unmounted(){
      
        this.app.app.destroy()
        this.app.app = undefined;
        this.app.device = undefined;
    }

  };
</script>
<template>
  <div :class="['colonne', 'col-md-'+content.column]" class="planete">
    <canvas id="planet_canvas"></canvas>
  </div>
</template>

<style scoped>
  .planete{
    position: relative
  }
  canvas{
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
