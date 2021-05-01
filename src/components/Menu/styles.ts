import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled(motion.nav)`
  display: flex;
  flex-direction: column;
`

export const Item = styled.a`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall};
    cursor: pointer;

    svg {
      transform: scale(1.5);
    }

    &:hover {
      color: ${theme.colors.grayDark};
    }

    ${media.greaterThan('medium')`
      svg {
        transform: none;
      }
    `}
  `}
`
