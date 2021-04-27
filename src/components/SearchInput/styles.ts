import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xsmall};
    transition: all 0.2s;

    &:focus-within {
      box-shadow: 0 0 2px 1px ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    padding: ${theme.spacings.xsmall} ${theme.spacings.xxsmall};
    background-color: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2rem;
    color: ${theme.colors.primary};

    & > svg {
      width: 100%;
    }
  `}
`

export const Wrapper = styled.div``
