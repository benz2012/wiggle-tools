import React from 'react'

import { getContent } from '../helpers'
import { StyledSection } from '../components/sections'
import { Heading2, Body } from '../components/typography'
import { TextChunk, SplashChunk } from '../components/chunks'
import BlurBall from '../components/BlurBall'

const MainSection = ({ data }) => (
  <StyledSection>
    <BlurBall side="right" variant="secondary" />
    <SplashChunk>
      <div style={{ width: 200, height: 200, backgroundColor: 'orange' }} />
    </SplashChunk>
    <TextChunk>
      <Heading2 style={{ whiteSpace: 'pre-wrap' }}>{getContent(data, 'section1-header')}</Heading2>
      <Body>{getContent(data, 'section1-body')}</Body>
    </TextChunk>
  </StyledSection>
)

export default MainSection
