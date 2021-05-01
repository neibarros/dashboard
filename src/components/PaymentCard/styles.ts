import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    width: 16.2rem;
    height: 20.5rem;
    border-radius: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.small};
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    width: 6rem;
    height: 5.8rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.xbold};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.grayDark};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
  `}
`

export const Value = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.xbold};
  `}
`
