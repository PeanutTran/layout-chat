import styled, { css } from 'styled-components'

export const MessageContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    max-height: 100%;
    overflow: auto;
    .message-content-w {
      flex: 1;
      overflow: auto;
      max-height: 100%;
    }
  `}
`

export const MessageList = styled.div`
  ${({ theme }) => css`
    overflow: auto;
    height: 100%;
    width: 100%;
    .message-list-body {
      padding-top: 2.2rem;
      padding-left: 3.2rem;
      padding-right: 3.2rem;
      width: 100%;
      height: 100%;
      .bubbles-divide {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        span {
          position: relative;
          z-index: 4;
          padding: 0 1rem;
          background-color: ${theme.colors.slate[400]};
          font-size: 1.4em;
        }
      }
      .bubbles-divide:after {
        height: 0.1rem;
        width: 100%;
        content: '';
        position: absolute;
        background-color: ${theme.colors.slate[200]};
      }
      .clear-fix::after {
        content: '';
        clear: both;
        display: table;
      }
    }
  `}
`
