import React from 'react'

import { getContent } from '../helpers'
import { Heading1, Body } from '../components/typography'
import { StyledMain } from '../components/sections'

const MainSection = ({ data }) => (
  <StyledMain>
    <Heading1>{getContent(data, 'section0-header')}</Heading1>
    <Body>{getContent(data, 'section0-body')}</Body>
  </StyledMain>
)

export default MainSection
