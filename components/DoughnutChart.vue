<template>
  <div class="chart-container">
    <h3>Top 5 Car Rental</h3>
    <!-- Contenedor para el gráfico -->
    <div ref="chart" class="chart" />
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'DoughnutChart',
  setup () {
    const chart = ref(null) // Referencia al contenedor del gráfico

    onMounted(() => {
      // Inicializar ECharts
      const myChart = echarts.init(chart.value)

      const options = {
        title: {
          text: '72,030 Rental Car',
          left: 'center',
          top: '20px',
          textStyle: {
            color: '#111827',
            fontSize: 20
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: '10%',
          top: 'center',
          textStyle: {
            color: '#374151',
            fontSize: 14
          },
          itemGap: 20
        },
        series: [
          {
            name: 'Rental Car',
            type: 'pie',
            radius: ['50%', '70%'], // Define el "doughnut"
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '18',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 17439, name: 'Sport Car' },
              { value: 9478, name: 'SUV' },
              { value: 18197, name: 'Coupe' },
              { value: 12510, name: 'Hatchback' },
              { value: 14406, name: 'MPV' }
            ],
            itemStyle: {
              color: (params) => {
                // Colores personalizados
                const colors = [
                  '#1e3a8a',
                  '#1e40af',
                  '#2563eb',
                  '#3b82f6',
                  '#93c5fd'
                ]
                return colors[params.dataIndex]
              }
            }
          }
        ]
      }

      myChart.setOption(options)

      // Ajustar el gráfico al tamaño de la ventana
      window.addEventListener('resize', myChart.resize)
    })

    return {
      chart
    }
  }
})
</script>

<style scoped>
.chart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;
  max-width: 600px;
}

h3 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 1.5rem;
  color: #374151;
}

.chart {
  width: 100%;
  height: 400px;
}
</style>
