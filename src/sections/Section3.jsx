import React from 'react'
import styled from 'styled-components'

import theme from '../theme'
import BlurBall from '../components/BlurBall'
import { getContent } from '../helpers'
import { StyledSection } from '../components/sections'
import { Heading2, Heading6, Body } from '../components/typography'

const CenterWideSection = styled(StyledSection)`
  flex-direction: column;

  width: ${theme.spacing.mainWidth}px;
  padding-left: calc(calc(100% - ${theme.spacing.mainWidth}px) / 2);
  padding-right: calc(calc(100% - ${theme.spacing.mainWidth}px) / 2);
`

const ToolsContainer = styled.div`
  margin-top: ${theme.spacing.rhythm * 2}px;

  display: flex;
  gap: ${theme.spacing.rhythm * 2}px;
`

const ToolItem = styled.div`
  width: ${theme.spacing.card}px;
  height: 276px;
  background-color: ${theme.palette.background.dark(0.9)};
  border-radius: 8px;
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
`

const Section3 = ({ data }) => (
  <CenterWideSection id="tools">
    <BlurBall side="left" top="150" />
    <Heading2>{getContent(data, 'section3-header')}</Heading2>

    <ToolsContainer>
      <ToolItem>
        <FakeIcon />
        <Heading6>Wiggle Animate</Heading6>
        <Description>Here is one sentance about the product, and some words</Description>
      </ToolItem>

      <ToolItem>
        <FakeIcon />
        <Heading6>Wiggle Edit</Heading6>
        <Description>Here is one sentance about the product, and some words</Description>
      </ToolItem>

      <ToolItem>
        <FakeIcon />
        <Heading6>Wiggle Pixel</Heading6>
        <Description>Here is one sentance about the product, and some words</Description>
      </ToolItem>

      <ToolItem>
        <FakeIcon />
        <Heading6>Wiggle Convert</Heading6>
        <Description>Here is one sentance about the product, and some words</Description>
      </ToolItem>
    </ToolsContainer>
  </CenterWideSection>
)

export default Section3
