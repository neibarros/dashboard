import * as S from './styles'

const PlanChart = () => (
  <S.Wrapper>
    <S.ShadowSecond />
    <S.ShadowFirst />

    <S.CardWrapper>
      <S.TextWrapper>
        <S.TextPlan>Plan for 2020</S.TextPlan>
        <S.Text>Completed</S.Text>
      </S.TextWrapper>

      <S.ChartWrapper>
        <S.Circle>
          <S.Label>75%</S.Label>
          <S.HalfCircle />
        </S.Circle>
      </S.ChartWrapper>
    </S.CardWrapper>
  </S.Wrapper>
)

export default PlanChart
