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
  &:root {
    color-scheme: dark;
  }
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

export const Head = () => (
  <>
    <html lang="en" />
    <title>Wiggle Tools - Homepage</title>
    <meta name="description" content="Create Visual Assets, Fast. Free Forever." />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="apple-mobile-web-app-title" content="Wiggle Tools" />
    <meta name="application-name" content="Wiggle Tools" />
    <meta name="msapplication-TileColor" content="#00aba9" />
    <meta name="theme-color" content="#202124" />
    <meta property="og:title" content="Wiggle Tools" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://wiggle.tools" />
    <meta property="og:description" content="Create Visual Assets, Fast. Free Forever." />
  </>
)

const IndexPage = () => (
  <>
    <GlobalStyle />
    <NavBar />
    <SectionMain />
    <SectionFeatured />
    <SectionMission />
    <SectionSuite />
    <SectionOffline />
    <Footer />
  </>
)

export default IndexPage
