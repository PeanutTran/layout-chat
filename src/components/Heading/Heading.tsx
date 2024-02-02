import { FaEllipsisH } from 'react-icons/fa'

import { Avatar } from '~/components/Avatar'

import * as S from './Heading.styles'

import IAvatar from '~/assets/avatar.svg'

export const Heading = () => (
  <S.Header>
    <form>
      <input type="text" placeholder="Search" className="field" />
    </form>
    <div className="header-right">
      <div className="header-more">
        <FaEllipsisH />
      </div>
      <Avatar src={IAvatar} width="3.2" height="3.2" />
    </div>
  </S.Header>
)
