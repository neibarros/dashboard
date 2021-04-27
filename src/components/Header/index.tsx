import Avatar from '../Avatar'
import LanguageDropdown from '../LanguageDropdown'
import Logo from '../Logo'
import NotifyDropdown from '../NotifyDropdown'
import SearchInput from '../SearchInput'

import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <S.Item>
      <S.WrapperLogo>
        <Logo />
      </S.WrapperLogo>
      <S.WrapperInput>
        <SearchInput />
      </S.WrapperInput>
    </S.Item>

    <S.Item>
      <S.DropdownItems>
        <LanguageDropdown />
        <NotifyDropdown />
      </S.DropdownItems>
      <Avatar />
    </S.Item>
  </S.Wrapper>
)

export default Header
