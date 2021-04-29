/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChartData, ChartOptions } from 'chart.js'
import { Line } from 'react-chartjs-2'

function getGradient(ctx: any, chartArea: any) {
  let width, height, gradient
  const chartWidth = chartArea.right - chartArea.left
  const chartHeight = chartArea.bottom - chartArea.top
  if (gradient === null || width !== chartWidth || height !== chartHeight) {
    width = chartWidth
    height = chartHeight
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
    gradient.addColorStop(0, '#F3F5FA')
    gradient.addColorStop(0.5, '#C6C9CB')
  }

  return gradient
}

const data: ChartData = {
  labels: ['May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov'],
  datasets: [
    {
      type: 'line',
      label: '',
      data: [18, 29, 22, 12, 23, 36, 21],
      fill: true,
      backgroundColor: (context: any) => {
        const chart = context.chart
        const { ctx, chartArea } = chart

        if (!chartArea) {
          return null
        }
        return getGradient(ctx, chartArea)
      },
      pointBorderWidth: 6,
      pointRadius: 8,
      pointBackgroundColor: '#14131d',
      pointBorderColor: 'white',
      borderWidth: 6,
      borderColor: '#14131d',
      tension: 0.4
    }
  ]
}

const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {}
  },
  scales: {
    y: {
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false,
        drawOnChartArea: false
      },
      ticks: {
        display: false
      },
      min: 0
    },
    x: {
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false,
        drawOnChartArea: false
      },
      ticks: {
        color: '#AEAEAE',
        font: {
          size: 16,
          family: 'Be Vietnam',
          weight: '400'
        }
      }
    }
  }
}

const Chart = () => <Line data={data} options={options} />

export default Chart
