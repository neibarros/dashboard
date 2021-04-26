import styled, { css } from 'styled-components'

export const Wrapper = styled.h1`
  ${({ theme }) => css`
    font-size: 3.8rem;
    line-height: 3.8rem;
    color: ${theme.colors.primary};
  `}
`
