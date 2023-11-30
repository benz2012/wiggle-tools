import React from 'react'
import styled from 'styled-components'

import animateExample from '../images/animate-example.png'
import Arrow from '../svgs/arrow_outward_FILL0_wght400_GRAD0_opsz24.svg'

import theme from '../theme'
import { StyledSection } from '../components/sections'
import { Heading2, Body } from '../components/typography'
import { TextChunk, SplashChunk } from '../components/chunks'
import BlurBall from '../components/BlurBall'
import ButtonLink from '../components/ButtonLink'

const StyledImage = styled.img`
  width: 440px;
`

const StyledArrow = styled(Arrow)`
  height: 16px;
  width: 16px;
  margin-right: -4px;
  padding-left: 4px;
`

const SectionFeatured = () => (
  <StyledSection id="featured">
    <BlurBall right={-1 * theme.spacing.balls} variant="secondary" />

    <SplashChunk>
      <StyledImage src={animateExample} alt="A screenshot of a vector-graphics animator that runs in the web browser." />
    </SplashChunk>

    <TextChunk>
      <Heading2>
        Featured Tool:<br />
        Wiggle Animate
      </Heading2>

      <Body>
        A vector-based motion graphics animation tool that enables rapid development with an intuitive user interface.
        Work directly in your web broser and access all your favorite baseline animation functions --
        nearly every property is keyframable.
        Useful for mockups, pitches, and simple animated graphics to be used as overlays, intercuts, titles, or calls-to-action.
      </Body>

      <ButtonLink linkTo="https://wiggle.tools/animate" newTab>
        Dive In
        <StyledArrow />
      </ButtonLink>
    </TextChunk>
  </StyledSection>
)

export default SectionFeatured
