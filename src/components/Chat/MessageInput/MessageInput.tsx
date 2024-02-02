import { AiOutlineFileGif } from 'react-icons/ai'
import { FiVideo } from 'react-icons/fi'
import { GoPencil } from 'react-icons/go'
import { GrAttachment } from 'react-icons/gr'
import { MdOutlineInsertEmoticon } from 'react-icons/md'
import { VscSend } from 'react-icons/vsc'

import * as S from './MessageInput.styles'

export const MessageInput = () => (
  <S.MessageInput>
    <div className="message-input-wrapper">
      <div className="message-input-buffer"></div>
      <div className="message-input-function">
        <input type="text" placeholder="Type a message" />
      </div>
      <div className="message-bottom-function">
        <div className="flex">
          <button className="input-button outline">
            <GoPencil />
          </button>
          <button className="input-button outline">
            <GrAttachment />
          </button>
          <button className="input-button outline">
            <MdOutlineInsertEmoticon />
          </button>
          <button className="input-button outline">
            <AiOutlineFileGif />
          </button>
        </div>
        <div className="flex">
          <button className="input-button outline">
            <FiVideo />
          </button>
          <button className="input-button outline">
            <VscSend />
          </button>
        </div>
      </div>
    </div>
  </S.MessageInput>
)
