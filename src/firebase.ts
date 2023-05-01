import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'
import { getAnalytics } from 'firebase/analytics'
import { getPerformance } from 'firebase/performance'
// ... other firebase imports

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyATmqL10OsaaZmqgxoF8TH3-ylj01VOVMQ',
  authDomain: 'test-7e9fa.firebaseapp.com',
  projectId: 'test-7e9fa',
  storageBucket: 'test-7e9fa.appspot.com',
  messagingSenderId: '665990196673',
  appId: '1:665990196673:web:3c6614ecbc957cb10a5340',
  measurementId: 'G-EZ3SLW3XW3',
})

// used for the databas refs
const analytics = getAnalytics(firebaseApp)
const perf = getPerformance(firebaseApp)

