import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MenuWrapper = styled.div``

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WrapperLogo = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};

    ${media.lessThan('medium')`
      margin-left: ${theme.spacings.xsmall};
    `}
  `}
`

export const WrapperInput = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxlarge};
    width: 33rem;
  `}
`

export const DropdownItems = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: ${theme.spacings.medium};

    ${media.lessThan('medium')`
      margin-right: 0;
    `}
  `}
`
type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    z-index: 1;

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }

    ${MenuWrapper} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }
  `}
`
