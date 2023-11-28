import styled, { css } from 'styled-components'

const common = css`
  color: white;
`

const commonHeader = css`
  ${common}
  font-family: 'Roboto Slab', sans-serif;
  font-weight: 700;
`

export const Heading1 = styled.h1`
  ${commonHeader}
  font-size: 48px;
`

export const Heading2 = styled.h2`
  ${commonHeader}
  font-size: 40px;
`

export const Heading3 = styled.h3`
  ${commonHeader}
  font-size: 32px;
`

export const Heading4 = styled.h4`
  ${commonHeader}
  font-size: 24px;
`

export const Heading5 = styled.h5`
  ${commonHeader}
  font-size: 20px;
`

export const Heading6 = styled.h6`
  ${commonHeader}
  font-size: 18px;
`

export const Body = styled.p`
  ${common}
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 400;
`
