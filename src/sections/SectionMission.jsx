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

  width: ${theme.spacing.mainWidth}px;
  padding-left: calc(calc(100% - ${theme.spacing.mainWidth}px) / 2);
  padding-right: calc(calc(100% - ${theme.spacing.mainWidth}px) / 2);
`

const SectionMission = () => (
  <CenterWideSection id="about">
    <Heading2>
      The Mission
    </Heading2>

    <Body style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>
      Wouldn't it be great if you had access to basic creativity software without paying awful subscriptions fees to annoying corporate giants? Are you fed up with companies that have for too long taken advantage of their customers, and lead to the Enshittification of the Internet?! Have you ever wondered why thousands of incredible software projects exist for free, creating a software backbone of our computers and our internet, but "I can't export this damn video without a watermark"?
      <br /><br />
      Web technologies have advanced greatly over the past few decades to the point where it's very easy to build creative apps directly in the web. You've likely seen many of these before, but unfortunatley big software applications require lots of engineers to build, and so we're stuck with more software that requires payment to unlock it's full potential. To do otherwise would threaten the livelihoods of the engineers that build them -- and that's not what this mission is about.
      <br /><br />
      The Wiggle mission is about taking the one thing we can offer this world, our time, and investing it into small & useful tools that accomplish dedicated tasks in the creative world. Many developers have done this before, but the road to meaningful and intuitve creative apps is not always easy. We've received awesome tools like Gimp and VLC, but are left to cope with UI clunkiness, feature bloat, and occasionally spicy forum arguments about ideological opinons on how software should be built.
      <br /><br />
      And so, instead of being fed-up with the state of the internet, software, and capitalism-driven models, I've decided to do something about it. This is why Wiggle Tools will be Open-Source and Free Forever, with No Ads. I'm sick of those things myself, so why would I create something I'm passionite about just to push the same on my users. While everyone else is busy trying to make money, I'll be busy trying to make great creative tools on the web.
    </Body>
  </CenterWideSection>
)

export default SectionMission
