import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

import theme from '../theme'
import MainSection from '../sections/MainSection'
import Section1 from '../sections/Section1'
import BlurBall from '../components/BlurBall'
import NavBar from '../components/NavBar'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.palette.background.main()};
    color: white;
    font-family: Roboto, sans-serif;
    padding: 0;
    margin: 0;
    overflow: hidden;
    overflow-y: scroll;
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql` query { allFile { nodes {
    name
    childrenPlainText { content }
  }}}`)

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <MainSection data={data} />
      <Section1 data={data} />
      <BlurBall top="50" side="left" />
      <BlurBall top="500" side="right" variant="secondary" />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Wiggle Tools - Homepage</title>
