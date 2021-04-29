import { Story, Meta } from '@storybook/react/types-6-0'
import RecentTransactionTable from '.'

export default {
  title: 'RecentTansactionTable',
  component: RecentTransactionTable
} as Meta

export const Default: Story = () => <RecentTransactionTable />
