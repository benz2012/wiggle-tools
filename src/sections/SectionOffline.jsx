import React from 'react'
import styled from 'styled-components'

import theme from '../theme'
import { getContent } from '../helpers'
import { StyledSection } from '../components/sections'
import { Heading2, Body } from '../components/typography'
import { TextChunk, SplashChunk } from '../components/chunks'
import BlurBall from '../components/BlurBall'

const TextChunkRight = styled(TextChunk)`
  text-align: right;
`

const SectionOffline = ({ data }) => (
  <StyledSection style={{ width: theme.spacing.mainWidth - 200 }}>
    <BlurBall top="100" side="right" variant="secondary" />
    <TextChunkRight>
      <Heading2>{getContent(data, 'section4-header')}</Heading2>
      <Body>{getContent(data, 'section4-body')}</Body>
    </TextChunkRight>
    <SplashChunk>
      <div style={{ width: 200, height: 200, backgroundColor: 'purple' }} />
    </SplashChunk>
  </StyledSection>
)

export default SectionOffline
