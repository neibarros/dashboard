import { useState } from 'react'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'

import Menu from 'components/Menu'
import Avatar from 'components/Avatar'
import LanguageDropdown from 'components/LanguageDropdown'
import Logo from 'components/Logo'
import NotifyDropdown from 'components/NotifyDropdown'
import SearchInput from 'components/SearchInput'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.Item>
        <MediaMatch lessThan="medium">
          <S.IconWrapper onClick={() => setIsOpen(true)}>
            <MenuIcon aria-label="Open Menu" />
          </S.IconWrapper>
        </MediaMatch>

        <S.WrapperLogo>
          <Logo />
        </S.WrapperLogo>

        <MediaMatch greaterThan="medium">
          <S.WrapperInput>
            <SearchInput />
          </S.WrapperInput>
        </MediaMatch>
      </S.Item>

      <MediaMatch lessThan="medium">
        <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
          <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

          <S.MenuWrapper>
            <Menu />
          </S.MenuWrapper>
        </S.MenuFull>
      </MediaMatch>

      <S.Item>
        <S.DropdownItems>
          <LanguageDropdown />
          <NotifyDropdown />
        </S.DropdownItems>

        <Avatar />
      </S.Item>
    </S.Wrapper>
  )
}

export default Header
