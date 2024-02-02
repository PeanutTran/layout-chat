import 'react-perfect-scrollbar/dist/css/styles.css'
import { Chat } from '~/components/Chat'
import { Contact } from '~/components/Contact'

import * as S from './Home.styles'

export function Home() {
  return (
    <S.Page>
      <S.Container>
        <S.SectionLeft>
          <Contact />
        </S.SectionLeft>
        <S.SectionRight>
          <Chat />
        </S.SectionRight>
      </S.Container>
    </S.Page>
  )
}
