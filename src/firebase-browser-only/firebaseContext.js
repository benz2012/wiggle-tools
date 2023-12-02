import { createContext } from 'react'

class FirebaseMock {
  getAuth() {}
  onAuthStateChanged() {}
  ref() {}
  push() {}
  set() {}
  getDatabase() {}
  onValue() {}
  off() {}
}

export const FirebaseContext = createContext(new FirebaseMock())
