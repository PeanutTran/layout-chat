/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { css } from 'styled-components'

export const Page = styled.div`
  ${() => css``}
`

export const Container = styled.div`
  ${({ theme }) => css`
    height: calc(100vh - ${theme.heightMenu});
    display: flex;
  `}
`

export const MainContent = styled.div`
  ${({ theme }) => css`
    flex: 1;
  `}
`

export const Menu = styled.div`
  ${({ theme }) => css`
    height: 100%;
    background-color: ${theme.colors.slate[50]};
    width: 6.8rem;
    .menu-block {
      height: 5.6rem;
      padding: 0.4rem 0.5rem;
      .menu-block-2 {
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        svg {
          font-size: 1.9rem;
          color: ${theme.colors.slate[100]};
        }
        span {
          font-size: 1rem;
          height: 1rem;
          color: ${theme.colors.slate[100]};
        }
      }
    }
    .menu-block:hover {
      background-color: ${theme.colors.white};
      .menu-block-2 {
        svg {
          font-size: 1.9rem;
          color: ${theme.colors.purple};
        }
        span {
          font-size: 1rem;
          height: 1rem;
          color: ${theme.colors.purple};
        }
      }
    }
    .menu-block.active {
      .menu-block-2 {
        border-left: 2px solid ${theme.colors.purple};
        svg {
          font-size: 1.9rem;
          color: ${theme.colors.purple};
        }
        span {
          font-size: 1rem;
          height: 1rem;
          color: ${theme.colors.purple};
        }
      }
    }
  `}
`
