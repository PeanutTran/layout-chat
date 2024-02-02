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

export const SectionLeft = styled.div`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
  `}
`

export const SectionRight = styled.div`
  ${({ theme }) => css`
    height: 100%;
    flex: 1;
    background-color: ${theme.colors.slate[400]};
    display: flex;
    flex-direction: column;
  `}
`
