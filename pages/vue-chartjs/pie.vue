
<template>
    <div class="container">
        <Pie v-if="loaded" :chart-data="chartData" />
    </div>
</template>
  
<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
    name: 'BarChart',
    components: { Pie },
    data: () => ({
        loaded: true,
        chartData: {
            label: 'Data One',
            labels: ['React', 'VueJs', 'Nuxt', "tuan", "nga"],
            datasets: [{
                label: 'TuancanDongSang',
                data: [30, 40, 25, 20, 17],
                backgroundColor: '#f87979',
            }],
        },
        chartOptions: {
            responsive: true
        }
    }),
    created() {
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