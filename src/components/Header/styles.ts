import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WrapperLogo = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
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
  `}
`
