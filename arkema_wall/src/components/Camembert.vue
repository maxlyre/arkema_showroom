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
                var value = dataset.data[context.dataIndex];
                return value > 0;
              },
              font: {
                weight: 'bold',
                size: '18px'
              },
              padding: 6,
              formatter: function(value, context) {
                  return Math.round(value) + '%';
              }
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
  <div :class="['colonne', 'col-sm-'+content.column, 'col-xs-12']">
    <h3>{{content.Titre}}</h3>
    <div class="chart"><canvas :id="'nestedDoughnut'+index" /></div>
    <ul v-if="content.pourcentages.length > 0" class="color_list">
        <li v-for="line in content.pourcentages" class="color_data">
          <span :style={backgroundColor:line.hexColor} class="color_line"></span> {{line.Titre}}
        </li>  
    </ul>
    <ul v-if="content.pourcentage_externe.length > 0" class="color_list">
        <li v-for="line in content.pourcentage_externe" class="color_data">
          <span :style={backgroundColor:line.hexColor} class="color_line"></span>{{line.pourcentage}}% {{line.Titre}}
        </li>  
    </ul>
  </div>
</template>

<style scoped>

  h3{
    font-family: 'Work Sans';
    text-transform:uppercase;
    color: white;
    font-size : 1.3rem;
    text-align: center;
    margin-top : 1rem;
    margin-bottom: 1rem;
    font-weight: normal;
  }

  .chart{
    width: 80%;
    margin:auto;
    margin-bottom: 1.5rem;
  }
  .color_list{
    padding: 0;
    width: 80%;
    margin: auto;
  }
  .color_data{
    list-style-type: none;
    color: white;
    font-weight: normal;
    font-family: 'Work Sans'; ;
    vertical-align: middle;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  .color_line{
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 0.25rem;
  }

</style>
