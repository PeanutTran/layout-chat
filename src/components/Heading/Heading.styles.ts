import styled, { css } from 'styled-components'

export const Header = styled.div`
  ${({ theme }) => css`
    padding: 0.8rem ${theme.spacing[0]};
    background-color: ${theme.colors.purple};
    height: ${theme.heightMenu};
    display: flex;
    justify-content: space-between;
    input {
      width: 100%;
      height: 100%;
      padding: 0 3rem 0.1rem 1.2rem;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 0.4rem;
      font-size: 1.6rem;
      border: 0;
    }
    form {
      width: 100%;
      height: 100%;
      margin-left: 42.8rem;
      max-width: calc(100% - 85.6rem);
      @media (${theme.devices.laptop}) {
        margin-left: 22.8rem;
        max-width: calc(100% - 45.6rem);
      }
      @media (${theme.devices.tablet}) {
        margin-left: 8.8rem;
        max-width: calc(100% - 25.6rem);
      }
    }
    .header-right {
      display: flex;
      justify-content: center;
      align-items: center;
      .header-more {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          font-size: 1.8rem;
          color: ${theme.colors.white};
          cursor: pointer;
          margin: ${theme.spacing[0]} ${theme.spacing[4]};
        }
      }
    }
  `}
`
