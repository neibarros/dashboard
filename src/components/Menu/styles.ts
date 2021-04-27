import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Item = styled.a`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall};
    cursor: pointer;

    &:hover {
      color: ${theme.colors.grayDark};
    }
  `}
`
