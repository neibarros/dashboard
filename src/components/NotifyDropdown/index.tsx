import Dropdown from 'components/Dropdown'
import { Notifications } from '@styled-icons/ionicons-outline/Notifications'
import { Paypal } from '@styled-icons/remix-line/Paypal'

import * as S from './styles'

const NotifyDropdown = () => (
  <Dropdown
    title={
      <S.WrapperTitle>
        <Notifications size={20} />
        <S.NotifyDot />
      </S.WrapperTitle>
    }
  >
    <S.NotifyList>
      <S.NotifyItem>
        <S.NotyTitle>
          <Paypal size={18} /> New income
        </S.NotyTitle>
        <S.NotyText>You received $500 on Paypal</S.NotyText>
      </S.NotifyItem>
      <S.NotifyItem>
        <S.NotyTitle>
          <Notifications size={18} /> New payment
        </S.NotyTitle>
        <S.NotyText>You paid $125 to the Gim</S.NotyText>
      </S.NotifyItem>
    </S.NotifyList>
  </Dropdown>
)

export default NotifyDropdown
