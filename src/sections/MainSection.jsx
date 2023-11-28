import React from 'react'

import { getContent } from '../helpers'
import { Heading2, Body } from '../components/typography'
import { StyledMain } from '../components/sections'
import { TextChunk, SplashChunk } from '../components/chunks'
import BlurBall from '../components/BlurBall'
import ButtonLink from '../components/ButtonLink'

const MainSection = ({ data }) => (
  <StyledMain>
    <BlurBall top="0" side="left" />
    <TextChunk>
      <Heading2>{getContent(data, 'section0-header')}</Heading2>
      <Body style={{ whiteSpace: 'pre-wrap' }}>{getContent(data, 'section0-body')}</Body>
      <ButtonLink linkTo="#about">Learn More</ButtonLink>
    </TextChunk>
    <SplashChunk>
      <div style={{ width: 200, height: 200, backgroundColor: 'red' }} />
    </SplashChunk>
  </StyledMain>
)

export default MainSection
