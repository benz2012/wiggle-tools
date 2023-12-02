import '@fontsource/roboto'
import '@fontsource/roboto-slab/700.css'
import React from 'react'

import getFirebase from './src/firebase-browser-only/firebase'
import { FirebaseContext } from './src/firebase-browser-only/firebaseContext'

export const wrapRootElement = ({ element }) => {
  // Need this module to be isolated to gatsby-browser in order to prevent
  // Firebase from being evaluted/instantiated during SSR/SSG -- which crashes gatsby
  const firebase = getFirebase()
  return (
    <FirebaseContext.Provider value={firebase}>
      {element}
    </FirebaseContext.Provider>
  )
}

export const onInitialClientRender = () => {
  const { hash } = window.location
  if (hash.length > 1) {
    const id = hash.substring(1)
    const elm = document.getElementById(id)
    if (elm) {
      elm.scrollIntoView()
    }
  }
}
