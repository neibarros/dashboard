import { Story, Meta } from '@storybook/react/types-6-0'
import LanguageDropdown from '.'

export default {
  title: 'LanguageDropdown',
  component: LanguageDropdown
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <LanguageDropdown />
  </div>
)
