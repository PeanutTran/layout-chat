import ScrollBar from 'react-perfect-scrollbar'

import { Avatar } from '~/components/Avatar'

import * as S from './Chat.styles'
import { MessageHeader } from './MessageHeader'
import { MessageInput } from './MessageInput'
import { MessageItem } from './MessageItem'

import 'react-perfect-scrollbar/dist/css/styles.css'

export const Chat = () => {
  const iterations = Array.from({ length: 40 }, (_, index) => index + 1)
  return (
    <>
      <MessageHeader />
      <S.MessageContent>
        <div className="message-content-w">
          <S.MessageList>
            <ScrollBar>
              <div className="message-list-body">
                <MessageItem />
                <MessageItem isCurrent={true} />
                <div className="bubbles-divide">
                  <span>Today</span>
                </div>
                {iterations.map((item) => (
                  <MessageItem isCurrent={true} key={item} isToday={true} />
                ))}
              </div>
            </ScrollBar>
          </S.MessageList>
        </div>
        <MessageInput />
      </S.MessageContent>
    </>
  )
}
