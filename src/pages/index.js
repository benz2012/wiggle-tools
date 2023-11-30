import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

import theme from '../theme'
import NavBar from '../components/NavBar'
import SectionMain from '../sections/SectionMain'
import SectionFeatured from '../sections/SectionFeatured'
import SectionMission from '../sections/SectionMission'
import SectionSuite from '../sections/SectionSuite'
import SectionOffline from '../sections/SectionOffline'
import Footer from '../components/Footer'

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
      <SectionMain data={data} />
      <SectionFeatured data={data} />
      <SectionMission data={data} />
      <SectionSuite data={data} />
      <SectionOffline data={data} />
      <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Wiggle Tools - Homepage</title>
