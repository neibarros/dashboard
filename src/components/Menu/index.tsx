import { Home } from '@styled-icons/fluentui-system-filled/Home'
import { Mail } from '@styled-icons/fluentui-system-regular/Mail'
import { CommentNote } from '@styled-icons/fluentui-system-regular/CommentNote'
import { Person } from '@styled-icons/fluentui-system-regular/Person'
import { CloudBackup } from '@styled-icons/fluentui-system-regular/CloudBackup'
import { Settings } from '@styled-icons/fluentui-system-regular/Settings'

import * as S from './styles'

const Menu = () => (
  <S.Wrapper
    animate={{ x: 0 }}
    initial={{ x: -50 }}
    transition={{ ease: 'easeOut', duration: '0.5' }}
  >
    <S.Item>
      <Home size={28} />
    </S.Item>
    <S.Item>
      <Mail size={28} />
    </S.Item>
    <S.Item>
      <CommentNote size={28} />
    </S.Item>
    <S.Item>
      <Person size={28} />
    </S.Item>
    <S.Item>
      <CloudBackup size={28} />
    </S.Item>
    <S.Item>
      <Settings size={28} />
    </S.Item>
  </S.Wrapper>
)

export default Menu
