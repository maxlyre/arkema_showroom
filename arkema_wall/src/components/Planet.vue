<script>
  import {initPlaycanvas} from '../assets/planete_start.js'
  export default {
    components: {
    },
    props:{
      content: {
        type: Object,
        required: true,
      },
      lang : String
    },
    data() {
      return {
        app :undefined
      }
    },
    computed:{
    },
    methods:{
      csvToArray(str, delimiter = '\t') {
        str.slice(str.indexOf('"') + 1).split('"');
        // slice from start of text to the first \n index
        // use split to create an array from string by delimiter
        let headers = str.slice(0, str.indexOf("\n")).split(delimiter);
        headers[headers.length-1] = headers[headers.length-1].trim();
        // slice from \n index + 1 to the end of the text
        // use split to create an array of each csv value row
        let rows = str.slice(str.indexOf("\n") + 1).split("\n");

        // Map the rows
        // split values from each row into an array
        // use headers.reduce to create an object
        // object properties derived from headers:values
        // the object passed as an element of the array
        const arr = rows.map(function (row) {
          const values = row.split(delimiter);
          const el = headers.reduce(function (object, header, index) {
            let val =  values[index];
            val = val.replace('"', '');
            val = val.replace(/(\r\n|\n|\r)/gm, "");
            // if(header == "employee"){
            //   val = parseInt(val)
            // }
            object[header] = val;

            // console.log(val)
            return object;
          }, {});
          return el;
        });
        
        // return the array
        return arr;
      }
    },
    mounted(){
      
      this.app = initPlaycanvas();
      var app = pc.Application.getApplication();

      let url = this.$APIURL+this.content.PlanetCSV.data.attributes.url;
      var self = this;
      app.on("start", function () {
        fetch(url).then(function(response) {
            // // Convert to JSON
            // return response.json();
            return response.text()
        }).then(function(tsv) {
          let json={
            data : self.csvToArray(tsv)
          } 

          app.fire("set:json", json)
          app.fire("lang:change",self.lang);
        }).catch(function(error) {
            console.log('Request failed', error)
        });
      });

      //   let url = this.$APIURL+this.content.PlanetCSV.data.attributes.url;
      //   app.on("start", function () {
      //       // get the root of the scene.
      //       fetch(url).then(function(response) {
      //           // Convert to JSON
      //           return response.json();
      //       }).then(function(j) {
      //           app.fire("set:json", j)
      //       }).catch(function(error) {
      //           console.log('Request failed', error)
      //       });
            
      //       // do other stuff here
      //   });
    },
    unmounted(){
      
        this.app.app.destroy()
        this.app.app = undefined;
        this.app.device = undefined;
    },
    watch: { 
      lang: function(newVal, oldVal) { // watch it
        console.log('Prop changed: ', newVal, ' | was: ', oldVal)
      }
    }
    // updated(){
    //     var app = pc.Application.getApplication();
    //     console.log(this.lang)
    //     app.fire("lang:change",this.lang);
    // }

  };
</script>
<template>
  <div :class="['colonne', 'col-sm-'+content.column, 'col-xs-12']" class="planete">
    <canvas id="planet_canvas"></canvas>
  </div>
</template>

<style>
  .planete{
    position: relative
  }
  .planete canvas{
    position: absolute;
    width: 100% !important;
    height: 100% !important;
    margin-top: 0 !important;
  }
  .containerWebgl{
    position: static;
        overflow: visible;
  }
  .planete .legend{
    bottom : 16px;
    left: 16px;
    top : auto;
        max-width: 50%;
  }
  .planete .legend li{
    font-family: 'Work Sans';
    font-size: 1rem;
    line-height: 1.5;
    width: fit-content;
  }
  .planete .legend li.inactive{
    opacity: 0.5;
  }
  
  .planete .dataContainer{
    background-color: inherit;
    box-shadow: none;
  }
  .planete .nav{
    top : 10px;
    bottom : auto;
  }
  .planete .cam_left,.planete .cam_right{
    background: rgba(0,0,0,0);
    border : none;
    outline:none;
  }
  .planete .cam_left::after{
    content:url('../assets/arrow.svg');
    display:block;
    width: 30px;
    height: auto;
    transform:rotate(180deg);
    cursor: pointer;
    top: -4px;
  }
  .planete .cam_right::after{
    content:url('../assets/arrow.svg');
    display:block;
    width: 30px;
    height: auto;
    cursor: pointer;
  }
  .planete p{
        font-size: 1.2rem;
      line-height: 1.5;
          font-family: 'Work Sans';
    color: white;
  }
  .planete p .country{
    font-size: 1.5rem;
    font-weight: 600;
  }
  .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
