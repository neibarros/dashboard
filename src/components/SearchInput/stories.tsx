import { Story, Meta } from '@storybook/react/types-6-0'
import SearchInput from '.'

export default {
  title: 'SearchInput',
  component: SearchInput
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '33rem' }}>
    <SearchInput />
  </div>
)
