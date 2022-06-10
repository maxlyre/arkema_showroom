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
      console.log(this.content)
      this.app = initPlaycanvas();
        var app = pc.Application.getApplication();
        let url = this.$APIURL+this.content.PlanetJson.data.attributes.url;
        app.on("start", function () {
            // get the root of the scene.
            fetch(url).then(function(response) {
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
  <div :class="['colonne', 'col-sm-'+content.column, 'col-xs-12']" class="planete">
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
