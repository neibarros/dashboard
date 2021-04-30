import Currency from 'utils/Formats/Currency'
import * as S from './styles'

export type PaymentCardProps = {
  icon: React.ReactNode
  title: string
  description: string
  value: {
    isPositive: boolean
    text: number
  }
}

const PaymentCard = ({ icon, title, description, value }: PaymentCardProps) => (
  <S.Wrapper>
    <S.IconWrapper>{icon}</S.IconWrapper>

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Value>
      {value.isPositive && '+'}
      {Currency.format(value.text)}
    </S.Value>
  </S.Wrapper>
)

export default PaymentCard
