/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChartOptions } from 'chart.js'
import { Line } from 'react-chartjs-2'

import { FilterType } from '../ColChart'

const dataMap = {
  day: {
    labels: ['10am', '11:30am', '12pm', '15pm', '17pm'],
    data: [15, 8, 2, 12, 20]
  },
  week: {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    data: [2, 6, 3, 8, 4, 9, 7]
  },
  month: {
    labels: ['May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov'],
    data: [18, 29, 22, 12, 23, 36, 21]
  },
  year: {
    labels: ['2018', '2019', '2020', '2021'],
    data: [56, 87, 96, 150]
  }
}

type Data = (filter: FilterType) => void

const data: Data = (filter) => ({
  labels: dataMap[filter].labels,
  datasets: [
    {
      type: 'line',
      label: 'Value',
      data: dataMap[filter].data,
      fill: false,
      pointBorderWidth: 6,
      pointHoverBorderWidth: 6,
      pointRadius: 8,
      pointHoverRadius: 8,
      pointBackgroundColor: '#14131d',
      pointBorderColor: 'white',
      borderWidth: 6,
      hoverBorderWidth: 6,
      borderColor: '#14131d',
      tension: 0.4
    }
  ]
})

const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
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
        drawTicks: false,
        borderColor: '#d9d9d9',
        color: '#d9d9d9'
      },
      ticks: {
        color: '#8b8b8b',
        font: {
          size: 16,
          family: 'Be Vietnam',
          weight: '600'
        }
      }
    }
  }
}

export type ChartProps = {
  filterData: FilterType
}

const Chart = ({ filterData }: ChartProps) => (
  <Line data={data(filterData)} options={options} />
)

export default Chart
