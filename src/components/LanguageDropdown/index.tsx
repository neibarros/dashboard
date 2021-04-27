import Dropdown from 'components/Dropdown'
import { KeyboardArrowDown } from '@styled-icons/material/KeyboardArrowDown'

import * as S from './styles'

const LanguageDropdown = () => (
  <Dropdown
    title={
      <S.WrapperTitle>
        <S.Text>EN</S.Text>
        <KeyboardArrowDown size={20} />
      </S.WrapperTitle>
    }
  >
    <S.Nav>
      <S.Link>ES - Spanish</S.Link>
      <S.Link>PT - Portuguese</S.Link>
      <S.Link>FR - French</S.Link>
    </S.Nav>
  </Dropdown>
)

export default LanguageDropdown
