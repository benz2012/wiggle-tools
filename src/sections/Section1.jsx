import React from 'react'

import { getContent } from '../helpers'
import { StyledSection } from '../components/sections'
import { Heading2, Body } from '../components/typography'

const MainSection = ({ data }) => (
  <StyledSection>
    <Heading2>{getContent(data, 'section1-header')}</Heading2>
    <Body>{getContent(data, 'section1-body')}</Body>
  </StyledSection>
)

export default MainSection
