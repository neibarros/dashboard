/* eslint-disable no-constant-condition */
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  padding-top: 40px;
  z-index: 1;
`

export const ShadowFirst = styled.span`
  position: absolute;
  top: 28px;
  left: 25px;
  border-radius: 3rem;
  width: 83%;
  height: 4.2rem;
  background: rgba(125, 125, 125, 0.5);
  z-index: -1;
`

export const ShadowSecond = styled.span`
  position: absolute;
  top: 15px;
  left: 50px;
  border-radius: 3rem;
  width: 63%;
  height: 8rem;
  background: rgba(125, 125, 125, 0.2);
  z-index: -1;

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: 35px;
    border-radius: 3rem;
    width: 63%;
    height: 10rem;
    background: rgba(125, 125, 125, 0.1);
    z-index: -1;
  }
`

export const CardWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    width: 28rem;
    height: 15rem;
    border-radius: 2.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.medium};
    box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.3);
  `}
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const TextPlan = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray2};
    font-weight: ${theme.font.normal};
  `}
`

export const Text = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.bold};
  `}
`

export const ChartWrapper = styled.div`
  position: relative;
`

export const Circle = styled.div`
  ${({ theme }) => css`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background: linear-gradient(
      90deg,
      ${theme.colors.primary} 0%,
      ${theme.colors.white} 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const Label = styled.div`
  ${({ theme }) => css`
    width: 6.8rem;
    height: 6.8rem;
    border-radius: 50%;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.xbold};
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  `}
`

export const HalfCircle = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 4rem;
    left: -8px;
    width: 7rem;
    height: 7rem;
    background: linear-gradient(
      0deg,
      ${theme.colors.primary} 0%,
      ${theme.colors.white} 100%
    );
    border-radius: 0 0 0 6rem;
  `}
`
