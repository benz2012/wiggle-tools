import React from 'react'
import styled from 'styled-components'

import Arrow from '../svgs/arrow_outward_FILL0_wght400_GRAD0_opsz24.svg'

import theme from '../theme'
import BlurBall from '../components/BlurBall'
import ButtonLink from '../components/ButtonLink'
import { StyledSection } from '../components/sections'
import { Heading2, Heading6, Body } from '../components/typography'

const CenterWideSection = styled(StyledSection)`
  flex-direction: column;

  padding-left: calc(calc(100% - ${theme.spacing.mainWidth}px) / 2);
  padding-right: calc(calc(100% - ${theme.spacing.mainWidth}px) / 2);
`

const ToolsContainer = styled.div`
  margin-top: ${theme.spacing.rhythm * 2}px;

  display: flex;
  gap: ${theme.spacing.rhythm * 2}px;
`

const ToolContainer = styled.div`
  width: ${theme.spacing.card}px;
  background-color: ${theme.palette.background.dark(0.9)};
  border-radius: 16px;
  padding: ${theme.spacing.rhythm}px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const FakeIcon = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 120px;
  background-color: ${theme.palette.secondary.main()};
  margin: ${theme.spacing.rhythm}px 0px;
`

const Description = styled(Body)`
  text-align: center;
  font-size: 14px;
  margin-bottom: 12px;
`

const StyledArrow = styled(Arrow)`
  height: 16px;
  width: 16px;
  margin-right: -4px;
  padding-left: 4px;
`

const SectionSuite = () => (
  <CenterWideSection id="tools">
    <BlurBall top="150" left="0" />

    <Heading2>
      The Wiggle Suite
    </Heading2>

    <ToolsContainer>
      <ToolContainer>
        <FakeIcon />
        <Heading6>Wiggle Animate</Heading6>
        <Description>
          A vector-based motion graphics animation tool. Dozens of properties, keyframe control, and curve editors.
        </Description>
        <ButtonLink outlined fullWidth linkTo="https://wiggle.tools/animate" newTab>
          Open Tool
          <StyledArrow />
        </ButtonLink>
      </ToolContainer>

      <ToolContainer>
        <FakeIcon />
        <Heading6>Wiggle Edit</Heading6>
        <Description>Here is one sentance about the product, and some words</Description>
      </ToolContainer>

      <ToolContainer>
        <FakeIcon />
        <Heading6>Wiggle Pixel</Heading6>
        <Description>Here is one sentance about the product, and some words</Description>
      </ToolContainer>

      <ToolContainer>
        <FakeIcon />
        <Heading6>Wiggle Convert</Heading6>
        <Description>Here is one sentance about the product, and some words</Description>
      </ToolContainer>
    </ToolsContainer>
  </CenterWideSection>
)

export default SectionSuite
