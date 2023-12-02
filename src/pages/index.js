import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

import theme from '../theme'
import NavBar from '../components/NavBar'
import SectionMain from '../sections/SectionMain'
import SectionFeatured from '../sections/SectionFeatured'
import SectionMission from '../sections/SectionMission'
import SectionSuite from '../sections/SectionSuite'
import SectionOffline from '../sections/SectionOffline'
import Footer from '../components/Footer'

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyBNBuGnLIcqDwPz9zcT_ih101xWkAY7MxA",
  authDomain: "wiggle-tools.firebaseapp.com",
  databaseURL: "https://wiggle-tools-default-rtdb.firebaseio.com",
  projectId: "wiggle-tools",
  storageBucket: "wiggle-tools.appspot.com",
  messagingSenderId: "964928791153",
  appId: "1:964928791153:web:4abc0209e2bde0d262f1d0"
})
const database = getDatabase(app)

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
    <SectionSuite database={database} />
    <SectionOffline />
    <Footer />
  </>
)

export default IndexPage
