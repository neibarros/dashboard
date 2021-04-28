import * as S from './styles'

export type PaymentCardProps = {
  icon: React.ReactNode
  title: string
  description: string
  value: string
}

const PaymentCard = ({ icon, title, description, value }: PaymentCardProps) => (
  <S.Wrapper>
    <S.IconWrapper>{icon}</S.IconWrapper>

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Value>{value}</S.Value>
  </S.Wrapper>
)

export default PaymentCard
