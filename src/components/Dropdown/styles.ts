import styled, { css } from 'styled-components'

export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.primary};
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 1rem;
    z-index: ${theme.layers.alwaysOnTop - 1};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    color: ${theme.colors.white};
    position: absolute;
    right: 0;
    z-index: ${theme.layers.alwaysOnTop};
    border-radius: ${theme.border.radius};
    box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
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
}

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: max-content;

    ${Content},
    ${Overlay} {
      transition: transform ${theme.transition.default} ease-in,
        opacity ${theme.transition.default};

      ${isOpen && wrapperModifiers.open()};
      ${!isOpen && wrapperModifiers.close()};
    }
  `}
`
