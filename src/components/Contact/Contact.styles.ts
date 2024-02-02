import styled, { css } from 'styled-components'

export const Contact = styled.div`
  ${({ theme }) => css`
    height: 100%;
    background-color: ${theme.colors.slate[600]};
    width: 36rem;
    @media (${theme.devices.tablet}) {
      display: none;
    }
    .contact-header {
      height: 6rem;
      width: 100%;
      position: relative;
      .contact-header-content {
        padding: 2rem;
        span {
          line-height: 1;
          font-size: 1.8rem;
          font-weight: 700;
        }
      }
    }
    .contact-header:after {
      background: ${theme.colors.slate[700]};
      content: '';
      height: 0.1rem;
      width: 100%;
      position: absolute;
    }
    .contact-body {
      height: calc(100vh - 10.8rem);
      scroll-behavior: smooth;
      .contact-type {
        padding: 0.8rem;
        * {
          font-size: 1.2rem;
          color: ${theme.colors.slate[800]};
        }
        button {
          border: 0;
        }
      }
      .contact-list {
        padding: 0 0.4rem;
      }
      .contact-item {
        display: flex;
        background-color: ${theme.colors.white};
        padding: 0.8rem;
        border-radius: 0.4rem;
        margin-bottom: 0.2rem;
        cursor: pointer;
        .contact-item-left {
          display: flex;
          flex: 1;
          align-items: center;
          .item-name {
            font-size: 1.4rem;
            font-weight: 400;
            color: ${theme.colors.slate[500]};
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item-desc {
            font-size: 1.2rem;
            color: ${theme.colors.slate[500]};
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  `}
`
