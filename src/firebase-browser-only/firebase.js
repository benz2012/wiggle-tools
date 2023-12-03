import { initializeApp } from 'firebase/app'
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check'
import {
  getAuth as _getAuth,
  signInAnonymously,
  onAuthStateChanged as _onAuthStateChanged,
} from 'firebase/auth'
import {
  ref as _ref,
  push as _push,
  set as _set,
  getDatabase as _getDatabase,
  onValue as _onValue,
  off as _off
} from 'firebase/database'

class Firebase {
  static _instance

  constructor() {
    if (Firebase._instance) {
      return Firebase._instance
    }

    this.app = initializeApp({
      apiKey: "AIzaSyBNBuGnLIcqDwPz9zcT_ih101xWkAY7MxA",
      authDomain: "wiggle-tools.firebaseapp.com",
      databaseURL: "https://wiggle-tools-default-rtdb.firebaseio.com",
      projectId: "wiggle-tools",
      storageBucket: "wiggle-tools.appspot.com",
      messagingSenderId: "964928791153",
      appId: "1:964928791153:web:4abc0209e2bde0d262f1d0"
    })
    this._initializeAppCheck()

    const auth = this.getAuth()
    signInAnonymously(auth)

    Firebase._instance = this
    return Firebase._instance
  }

  _initializeAppCheck() {
    if (process.env.NODE_ENV === 'development') {
      window.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    }

    initializeAppCheck(this.app, {
      provider: new ReCaptchaEnterpriseProvider('6LeO2CEpAAAAACVx92joPBbU8Mt-NSTpUNn3fEYj'),
      isTokenAutoRefreshEnabled: true
    })
  }

  getAuth(...args) { return _getAuth(...args) }
  onAuthStateChanged(...args) { return _onAuthStateChanged(...args) }
  ref(...args) { return _ref(...args) }
  push(...args) { return _push(...args) }
  set(...args) { return _set(...args) }
  getDatabase(...args) { return _getDatabase(...args) }
  onValue(...args) { return _onValue(...args) }
  off(...args) { return _off(...args) }
}

export default function getFirebase() {
  return new Firebase()
}
