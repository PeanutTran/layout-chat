import { FaEllipsisH } from 'react-icons/fa'
import { FaCaretDown } from 'react-icons/fa6'
import ScrollBar from 'react-perfect-scrollbar'

import { Avatar } from '~/components/Avatar'

import * as S from './Contact.styles'

import IAvatar from '~/assets/avatar.svg'

import 'react-perfect-scrollbar/dist/css/styles.css'

export const Contact = () => {
  const iterations = Array.from({ length: 40 }, (_, index) => index + 1)
  return (
    <S.Contact>
      <div className="contact-header">
        <div className="contact-header-content">
          <span>Chat</span>
          <div>{/* TODO */}</div>
        </div>
      </div>
      <div className="contact-body">
        <ScrollBar>
          <div className="contact-type">
            <button>
              <FaCaretDown />
            </button>
            <span>Recent</span>
          </div>
          <div className="contact-list">
            {iterations.map((item) => (
              <div className="contact-item" key={item}>
                <div className="contact-item-left">
                  <Avatar src={IAvatar} width="3" height="3" />
                  <div>
                    <p className="item-name">User Tran</p>
                    <p className="item-desc">Nice to meet you</p>
                  </div>
                </div>
                <div className="contact-item-right">07:59</div>
              </div>
            ))}
          </div>
        </ScrollBar>
      </div>
    </S.Contact>
  )
}
