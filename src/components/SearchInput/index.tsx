import { SearchOutline } from '@styled-icons/evaicons-outline/SearchOutline'
import * as S from './styles'

const SearchInput = () => (
  <S.Wrapper>
    <S.InputWrapper>
      <S.Icon>
        <SearchOutline style={{ fontSize: '2rem' }} />
      </S.Icon>
      <S.Input type="text" placeholder="Search" />
    </S.InputWrapper>
  </S.Wrapper>
)

export default SearchInput
