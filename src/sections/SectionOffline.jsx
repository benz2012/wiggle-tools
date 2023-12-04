import React from 'react'
import styled from 'styled-components'

import DownloadIcon from '../svgs/download_FILL0_wght400_GRAD0_opsz24.svg'

import theme from '../theme'
import { StyledSection } from '../components/sections'
import { Heading2, Body } from '../components/typography'
import { TextChunk, SplashChunk } from '../components/chunks'
import BlurBall from '../components/BlurBall'
import Button from '../components/Button'

const OfflineSection = styled(StyledSection)`
  width: ${theme.spacing.mainWidth - 200}px;

  @media (max-width: ${theme.breakpoints.medium}px) {
    width: 90%;
  }
`

const TextChunkRight = styled(TextChunk)`
  text-align: right;

  @media (max-width: ${theme.breakpoints.medium}px) {
    text-align: center;
  }
`

const DownloadButton = styled(Button)`
  width: 180px;
  white-space: nowrap;
  overflow: hidden;
`

const StyledDownload = styled(DownloadIcon)`
  color: white;
  height: 16px;
  width: 16px;
  margin-left: -4px;
  padding-right: 4px;
`

const SectionOffline = () => (
  <OfflineSection>
    <BlurBall $top="100" $right="-300" $variant="secondary" />

    <TextChunkRight>
      <Heading2>
        Take it Offline
      </Heading2>
      <Body>
        Download all our tools to access extra superpowers, or when you don't have internet.
      </Body>
    </TextChunkRight>

    <SplashChunk style={{ gap: theme.spacing.rhythm }}>
      <DownloadButton onClick={() => {
        alert('Coming Soon! Sorry.')
      }}>
        <StyledDownload />
        Wiggle Animate
      </DownloadButton>

      <DownloadButton disabled>
        This is where
      </DownloadButton>

      <DownloadButton disabled>
        I would put more stuff
      </DownloadButton>

      <DownloadButton disabled>
        if I had it
      </DownloadButton>
    </SplashChunk>
  </OfflineSection>
)

export default SectionOffline
