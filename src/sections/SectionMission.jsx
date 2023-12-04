import React from 'react'
import styled from 'styled-components'

import spikes from '../images/spikes-blue.png'
import theme from '../theme'
import { StyledSection } from '../components/sections'
import { Heading2, Body } from '../components/typography'

const CenterWideSection = styled(StyledSection)`
  flex-direction: column;
  background-color: ${theme.palette.primary.main()};
  background-image: url("${spikes}");
  background-size: 50px;

  padding-left: calc(calc(100% - ${theme.spacing.mainWidth}px) / 2);
  padding-right: calc(calc(100% - ${theme.spacing.mainWidth}px) / 2);

  @media (max-width: ${theme.breakpoints.medium}px) {
    margin: 0;
    padding-left: 5%;
    padding-right: 5%;
  }
`

const RuleContainer = styled.div`
  font-size: 16px;
  text-align: center;
  width: 20%;
  margin-bottom: 24px;
`

const StyledRule = styled.hr`
  border: none;
  border-bottom: 1px solid white;
`

const SectionMission = () => (
  <CenterWideSection id="about">
    <Heading2>
      The Mission
    </Heading2>

    <Body style={{ textAlign: 'center' }}>
      The Wiggle Mission is to create powerful creative tools that are easy to access,
      enjoyable to interact with, and free to use, forever. Subscription Fees, Advertisements,
      large package downloads, and clunky user experiences: We're leaving those in the dust.<br />
      Small & useful tools that accomplish dedicated tasks, for the creative world,
      deserve to exist this way. It's that simple.
    </Body>

    <RuleContainer>
      <StyledRule />
    </RuleContainer>

    <Body style={{ textAlign: 'center', width: '84%' }}>
      Why me?<br />
      I love digital graphics.
      I spent at least a decade producing/editing videos.
      I have a unique degree that mixes TV/Film, Technology, and Imaging Science.
      I worked in Visual Effects developing plugins & scripts for a handful of media industry tools.
      I get excited reading about video codecs. I'm genuinely passionate about building great creative tools.
    </Body>

    <Body style={{ textAlign: 'center', width: '80%' }}>
      Why now?<br />
      Because in 2016 I lost my college discount on certain creative tools and was compelled to make simplistic & free versions of them.
      Because even after many years of dabbling in this project, others like Photopea give me hope that people would value similar tools.
      Because web technologies have advanced greatly over the past decade.
    </Body>

    <RuleContainer>
      <StyledRule />
    </RuleContainer>

    <Body style={{ textAlign: 'center', width: '80%' }}>
      It's unfortunate that generative AI has arrived in full-force, and likely makes this product obsolete in many ways.
      But for those who still value direct control over their creative output, we've got the tools for you.
    </Body>
  </CenterWideSection>
)

export default SectionMission
