import styled, { css } from 'styled-components'

import { AvatarProps } from './types'

export const Avatar = styled.div<AvatarProps>`
  ${({ theme, width, height }) => css`
    height: 100%;
    margin-right: ${theme.spacing[4]};
    cursor: pointer;
    position: relative;
    height: ${height}rem;
    width: ${width}rem;
    img {
      height: ${height}rem;
      width: ${width}rem;
      border-radius: 50%;
    }
    .online {
      position: absolute;
      z-index: 22;
      border-radius: 50%;
      height: ${parseInt(height) / 2.5}rem;
      width: ${parseInt(width) / 2.5}rem;
      bottom: -0.4rem;
      right: 0.2rem;
      background-color: ${theme.colors.green};
      border: 2px solid ${theme.colors.purple};
    }
  `}
`
