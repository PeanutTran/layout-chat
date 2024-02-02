import styled, { css } from 'styled-components'

export const MessageItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    display: list-item;
    list-style: none;
    &.current-user {
      width: 100%;
      .bubbles-content {
        float: right;
        margin-right: 6.4rem;
        @media (${theme.devices.tablet}) {
          margin-right: 0.4rem;
        }
      }
    }
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
          color: ${theme.colors.slate[100]};
        }
      }
    }
  `}
`
