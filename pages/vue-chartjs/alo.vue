<!-- <template>
    <Bar :chart-data="chartData" />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ 'January', 'February', 'March'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [40, 20, 12]
            }
          ]
        }
      }
    }
  }
  </script> -->

<template>
    <div class="container">
        <Bar v-if="loaded" :chart-data="chartData" />
    </div>
</template>
  
<script>
import { Bar } from 'vue-chartjs'
import axios from "axios"
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    data: () => ({
        loaded: false,
        // chartData: null,
        chartData: {
            label: 'Data One',
            labels: ['React', 'VueJs', 'Nuxt', "tuan", "nga"],
            datasets: [{
                label: 'TuancanDongSang',
                data: [30, 40, 25],
                backgroundColor: '#f87979',
            }],
        },
        chartOptions: {
            responsive: true
        }
    }),
    async created() {
        this.loaded = false

        try {
            const userlist = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(userlist.data);
            this.chartData.datasets[0].data = this.tranfromdataID(userlist.data)
            this.chartData.labels = this.tranfromdataName(userlist.data)
            console.log(this.tranfromdataName(userlist.data));


            this.loaded = true
        } catch (e) {
            console.error(e)
        }
    },
    methods: {
        tranfromdataID(arr) {
            return arr.map(item => item.id)

        },
        tranfromdataName(arr) {
            return arr.map(item => item.name)

        }
    }
}
</script>
<style scoped>
.container {
    width: 1000px;
}
</style>