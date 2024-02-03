import styled, { DefaultTheme, css } from 'styled-components'

import { MessageItemProps } from './types'

const currentUser = (theme: DefaultTheme) => {
  return css`
    width: 100%;
    &::after {
      content: '';
      clear: both;
      display: table;
    }
    .bubbles-content {
      float: right;
      margin-right: 6.4rem;
      @media (${theme.devices.tablet}) {
        margin-right: 0.4rem;
      }
    }
  `
}

export const MessageItem = styled.div<MessageItemProps>`
  ${({ theme, isCurrent }) => css`
    display: flex;
    flex-direction: column;
    display: list-item;
    list-style: none;
    ${isCurrent && currentUser(theme)}
    .bubbles-content {
      display: inline-flex;
      max-width: calc(100% - 11.6rem);
      padding-top: 0.8rem;
      .message-content {
        background-color: ${theme.colors.white};
        border-radius: 2px;
        padding: 0.5rem 0.8rem;
        width: fit-content;
        position: relative;
        .message-item-name {
          font-size: 1.2rem;
          margin-right: 1.2rem;
          font-weight: 600;
        }
        .message-item-time {
          color: ${theme.colors.slate[100]};
          font-size: 1.2rem;
          span {
            margin-left: 0.3rem;
          }
        }
        .message-item-text {
          font-size: 1.4rem;
          color: ${theme.colors.slate[500]};
        }
      }
    }
  `}
`
