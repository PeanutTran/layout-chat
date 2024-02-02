import * as S from './Avatar.styles'

import type { AvatarProps } from './types'

export const Avatar = ({ src, width, height }: AvatarProps) => (
  <S.Avatar width={width} height={height}>
    <img src={src} />
    <div className="online"></div>
  </S.Avatar>
)
