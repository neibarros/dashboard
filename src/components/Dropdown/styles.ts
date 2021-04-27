import styled, { css } from 'styled-components'

export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.primary};
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 1rem;
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

    ${Content} {
      transition: transform ${theme.transition.default} ease-in,
        opacity ${theme.transition.default};

      ${isOpen && wrapperModifiers.open()};
      ${!isOpen && wrapperModifiers.close()};
    }
  `}
`
