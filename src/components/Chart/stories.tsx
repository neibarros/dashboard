import { Story, Meta } from '@storybook/react/types-6-0'
import Chart, { ChartProps } from '.'

export default {
  title: 'Chart',
  component: Chart
} as Meta

export const Default: Story<ChartProps> = (args) => (
  <div style={{ width: '90rem' }}>
    <Chart {...args} />
  </div>
)

Default.args = {
  filterData: 'month'
}
