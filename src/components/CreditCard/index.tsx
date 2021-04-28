import { Wifi } from '@styled-icons/heroicons-solid/Wifi'

import * as S from './styles'

const CreditCard = () => (
  <S.Wrapper>
    <S.Row>
      <S.Chip src="/img/chip.svg" />
      <Wifi size={28} color="#FFFFFF" style={{ transform: 'rotate(90deg)' }} />
    </S.Row>

    <S.Row>
      <S.Number>4562 1122 4595 7852</S.Number>
    </S.Row>

    <S.Row alignItems="flex-end" justifyContent="space-between">
      <S.Row flexDirection="column">
        <S.Holder>Card Holder</S.Holder>
        <S.Name>Ghulam Rasool</S.Name>
      </S.Row>

      <S.Row flexDirection="column" alignItems="flex-end">
        <S.BrandIcon src="/img/brand-icon.svg" />
        <S.BrandName src="/img/brand-name.svg" />
      </S.Row>
    </S.Row>

    <S.Shadow />
  </S.Wrapper>
)

export default CreditCard
