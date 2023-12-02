import '@fontsource/roboto'
import '@fontsource/roboto-slab/700.css'
import { initializeApp } from 'firebase/app'

export const onClientEntry = () => {
  // Initialize Firebase
  initializeApp({
    apiKey: "AIzaSyBNBuGnLIcqDwPz9zcT_ih101xWkAY7MxA",
    authDomain: "wiggle-tools.firebaseapp.com",
    databaseURL: "https://wiggle-tools-default-rtdb.firebaseio.com",
    projectId: "wiggle-tools",
    storageBucket: "wiggle-tools.appspot.com",
    messagingSenderId: "964928791153",
    appId: "1:964928791153:web:4abc0209e2bde0d262f1d0"
  })
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
