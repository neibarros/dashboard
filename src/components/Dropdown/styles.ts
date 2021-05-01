import styled, { css } from 'styled-components'
import { SideProps } from '.'

export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.primary};
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 1rem;
    z-index: ${theme.layers.dropdown - 1};
  `}
`

export const Content = styled.div<{ side?: SideProps }>`
  ${({ theme, side = 'bottom' }) => css`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    color: ${theme.colors.white};
    position: absolute;
    z-index: ${theme.layers.dropdown};
    border-radius: ${theme.border.radius};
    box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
    right: 0;

    ${side === 'left'
      ? css`
          top: 0;
        `
      : css`
          right: 0;
        `}
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${theme.layers.overlay};
  `}
`

type WrapperProps = {
  isOpen?: boolean
  side?: SideProps
}

const wrapperModifiers = {
  open: (side: SideProps) => css`
    opacity: 1;
    transform: ${side === 'left' ? 'translateX(-3rem)' : 'translateY(0)'};
  `,
  close: (side: SideProps) => css`
    opacity: 0;
    pointer-events: none;
    transform: ${side === 'left' ? 'translateX(0)' : 'translateY(-2rem)'};
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen, side = 'bottom' }) => css`
    position: relative;
    width: max-content;

    ${Content},
    ${Overlay} {
      transition: transform ${theme.transition.default} ease-in,
        opacity ${theme.transition.default};

      ${isOpen && wrapperModifiers.open(side)};
      ${!isOpen && wrapperModifiers.close(side)};
    }
  `}
`
