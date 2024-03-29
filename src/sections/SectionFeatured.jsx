import React from 'react'
import styled from 'styled-components'

import animateExample from '../images/animate-example.png'
import Arrow from '../svgs/arrow_outward_FILL0_wght400_GRAD0_opsz24.svg'
import GitHub from '../svgs/github-mark-white.svg'

import theme from '../theme'
import { StyledSection } from '../components/sections'
import { Heading2, Body } from '../components/typography'
import { TextChunk, SplashChunk } from '../components/chunks'
import BlurBall from '../components/BlurBall'
import ButtonLink from '../components/ButtonLink'

const CustomSplashChunk = styled(SplashChunk)`
  display: inherit;
  @media (max-width: ${theme.breakpoints.medium}px) {
    display: none;
  }
`

const StyledImage = styled.img`
  width: 440px;
`

const StyledImage2 = styled.img`
  display: none;
  @media (max-width: ${theme.breakpoints.medium}px) {
    display: inherit;
    width: 60%;
    ${'' /* padding-left: 40%; */}
    margin-bottom: ${theme.spacing.rhythm}px;
  }
  @media (max-width: ${theme.breakpoints.small}px) {
    display: inherit;
    width: 100%;
    margin-bottom: ${theme.spacing.rhythm}px;
  }
`

const WrapBellowButtonLink = styled(ButtonLink)`
  @media (max-width: 450px) {
    margin-bottom: ${theme.spacing.rhythm}px;
  }
`

const StyledArrow = styled(Arrow)`
  height: 16px;
  width: 16px;
  margin-right: -4px;
  padding-left: 4px;
`

const StyledGitHub = styled(GitHub)`
  height: 16px;
  width: 16px;
  padding-left: 8px;
`

const SectionFeatured = () => (
  <StyledSection id="featured">
    <BlurBall $right={-1 * theme.spacing.balls} $variant="secondary" />

    <CustomSplashChunk>
      <StyledImage src={animateExample} alt="A screenshot of a vector-graphics animator that runs in the web browser." />
    </CustomSplashChunk>

    <TextChunk>
      <Heading2>
        Featured Tool:<br />
        Wiggle Animate
      </Heading2>

      <Body>
        A vector-based motion graphics animation tool that enables rapid development with an intuitive user interface.
        Work directly in your web browser and access all your favorite baseline animation functions --
        nearly every property is keyframable.
        Useful for mockups, pitches, and simple animated graphics to be used as overlays, intercuts, titles, or calls-to-action.
      </Body>


      <StyledImage2 src={animateExample} alt="A screenshot of a vector-graphics animator that runs in the web browser." />

      <WrapBellowButtonLink
        newTab
        linkTo="https://wiggle.tools/animate"
        linkStyle={{ marginRight: `${theme.spacing.rhythm}px` }}
      >
        Dive In
        <StyledArrow />
      </WrapBellowButtonLink>

      <ButtonLink
        newTab
        linkTo="https://github.com/benz2012/wiggle-animate"
        outlined
        linkStyle={{ marginRight: `${theme.spacing.rhythm}px` }}
      >
        Github
        <StyledGitHub />
      </ButtonLink>

      <ButtonLink
        newTab
        linkTo="https://github.com/benz2012/wiggle-animate/blob/main/LICENSE"
        outlined
      >
        MIT License
      </ButtonLink>
    </TextChunk>
  </StyledSection>
)

export default SectionFeatured
