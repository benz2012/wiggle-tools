import React from 'react'
import styled from 'styled-components'

import theme from '../theme'
import { StyledSection } from '../components/sections'
import { Heading2, Body } from '../components/typography'
import { TextChunk, SplashChunk } from '../components/chunks'
import BlurBall from '../components/BlurBall'

const TextChunkRight = styled(TextChunk)`
  text-align: right;
`

const SectionOffline = () => (
  <StyledSection style={{ width: theme.spacing.mainWidth - 200 }}>
    <BlurBall top="100" right="-300" variant="secondary" />

    <TextChunkRight>
      <Heading2>
        Take it Offline
      </Heading2>
      <Body>
        Download all our tools to access extra superpowers, or when you don't have internet.
      </Body>
    </TextChunkRight>

    <SplashChunk>
      <div style={{ width: 200, height: 200, backgroundColor: 'purple' }} />
    </SplashChunk>
  </StyledSection>
)

export default SectionOffline
