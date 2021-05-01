import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    margin: 0 auto;
    grid-template-areas:
      'header header'
      'sidebar content';
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;

    ${media.greaterThan('medium')`
      width: ${theme.grid.container};
    `}
  `}
`

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    grid-area: header;
    /* background-color: red; */
    padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall}
      ${theme.spacings.small};
  `}
`

export const Aside = styled.aside`
  ${({ theme }) => css`
    grid-area: sidebar;
    padding-top: ${`calc(${theme.spacings.large} * 2)`};
    padding-left: ${theme.spacings.xsmall};
  `}
`

export const Content = styled.section`
  ${({ theme }) => css`
    grid-area: content;
    background-color: ${theme.colors.white};
    margin: 0 ${theme.spacings.xxsmall};
    border-radius: 6rem;
    padding: ${theme.spacings.medium} ${theme.spacings.xsmall};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ${media.greaterThan('medium')`
      margin-left: ${theme.spacings.small};
      padding: ${theme.spacings.xlarge} ${theme.spacings.large};
    `}
  `}
`

export const CardsHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const DashboardArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  ${media.greaterThan('medium')`
    margin-right: 4rem;
    align-items: start;
  `}
`

type HeadingWrapperProps = {
  isLast?: boolean
}

export const HeadingWrapper = styled.div<HeadingWrapperProps>`
  ${({ theme, isLast = false }) => css`
    margin-bottom: ${theme.spacings.medium};
    margin-left: ${theme.spacings.small};
    align-self: flex-start;

    ${isLast &&
    css`
      ${media.lessThan('medium')`
        margin-top: ${theme.spacings.medium};
      `}
    `}
  `}
`

export const UpcomingArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7rem;
`

export const PaymentCardWrapper = styled.div`
  display: flex;
`

export const SalaryWrapper = styled.div`
  margin-right: 2.4rem;
`

export const TransactionTableWrapper = styled.div`
  padding-right: 1rem;
  margin-bottom: 7rem;

  ${media.greaterThan('medium')`
    margin-bottom: 0;
  `}
`

export const ColChartWrapper = styled.div`
  /* margin-left: 4rem; */
`
