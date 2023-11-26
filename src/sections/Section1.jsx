import React from 'react'
import styled from 'styled-components'

import theme from '../theme'
import { getContent } from '../helpers'
import { Heading2, Body } from '../components/typography'

const StyledSection = styled.section`
  padding-top: ${theme.spacing.section}px;
  padding-bottom: ${theme.spacing.section}px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainSection = ({ data }) => (
  <StyledSection>
    <Heading2>{getContent(data, 'section1-header')}</Heading2>
    <Body>{getContent(data, 'section1-body')}</Body>
  </StyledSection>
)

export default MainSection
