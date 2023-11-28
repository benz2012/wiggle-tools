import styled, { css } from "styled-components"

import theme from '../theme'

const common = css`
  position: relative;
  width: ${theme.spacing.mainWidth}px;
  margin: auto;
  padding-top: ${theme.spacing.section}px;
  padding-bottom: ${theme.spacing.section}px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledMain = styled.main`
  ${common}
`

export const StyledSection = styled.section`
  ${common}
`
