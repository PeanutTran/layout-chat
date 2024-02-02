import { Avatar } from '~/components/Avatar'

import * as S from './MessageItem.style'

import type { MessageItemProps } from './types'

import IAvatar from '~/assets/avatar.svg'

export const MessageItem = ({ isCurrent, isToday }: MessageItemProps) => (
  <S.MessageItem className={`${isCurrent ? 'current-user clear-fix' : ''}`}>
    <div className="bubbles-content">
      {isCurrent ? null : <Avatar src={IAvatar} width="3" height="3" />}
      <div className="message-content">
        <div className="message-item-top">
          {isCurrent ? null : <span className="message-item-name">V Tran</span>}
          <span className="message-item-time">
            {isToday ? null : 'Yesterday'} <span>07:59</span>
          </span>
        </div>
        <div className="message-item-text">Nice to meet you</div>
      </div>
    </div>
  </S.MessageItem>
)
