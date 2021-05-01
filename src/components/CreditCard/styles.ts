import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`
export const CardWrapper = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(
      249.25deg,
      #222222 2.58%,
      ${theme.colors.primary} 98.05%
    );
    border-radius: 3rem;
    width: 30.5rem;
    height: 20.7rem;
    padding: ${theme.spacings.small};
    z-index: 1;
  `}
`

export const Chip = styled.img`
  ${({ theme }) => css`
    width: 4rem;
    height: 2.8rem;
    margin-right: ${theme.spacings.xxsmall};
  `}
`

export const Number = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.small} 0 ${theme.spacings.xsmall};
  `}
`

export const Holder = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: 0.6rem;
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    margin-bottom: ${theme.spacings.xxsmall};
    margin-top: ${theme.spacings.small};
  `}
`

export const Name = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.xbold};
  `}
`

export const BrandIcon = styled.img`
  ${({ theme }) => css`
    width: 5.6rem;
    height: 3.5rem;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const BrandName = styled.img`
  ${({ theme }) => css`
    width: calc(5.3rem + ${theme.spacings.xxsmall});
    padding-right: ${theme.spacings.xxsmall};
  `}
`

export const Shadow = styled.span`
  position: absolute;
  bottom: -10px;
  left: 15px;
  border-radius: 3rem;
  width: 27rem;
  height: 4.2rem;
  background-color: rgba(20, 19, 29, 0.2);
  z-index: 0;

  &:after {
    content: '';
    position: absolute;
    width: 22.3rem;
    height: 5.5rem;
    bottom: -10px;
    left: 20px;
    border-radius: 2rem;
    background-color: rgba(20, 19, 29, 0.1);
    z-index: 0;
  }
`
