import { FaCaretDown } from 'react-icons/fa6'
import { IoVideocamOutline } from 'react-icons/io5'
import { IoCreateOutline } from 'react-icons/io5'
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
          <div className="btn-wrapper">
            <button className="header-button">
              <IoVideocamOutline />
            </button>
            <button className="header-button">
              <IoCreateOutline />
            </button>
          </div>
        </div>
      </div>
      <div className="contact-body">
        <ScrollBar>
          <div className="sticky">
            <div className="contact-type">
              <button>
                <FaCaretDown />
              </button>
              <span>Pin</span>
            </div>
            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-item-left">
                  <Avatar src={IAvatar} width="3" height="3" />
                  <div>
                    <p className="item-name">User Tran</p>
                    <p className="item-desc">Nice to meet you</p>
                  </div>
                </div>
                <div className="contact-item-right">07:59</div>
              </div>
            </div>
          </div>
          <div className="contact-type">
            <button>
              <FaCaretDown />
            </button>
            <span>Recent</span>
          </div>
          <div className="contact-list">
            {iterations.map((item) => (
              <div className={`contact-item ${item === 1 ? 'active' : ''}`} key={item}>
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
