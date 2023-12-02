import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { getAuth, signInAnonymously } from 'firebase/auth'

import theme from '../theme'
import NavBar from '../components/NavBar'
import SectionMain from '../sections/SectionMain'
import SectionFeatured from '../sections/SectionFeatured'
import SectionMission from '../sections/SectionMission'
import SectionSuite from '../sections/SectionSuite'
import SectionOffline from '../sections/SectionOffline'
import Footer from '../components/Footer'

const auth = getAuth()
signInAnonymously(auth)

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

export const Head = () => <title>Wiggle Tools - Homepage</title>

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
