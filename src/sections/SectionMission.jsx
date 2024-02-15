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
      enjoyable to interact with, and free to use, forever. Subscription fees, aggressive advertisements, exports with watermarks,
      large package downloads, and clunky user experiences: We're leaving those behind.
      Small & useful tools that accomplish dedicated tasks, for the creative world,
      deserve to exist this way.
    </Body>

    <Body style={{ textAlign: 'center' }}>
      So many creative tools on the market operate like a giant toolbox, shoving too many features in your face.
      This creates a steep learning curve, sluggish startup times, and general frustration that gets in your way when trying to create a simple visual.
      The tools we build aim to equip you with a core feature, and nothing else. We hope to become your favorite screwdriver within that giant toolbox.
    </Body>

    <RuleContainer>
      <StyledRule />
    </RuleContainer>

    <Body style={{ textAlign: 'center', width: '80%' }}>
      We acknowledge that generative AI has arrived in full force, and likely makes these products obsolete.
      But for those who still value direct control over their creative output, we've got the tools for you.
    </Body>
  </CenterWideSection>
)

export default SectionMission
