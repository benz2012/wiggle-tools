import React, { useState } from 'react'
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

const CreditsFooter = styled(StyledFooter)`
  margin: 0;
  justify-content: flex-end;
`

const NavBar = () => {
  const [credits, showCredits] = useState(false)

  return (
    <>
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
          <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            <ListItemLink href="#credits" onClick={() => showCredits(!credits)}>
              {credits ? 'Hide Credits' : 'Show Credits'}
            </ListItemLink>
          </li>
        </StyledLinkList>
      </StyledFooter>

      {credits && (
        <CreditsFooter>
          <ul>
            <li><a href="https://www.flaticon.com/free-icons/special-effects" title="special effects icons">Special effects icons created by Freepik - Flaticon</a></li>
          </ul>
        </CreditsFooter>
      )}
    </>
  )
}

export default NavBar
