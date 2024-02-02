import styled, { css } from 'styled-components'

export const MessageInput = styled.div`
  ${({ theme }) => css`
    height: 10.1rem;
    margin: 0 2.4rem 1rem 2.4rem;
    .flex {
      display: flex;
    }
    .message-input-wrapper {
      margin: 0 7.4rem;
      @media (${theme.devices.tablet}) {
        margin: 0 0.9rem;
      }
      .message-input-buffer {
        height: 2.582rem;
        width: 100%;
      }
      .message-input-function {
        width: 100%;
        margin-bottom: 0.5rem;
        height: 3.8rem;
        input {
          width: 100%;
          height: 3.8rem;
          background-color: ${theme.colors.white};
          padding: 0.6rem;
          font-size: 1.4rem;
          border: 1px solid ${theme.colors.slate[200]};
        }
      }
      .message-bottom-function {
        display: flex;
        justify-content: space-between;
        .input-button {
          border: 0;
          background-color: transparent;
          padding: 0 0.5rem;
          color: ${theme.colors.slate[300]};
          svg {
            font-size: 1.8rem;
          }
        }
      }
    }
  `}
`
