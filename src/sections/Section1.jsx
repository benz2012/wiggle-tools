import React from 'react'
import styled from 'styled-components'

import Arrow from '../svgs/arrow_outward_FILL0_wght400_GRAD0_opsz24.svg'

import { getContent } from '../helpers'
import { StyledSection } from '../components/sections'
import { Heading2, Body } from '../components/typography'
import { TextChunk, SplashChunk } from '../components/chunks'
import BlurBall from '../components/BlurBall'
import ButtonLink from '../components/ButtonLink'

const StyledArrow = styled(Arrow)`
  color: white;
  height: 16px;
  width: 16px;
  margin-right: -4px;
  padding-left: 4px;
`

const Section1 = ({ data }) => (
  <StyledSection>
    <BlurBall side="right" variant="secondary" />
    <SplashChunk>
      <div style={{ width: 200, height: 200, backgroundColor: 'orange' }} />
    </SplashChunk>
    <TextChunk>
      <Heading2 style={{ whiteSpace: 'pre-wrap' }}>{getContent(data, 'section1-header')}</Heading2>
      <Body>{getContent(data, 'section1-body')}</Body>
      <ButtonLink linkTo="https://wiggle.tools/animate" newTab>
        Dive In
        <StyledArrow />
      </ButtonLink>
    </TextChunk>
  </StyledSection>
)

export default Section1
