import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { getContent } from '../helpers'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #282c34;
    color: white;
    font-family: Roboto, sans-serif;
  }
`

const MainPage = styled.main`
  padding: 96px;
`

const Heading1 = styled.h1`
  font-family: 'Roboto Slab', sans-serif;
`

const StyledLink = styled.a`
  color: #61dafb;
  &:hover {
    color: #40ffff;
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          name
          childrenPlainText {
            content
          }
        }
      }
    }
  `)

  const content = getContent(data, 'section1-header')
  console.log(content)

  return (
    <>
      <GlobalStyle />
      <MainPage>
        <Heading1>Wiggle Tools Homepage</Heading1>
        <StyledLink href="https://wiggle.tools/animate">Wiggle Animate</StyledLink>
      </MainPage>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Wiggle Tools - Homepage</title>
