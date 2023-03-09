// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAYTmjTvFTGkBcELGakFC31Ie45ovzYq2Y',
  authDomain: 'web-movie-32db7.firebaseapp.com',
  projectId: 'web-movie-32db7',
  storageBucket: 'web-movie-32db7.appspot.com',
  messagingSenderId: '650030563141',
  appId: '1:650030563141:web:51d63402741795b3e9082c',
  measurementId: 'G-MQ42RCG20L'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { auth, provider }
