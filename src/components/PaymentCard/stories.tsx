import { Story, Meta } from '@storybook/react/types-6-0'
import { WorkOutline } from '@styled-icons/material-outlined/WorkOutline'
import { Paypal as PaypalIcon } from '@styled-icons/remix-line/Paypal'
import PaymentCard, { PaymentCardProps } from '.'

export default {
  title: 'PaymentCard',
  component: PaymentCard
} as Meta

export const Default: Story<PaymentCardProps> = (args) => (
  <PaymentCard {...args} />
)

Default.args = {
  icon: <WorkOutline size={32} />,
  title: 'Salary',
  description: 'Belong Interactive',
  value: { isPositive: true, text: 2000 }
}

export const Paypal: Story<PaymentCardProps> = (args) => (
  <PaymentCard {...args} />
)

Paypal.args = {
  icon: <PaypalIcon size={32} />,
  title: 'Paypal',
  description: 'Freelance payment',
  value: { isPositive: false, text: 45 }
}
