import { FiPhone } from 'react-icons/fi'
import { IoVideocamOutline } from 'react-icons/io5'
import { IoPersonAddOutline } from 'react-icons/io5'

import { Avatar } from '~/components/Avatar'

import * as S from './MessageHeader.styles'

import IAvatar from '~/assets/avatar.svg'

export const MessageHeader = () => (
  <S.MessageHeader>
    <div className="messages-header">
      <div className="messages-header-function">
        <Avatar src={IAvatar} width="3.2" height="3.2" />
        <span className="header-msg-name">V Tran</span>
        <span className="function-header active">Chat</span>
        <span className="function-header">Files</span>
        <span className="function-header">Photos</span>
      </div>
      <div className="messages-header-right">
        <button className="header-button">
          <IoVideocamOutline />
        </button>
        <button className="header-button">
          <FiPhone />
        </button>
        <button className="header-button outline">
          <IoPersonAddOutline />
        </button>
      </div>
    </div>
  </S.MessageHeader>
)
