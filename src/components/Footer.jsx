import React from 'react'
import styled from 'styled-components'

import theme from '../theme'
import { Heading4 } from './typography'

const StyledFooter = styled.footer`
  width: ${theme.spacing.mainWidth}px;
  height: ${theme.spacing.navbar}px;

  padding-left: calc(calc(100% - ${theme.spacing.mainWidth}px) / 2);
  padding-right: calc(calc(100% - ${theme.spacing.mainWidth}px) / 2);
  margin-top: 100px;
  background-color: ${theme.palette.primary.main()};

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledLinkList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: ${theme.spacing.rhythm * 2}px;
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

const NavBar = () => (
  <StyledFooter>
    <StyledHeading>
      <StyledHeadingLink href="/">
        Wiggle Tools
      </StyledHeadingLink>
    </StyledHeading>

    <StyledLinkList>
      <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Made by Ben Zenker</li>
      <li>
        <ListItemLink href="https://www.linkedin.com/in/benzenker" target="_blank" rel="noreferrer noopener">
          LinkedIn
        </ListItemLink>
      </li>
    </StyledLinkList>
  </StyledFooter>
)

export default NavBar
