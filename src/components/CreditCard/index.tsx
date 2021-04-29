import { Wifi } from '@styled-icons/heroicons-solid/Wifi'

import { Row } from 'components/Row'
import * as S from './styles'

const CreditCard = () => (
  <S.Wrapper>
    <S.CardWrapper>
      <Row>
        <S.Chip src="/img/chip.svg" />
        <Wifi
          size={28}
          color="#FFFFFF"
          style={{ transform: 'rotate(90deg)' }}
        />
      </Row>

      <Row>
        <S.Number>4562 1122 4595 7852</S.Number>
      </Row>

      <Row alignItems="flex-end" justifyContent="space-between">
        <Row flexDirection="column">
          <S.Holder>Card Holder</S.Holder>
          <S.Name>Ghulam Rasool</S.Name>
        </Row>

        <Row flexDirection="column" alignItems="flex-end">
          <S.BrandIcon src="/img/brand-icon.svg" />
          <S.BrandName src="/img/brand-name.svg" />
        </Row>
      </Row>
    </S.CardWrapper>

    <S.Shadow />
  </S.Wrapper>
)

export default CreditCard
