import { BsBell, BsChatTextFill } from 'react-icons/bs'
import { Outlet } from 'react-router-dom'

import { Heading } from '~/components/Heading'

import * as S from './Base.styles'

export function Base() {
  const MENU = [
    {
      icon: <BsBell />,
      label: 'Activity',
    },
    {
      icon: <BsChatTextFill />,
      label: 'Chat',
    },
  ]

  return (
    <>
      <Heading />
      <S.Container>
        <S.Menu>
          {MENU.map((item, index) => (
            <div key={item.label} className={`menu-block ${index === 1 ? 'active' : ''}`}>
              <div className="menu-block-2">
                {item.icon}
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </S.Menu>
        <S.MainContent>
          <Outlet />
        </S.MainContent>
      </S.Container>
    </>
  )
}
