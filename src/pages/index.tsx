import Header from 'components/Header'
import Heading from 'components/Heading'
import Menu from 'components/Menu'

import * as S from 'styles/home'

export default function Home() {
  return (
    <S.Container>
      <S.HeaderContent>
        <Header />
      </S.HeaderContent>

      <S.Aside>
        <Menu />
      </S.Aside>

      <S.Content>
        <Heading>Dashboard</Heading>
      </S.Content>
    </S.Container>
  )
}
