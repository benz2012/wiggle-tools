import '@fontsource/roboto'
import '@fontsource/roboto-slab/700.css'
import { initializeApp } from 'firebase/app'
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check'

export const onClientEntry = () => {
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

  // Create a ReCaptchaEnterpriseProvider instance using reCAPTCHA Enterprise
  if (process.env.NODE_ENV !== 'development') {
    initializeAppCheck(app, {
      provider: new ReCaptchaEnterpriseProvider('6LeO2CEpAAAAACVx92joPBbU8Mt-NSTpUNn3fEYj'),
      isTokenAutoRefreshEnabled: true
    })
  } else {
    console.log('Skipping ReCaptchaEnterprise AppCheck')
  }
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
