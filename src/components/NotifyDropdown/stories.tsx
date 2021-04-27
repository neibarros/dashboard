import { Story, Meta } from '@storybook/react/types-6-0'
import NotifyDropdown from '.'

export default {
  title: 'NotifyDropdown',
  component: NotifyDropdown
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <NotifyDropdown />
  </div>
)
