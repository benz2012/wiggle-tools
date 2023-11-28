import React from 'react'
import styled from 'styled-components'

import spikes from '../images/spikes-blue.png'
import theme from '../theme'
import { getContent } from '../helpers'
import { StyledSection } from '../components/sections'
import { Heading2, Body } from '../components/typography'

const CenterWideSection = styled(StyledSection)`
  flex-direction: column;
  color: white;
  background-color: ${theme.palette.primary.main()};
  background-image: url("${spikes}");
  background-size: 50px;

  width: ${theme.spacing.mainWidth}px;
  padding-left: calc(calc(100% - ${theme.spacing.mainWidth}px) / 2);
  padding-right: calc(calc(100% - ${theme.spacing.mainWidth}px) / 2);
`

const MainSection = ({ data }) => (
  <CenterWideSection>
    <Heading2>{getContent(data, 'section2-header')}</Heading2>
    <Body style={{ textAlign: 'center' }}>{getContent(data, 'section2-body')}</Body>
  </CenterWideSection>
)

export default MainSection
