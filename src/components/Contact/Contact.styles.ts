import styled, { css } from 'styled-components'

export const Contact = styled.div`
  ${({ theme }) => css`
    height: 100%;
    background-color: ${theme.colors.slate[600]};
    width: 36rem;
    position: relative;
    &::before {
      background: linear-gradient(to right, ${theme.colors.transparent}, ${theme.colors.slate[900]});
      content: '';
      height: 100%;
      opacity: 0.2;
      pointer-events: none;
      position: absolute;
      left: -0.8rem;
      width: 0.8rem;
      z-index: ${theme.zIndex[3]};
    }
    &::after {
      background: linear-gradient(to right, ${theme.colors.transparent}, ${theme.colors.slate[900]});
      content: '';
      height: 100%;
      opacity: 0.2;
      pointer-events: none;
      position: absolute;
      right: 0;
      top: 0;
      width: 0.8rem;
      z-index: ${theme.zIndex[3]};
    }
    @media (${theme.devices.tablet}) {
      display: none;
    }
    .contact-header {
      height: 6rem;
      width: 100%;
      position: relative;
      .contact-header-content {
        padding: 1.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .btn-wrapper {
          display: flex;
          margin-right: 0.5rem;
        }
        .header-button:first-child {
          margin-right: 0.4rem;
          background-color: ${theme.colors.white};
          color: ${theme.colors.black};
        }
        .header-button {
          height: 3.2rem;
          width: 3.2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid ${theme.colors.slate[200]};
          border-radius: 50%;
          background-color: ${theme.colors.purple};
          color: ${theme.colors.white};
          svg {
            font-size: 1.6rem;
          }
        }
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
      margin-top: 0.1rem;
      .sticky {
        position: sticky;
        top: 0;
        background: ${theme.colors.slate[600]};
        z-index: ${theme.zIndex[0]};
      }
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
      .contact-item.active {
        background-color: ${theme.colors.white};
      }
    }
  `}
`
