import React from 'react'

import theme from '../theme'
import { Heading2, Body } from '../components/typography'
import { StyledMain } from '../components/sections'
import { TextChunk, SplashChunk } from '../components/chunks'
import BlurBall from '../components/BlurBall'
import ButtonLink from '../components/ButtonLink'

const SectionMain = () => (
  <StyledMain>
    <BlurBall top="0" left={-1 * theme.spacing.balls} />

    <TextChunk>
      <Heading2>
        Create Visual Assets, Fast. Free Forever.
      </Heading2>
      <Body>
        Built for the modern era, and stripped of unnecessary bloat,
        Wiggle Tools enable you to create simplistic visual assets for use in larger projects or other applications.<br />
        Free and Open-Source forever.
      </Body>
      <ButtonLink linkTo="#about">Learn More</ButtonLink>
    </TextChunk>

    <SplashChunk style={{ position: 'relative' }}>
      <div style={{ width: 320, height: 180, backgroundColor: 'rgb(15, 15, 15)', borderRadius: 12, zIndex: 100 }} />

      <div style={{
        width: 150,
        height: 150,
        backgroundColor: theme.palette.primary.main(),
        position: 'absolute',
        top: -50,
        left: 0,
        borderBottomLeftRadius: 100,
      }} />

      <div style={{
        width: 150,
        height: 150,
        backgroundColor: theme.palette.secondary.main(),
        position: 'absolute',
        top: -60,
        right: 30,
        borderTopRightRadius: 100,
      }} />

      <div style={{
        width: 120,
        height: 120,
        backgroundColor: theme.palette.tertiary.main(),
        position: 'absolute',
        bottom: -65,
        right: 0,
        borderRadius: 120,
      }} />

      <div style={{
        width: 0,
        height: 0,
        position: 'absolute',
        left: 75,
        bottom: -100,
        borderStyle: 'solid',
        borderWidth: '75px 0 75px 129.9px',
        borderColor: 'transparent transparent transparent #D6BBFB',
        transform: 'rotate(15deg)',
      }} />
    </SplashChunk>
  </StyledMain>
)

export default SectionMain
