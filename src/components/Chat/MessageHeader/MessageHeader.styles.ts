import styled, { css } from 'styled-components'

export const MessageHeader = styled.div`
  ${({ theme }) => css`
    height: 6.1rem;
    .messages-header {
      height: 6.1rem;
      position: relative;
      display: flex;
      justify-content: space-between;
    }
    .messages-header::before {
      bottom: 0;
      box-shadow: none;
      content: '';
      height: 0.1rem;
      left: 0;
      right: 0;
      background: ${theme.colors.slate[50]};
      position: absolute;
    }
    .messages-header-function {
      display: flex;
      align-items: center;
      height: 100%;
      padding-left: 0.5rem;
      .header-msg-name {
        font-size: 1.8rem;
        font-weight: 700;
      }
      .function-header {
        font-size: 1.4rem;
        font-weight: 400;
        margin: 0 0.6rem;
      }
      .function-header.active {
        font-weight: 700;
        height: 100%;
        line-height: 6.1rem;
        border-bottom: 4px solid ${theme.colors.purple};
      }
    }
    .messages-header-right {
      display: flex;
      align-items: center;
      margin-right: 1.3rem;
      .header-button:first-child {
        margin-right: 0.2rem;
      }
      .header-button {
        height: 3.2rem;
        width: 3.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${theme.colors.slate[200]};
        border-radius: 0.4rem;
        background-color: ${theme.colors.white};
        svg {
          font-size: 1.6rem;
        }
      }
      .header-button.outline {
        border: 0;
        background-color: unset;
      }
    }
  `}
`
