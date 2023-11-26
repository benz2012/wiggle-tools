import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

import theme from '../theme'
import MainSection from '../sections/MainSection'
import Section1 from '../sections/Section1'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.palette.background};
    color: white;
    font-family: Roboto, sans-serif;
    padding: 0;
    margin: 0;
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
      <MainSection data={data} />
      <Section1 data={data} />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Wiggle Tools - Homepage</title>
