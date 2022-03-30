<script>
  // import { Line } from 'vue-chartjs'
  import { Chart,registerables } from 'chart.js';
  Chart.register(...registerables);
  import ChartDataLabels from 'chartjs-plugin-datalabels';
  Chart.register(ChartDataLabels);

  export default {
    props:{
      content: {
        type: Object,
        required: true,
      },
      index: {
        type: Number
      }
    },
    data() {
      return {
      }
    },
    computed:{
    },
    mounted(){
      let data = {
        datasets: [{
            backgroundColor: [
            ],
            data: [
            ]},
        {
            backgroundColor: [
            ],
            data: [
            ]
        }]
      }
      this.content.pourcentages.forEach((item)=>{
          data.datasets[0].backgroundColor.push(item.hexColor);
          data.datasets[0].data.push(item.pourcentage);
      })
      this.content.pourcentage_externe.forEach((item)=>{
          data.datasets[1].backgroundColor.push(item.hexColor);
          data.datasets[1].data.push(item.pourcentage);
      })
      if(this.content.pourcentage_externe.length == 1){
          data.datasets[1].backgroundColor.push("#ffffff00");
          data.datasets[1].data.push(data.datasets[1].data[0]-100);
      }
  
      let options= {
        responsive: true,
        datasets:{
          doughnut:{
              borderWidth :0,
              cutout : "15%"
          }
        },
          plugins: {
            datalabels: {
              color: 'white',
              display: function(context) {
                var dataset = context.dataset;
                var count = dataset.data.length;
                var value = dataset.data[context.dataIndex];
                return value > count * 1.5;
              },
              font: {
                weight: 'bold'
              },
              padding: 6,
              formatter: Math.round
            },
            tooltip:{
              enabled :false
            }
          },
      }

      var resourceChartElement = document.getElementById("nestedDoughnut"+this.index);
      new Chart(resourceChartElement, {
        type: "doughnut",
        data: data,
        options:options
      });
    }


  };
</script>
<template>
  <div :class="['colonne', 'col-md-'+content.column]">
    <h3>{{content.Titre}}</h3>
    <div class="chart"><canvas :id="'nestedDoughnut'+index" /></div>
    <ul v-if="content.pourcentages.length > 0">
        <li v-for="line in content.pourcentages">
          <span :style={backgroundColor:line.hexColor} class="color_line"></span> {{line.Titre}}
        </li>  
    </ul>
    <ul v-if="content.pourcentage_externe.length > 0">
        <li v-for="line in content.pourcentage_externe">
          <span :style={backgroundColor:line.hexColor} class="color_line"></span>{{line.pourcentage}}% {{line.Titre}}
        </li>  
    </ul>
  </div>
</template>

<style scoped>
  .color_line{
    display: inline-block;
    width: 30px;
    height: 30px;
  }
</style>
