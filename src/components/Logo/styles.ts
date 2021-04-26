import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    font-size: 3.8rem;
    line-height: 3.8rem;
    font-weight: ${theme.font.xbold};
    color: ${theme.colors.primary};
  `}
`
