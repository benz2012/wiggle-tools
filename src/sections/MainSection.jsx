import React from 'react'
import styled from 'styled-components'

import theme from '../theme'
import { getContent } from '../helpers'
import { Heading1, Body } from '../components/typography'

const StyledMain = styled.main`
  padding-top: ${theme.spacing.section}px;
  padding-bottom: ${theme.spacing.section}px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainSection = ({ data }) => (
  <StyledMain>
    <Heading1>{getContent(data, 'section0-header')}</Heading1>
    <Body>{getContent(data, 'section0-body')}</Body>
  </StyledMain>
)

export default MainSection
