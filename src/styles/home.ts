import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 11.5rem 1fr;
  grid-template-rows: 7rem 1fr;
  height: 100vh;
  grid-template-areas:
    'header header header'
    'aside content content'
    'aside content content';
`

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    grid-area: header;
    padding: ${theme.spacings.small};
  `}
`

export const Aside = styled.aside`
  ${({ theme }) => css`
    grid-area: aside;
    padding-top: ${`calc(${theme.spacings.large} * 2)`};
    padding-left: ${theme.spacings.medium};
  `}
`

export const Content = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    grid-area: content;
    margin: ${theme.spacings.small};
    border-radius: 6rem;
    padding: ${theme.spacings.large} ${theme.spacings.xlarge};
  `}
`
