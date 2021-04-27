import styled, { css } from 'styled-components'

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
`

export const Text = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    line-height: ${theme.font.sizes.xsmall};
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 20rem;
    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xxsmall};
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    border-bottom: 1px solid ${theme.colors.grayDark};
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.bold};
    cursor: pointer;

    &:hover {
      color: ${theme.colors.white};
    }

    &:last-child {
      border-bottom: 0;
    }
  `}
`
