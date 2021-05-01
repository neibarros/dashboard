import { useState } from 'react'
import * as S from './styles'

export type SideProps = 'left' | 'bottom'

export type DropdownProps = {
  title: React.ReactNode
  side?: SideProps
  children: React.ReactNode
}

const Dropdown = ({ title, side = 'bottom', children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper isOpen={isOpen} side={side}>
      <S.Title onClick={() => setIsOpen(!isOpen)}>{title}</S.Title>

      <S.Content aria-hidden={!isOpen} side={side}>
        {children}
      </S.Content>
      <S.Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)} />
    </S.Wrapper>
  )
}

export default Dropdown
