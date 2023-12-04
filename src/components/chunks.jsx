import styled from "styled-components"

import theme from '../theme'

export const TextChunk = styled.div`
  width: 45%;

  @media (max-width: ${theme.breakpoints.medium}px) {
    width: 100%;
  }
`

export const SplashChunk = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.medium}px) {
    width: 100%;
  }
`
