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

  @media (max-width: ${theme.breakpoints.medium}px) {
    width: 90%;
    flex-direction: column;
    padding-top: ${theme.spacing.section_medium}px;
    padding-bottom: ${theme.spacing.section_medium}px;
  }
`

export const StyledMain = styled.main`
  ${common}
`

export const StyledSection = styled.section`
  ${common}
`
