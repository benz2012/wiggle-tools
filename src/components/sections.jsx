import styled, { css } from "styled-components"

import theme from '../theme'

const common = css`
  padding-top: ${theme.spacing.section}px;
  padding-bottom: ${theme.spacing.section}px;
  width: ${theme.spacing.mainWidth}px;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledMain = styled.main`
  ${common}
`

export const StyledSection = styled.section`
  ${common}
`
