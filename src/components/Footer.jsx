import React from 'react'
import styled from 'styled-components'

import theme from '../theme'
import { Heading4 } from './typography'

const StyledFooter = styled.footer`
  width: ${theme.spacing.mainWidth}px;

  padding-left: calc(calc(100% - ${theme.spacing.mainWidth}px) / 2);
  padding-right: calc(calc(100% - ${theme.spacing.mainWidth}px) / 2);
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 100px;
  background-color: ${theme.palette.primary.main()};

  display: flex;
  align-items: baseline;
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.medium}px) {
    width: 90%;
    padding-left: 5%;
    padding-right: 5%;
  }
`

const StyledLinkList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${theme.spacing.rhythm}px;
  padding: 0;
`

const ListItemLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`

const StyledHeading = styled(Heading4)`
  margin: 0;
`

const StyledHeadingLink = styled.a`
  text-decoration: none;
  color: white;
`

const Footer = () => (
  <StyledFooter>
    <StyledHeading>
      <StyledHeadingLink href="/">
        Wiggle Tools
      </StyledHeadingLink>
    </StyledHeading>

    <StyledLinkList>
      <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
        Made by{' '}
        <ListItemLink href="https://www.linkedin.com/in/benzenker" target="_blank" rel="noreferrer noopener">
          Ben Zenker
        </ListItemLink>
      </li>
      <li>
        <ListItemLink href="https://www.reddit.com/r/wiggletools/" target="_blank" rel="noreferrer noopener">
          Wiggle Tools - Reddit
        </ListItemLink>
      </li>
      <li>
        <ListItemLink href="https://github.com/benz2012/wiggle-animate" target="_blank" rel="noreferrer noopener">
          Wiggle Animate - Github
        </ListItemLink>
      </li>
      <li style={{ textAlign: 'right' }}>
        <ListItemLink href="https://www.flaticon.com/free-icons/special-effects" target="_blank" rel="noreferrer noopener">
          Special effects icons <br />created by Freepik - Flaticon
        </ListItemLink>
      </li>
    </StyledLinkList>
  </StyledFooter>
)

export default Footer
