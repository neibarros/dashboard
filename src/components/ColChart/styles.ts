import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 43.2rem;
    height: 76.3rem;
    padding: 3rem 2.4rem 6rem;
    background: ${theme.colors.mainBg};
    border-radius: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `}
`

export const MenuWrapper = styled.div`
  align-self: flex-end;
  position: absolute;
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

export const SaveWrapper = styled.div`
  text-align: center;
`

export const Title = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxsmall} 0 ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: #959496;
  `}
`

export const Value = styled.div`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.xxlarge} + 0.4rem);
    font-weight: ${theme.font.xbold};
    color: ${theme.colors.primary};
    line-height: 1;
  `}
`

export const FilterChart = styled.div`
  ${({ theme }) => css`
    margin: 0 auto ${theme.spacings.small};
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-self: center;
  `}
`

export const ButtonFilter = styled.button<{ active?: boolean }>`
  ${({ theme, active = false }) => css`
    border: none;
    font-size: ${theme.font.sizes.small};
    padding: 0.8rem 1rem;
    border-radius: 0.8rem;
    color: #959496;
    cursor: pointer;
    background: transparent;

    &:hover {
      color: ${theme.colors.grayDark};
    }

    &:focus {
      outline: none;
    }

    ${active &&
    css`
      font-weight: ${theme.font.xbold};
      color: ${theme.colors.primary};

      &:hover {
        color: ${theme.colors.primary};
      }
    `}
  `}
`

export const ChartWrapper = styled.div`
  width: 100%;
`
