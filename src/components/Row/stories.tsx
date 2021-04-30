import { Story, Meta } from '@storybook/react/types-6-0'
import { Row, RowProps } from '.'

export default {
  title: 'Row',
  component: Row
} as Meta

export const Default: Story<RowProps> = () => <Row>Text</Row>
