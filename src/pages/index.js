import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #282c34;
  }
`

const MainPage = styled.main`
  color: white;
  padding: 96px;
  font-family: -apple-system, Roboto, sans-serif, serif;
`

const StyledLink = styled.a`
  color: #61dafb;
  &:hover {
    color: #40ffff;
  }
`

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <MainPage>
        <h1>Wiggle Tools Homepage</h1>
        <StyledLink href="https://wiggle.tools/animate">Wiggle Animate</StyledLink>
      </MainPage>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Wiggle Tools - Homepage</title>
