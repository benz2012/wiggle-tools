import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import theme from '../theme'
import { randSign, randInt } from '../utils'

import BlurBall from '../components/BlurBall'
import ButtonLink from '../components/ButtonLink'
import { Heading2, Body } from '../components/typography'
import { StyledMain } from '../components/sections'
import { TextChunk, SplashChunk } from '../components/chunks'
import { Block1, Block2, Block3, Block4 } from '../components/colorBlocks'

const GIFContainer = styled.figure`
  width: 320px;
  height: 180px;
  z-index: 100;
  background-color: ${theme.palette.background.dark()};
  border-radius: ${theme.spacing.rhythm}px;
  overflow:hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const WiggleText = styled.div`
  font-family: 'Roboto Slab', sans-serif;
  font-weight: 700;
  font-size: 32px;
  letter-spacing: 2px;
  color: ${props => props.color};
  transition: transform 500ms ease;
  z-index: 110;

  @media (prefers-reduced-motion) {
    z-index: 111;
  }
`

const SectionMain = () => {
  const wiggleText1 = useRef()
  const wiggleText2 = useRef()
  const wiggleText3 = useRef()
  const wiggleTexts = { wiggleText1, wiggleText2, wiggleText3 }

  useEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps */
    const timeoutIds = { wiggleText1: null, wiggleText2: null, wiggleText3: null }

    Object.keys(wiggleTexts).forEach((wiggleId) => {
      const oneWig = () => {
        clearTimeout(timeoutIds[wiggleText1])

        const randX = randSign() * randInt(0, 10)
        const randY = randSign() * randInt(0, 10)
        const randR = randSign() * randInt(0, 15)
        wiggleTexts[wiggleId].current.style.transform = `translate(${randX}px, ${randY}px) rotate(${randR}deg)`

        const nextWait = randInt(200, 400)
        setTimeout(oneWig, nextWait)
      }

      // Only Start the Animation Loop if z-index is 100
      // z-index of 111 represents reduced motion, so we never start the animation
      const zIndexForElm = window.getComputedStyle(wiggleTexts[wiggleId].current)['z-index']
      if (zIndexForElm === '110') { oneWig() }
    })

    return () => {
      Object.values(timeoutIds).forEach(clearTimeout)
    }
  }, [])

  return (
    <StyledMain>
      <BlurBall $top="0" $left={-1 * theme.spacing.balls} />

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
        <GIFContainer>
          <WiggleText ref={wiggleText1} color={theme.palette.tertiary.main()}>WIGGLE</WiggleText>
          <WiggleText ref={wiggleText2} color="#D6BBFB">WITH</WiggleText>
          <WiggleText ref={wiggleText3} color={theme.palette.secondary.main()}>IT</WiggleText>
        </GIFContainer>

        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
      </SplashChunk>
    </StyledMain>
  )
}

export default SectionMain
