import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const HeaderTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.xbold};
  `}
`

export const Filter = styled.div`
  display: flex;
  align-items: center;
`

export const Select = styled.select`
  ${({ theme }) => css`
    width: 14.2rem;
    padding: calc(${theme.spacings.xxsmall} - 0.15rem) ${theme.spacings.xxsmall};
    border-radius: 1rem;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    border: 1px solid ${theme.colors.lightGray};
    background-color: ${theme.colors.white};
    margin-right: ${theme.spacings.xxsmall};
    color: ${theme.colors.grayDark};

    &:focus {
      outline: none;
      box-shadow: 0 0 2px 1px ${theme.colors.primary};
    }
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    border: 0;
    padding: calc(${theme.spacings.xxsmall} - 0.3rem);
    color: ${theme.colors.grayDark};
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.lightGray};
    }

    &:focus {
      outline: none;
    }
  `}
`

export const Table = styled.table`
  width: 100%;
  border: none;
`

export const Td = styled.td<{ first: boolean }>`
  ${({ theme, first }) => css`
    padding: calc(${theme.spacings.xsmall} + 0.6rem) ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
    border-top: ${first ? 'none' : `1px solid ${theme.colors.gray}`};
    font-weight: ${theme.font.bold};
  `}
`

export const Icon = styled.img`
  width: 3.2rem;
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
