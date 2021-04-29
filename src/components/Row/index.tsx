import styled, { css } from 'styled-components'

type RowProps = {
  flexDirection?: 'row' | 'column'
  alignItems?: 'start' | 'center' | 'flex-end'
  justifyContent?: 'start' | 'space-between'
}

export const Row = styled.div<RowProps>`
  ${({
    flexDirection = 'row',
    alignItems = 'start',
    justifyContent = 'start'
  }) => css`
    display: flex;
    flex-direction: ${flexDirection};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
  `}
`
