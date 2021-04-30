import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const WrapperTitle = styled.div`
  position: relative;
`

export const NotifyDot = styled.span`
  ${({ theme }) => css`
    position: absolute;
    width: 1rem;
    height: 1rem;
    background-color: ${theme.colors.red};
    border-radius: 50%;
    top: 0.4rem;
    right: 0;
    border: 1px solid ${theme.colors.white};
  `}
`

export const NotifyList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 30rem;
    list-style: none;
    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xxsmall};

    ${media.lessThan('medium')`
      width: 20rem;
    `}
  `}
`

export const NotifyItem = styled.li`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.small}
      ${theme.spacings.small};
    border-bottom: 1px solid ${theme.colors.grayDark};
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};

    &:last-child {
      border-bottom: 0;
    }
  `}
`

export const NotyTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    line-height: 2.8rem;
  `}
`

export const NotyText = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
  `}
`
