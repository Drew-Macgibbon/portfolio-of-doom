<template>
  <div class="flex justify-center w-full h-full">
    <!-- Please include the chartJs script in the head section of your webpage to make the{ Chart }work.
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>-->
    <div class="max-w-sm bg-white pt-6 dark:bg-gray-800 rounded">
      <p class="text-xl font-semibold leading-5 pl-8 sm:pr-40 pr-10 text-gray-800 dark:text-gray-100">
        Last 7 day sales
      </p>
      <hr class="w-full border-gray-200 mt-4 mb-8">
      <div class="pl-8">
        <p class="sm:text-3xl text-2xl font-semibold leading-7 text-gray-800 dark:text-gray-100">
          1,969
        </p>
        <p class="sm:text-base text-sm font-medium leading-4 pt-2 text-gray-500 dark:text-gray-400">
          Items Sold
        </p>
        <p class="sm:text-3xl text-2xl font-semibold leading-7 pt-6 text-gray-800 dark:text-gray-100">
          $ 15,467
        </p>
        <p class="sm:text-base text-sm font-medium leading-4 pt-2 text-gray-500 dark:text-gray-400">
          Total Earnings
        </p>
      </div>
      <div>
        <div class="sm:pt-8">
          <canvas id="myChart" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// npm install chart.js@2.8.0
import Chart from 'chart.js/auto'

export default {
  data() {
    return {}
  },
  mounted() {
    this.createChart()
  },
  methods: {
    createChart() {
      const ctx = document.getElementById('myChart').getContext('2d')
      const purple_white_gradient = ctx.createLinearGradient(0, 0, 0, 300)
      purple_white_gradient.addColorStop(0, '#F9B4BD')
      purple_white_gradient.addColorStop(1, '#9573DB')
      const myChartData = {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [
          {
            backgroundColor: purple_white_gradient,
            data: [0, 10, 5, 13, 6, 14, 7, 16, 5, 13]
          }
        ]
      }
      new Chart(ctx, {
        type: 'line',
        data: myChartData,
        options: {
          animation: {
            onComplete: function () {
              const controller = this.chart.controller
              const Chart = controller.chart
              const xAxis = controller.scales['x-axis-0']
              const numTicks = xAxis.ticks.length
              const xOffsetStart = xAxis.width / numTicks
              const halfBarWidth = xAxis.width / (numTicks * 2)
              xAxis.ticks.forEach(function (value, index) {
                const xOffset = xOffsetStart * index + halfBarWidth
                const yOffset = chart.height - 20
                ctx.fillStyle = '#333'
                ctx.fillText(value, xOffset, yOffset)
              })
            }
          },
          elements: {
            point: {
              radius: 0,
              pointHoverRadius: 2
            }
          },
          generateLabels: {
            hidden: true
          },
          legend: {
            display: false
          },
          responsive: true,
          scales: {
            x:
            {
              ticks: {
                fontSize: 20,
                display: false,
                fontColor: 'black',
                min: 0,
                max: 20
              },
              gridLines: {
                display: false
              }
            },
            y:
            {
              display: false
            }
          }
        }
      })
    }
  }
}

onMounted(() => {
  createChart()
})
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
