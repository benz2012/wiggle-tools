import React from 'react'
import styled from 'styled-components'

import theme from '../theme'
import { Heading4 } from './typography'

const StyledNav = styled.nav`
  width: ${theme.spacing.mainWidth}px;
  height: ${theme.spacing.navbar}px;

  padding-left: calc(calc(100% - ${theme.spacing.mainWidth}px) / 2);
  padding-right: calc(calc(100% - ${theme.spacing.mainWidth}px) / 2);

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
  letter-spacing: 1px;

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
  color: ${theme.palette.primary.main()};
  letter-spacing: 1px;
`

const NavBar = () => (
  <StyledNav>
    <StyledHeading>
      <StyledHeadingLink href="/">
        Wiggle Tools
      </StyledHeadingLink>
    </StyledHeading>

    <StyledLinkList>
      <li><ListItemLink href="#tools">Tools</ListItemLink></li>
      <li><ListItemLink href="#about">About</ListItemLink></li>
    </StyledLinkList>
  </StyledNav>
)

export default NavBar
