import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDGWpus51kVZSpx95LsyNb9TSljooWD_sE",
  authDomain: "finance-a707a.firebaseapp.com",
  databaseURL: "https://finance-a707a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "finance-a707a",
  storageBucket: "finance-a707a.appspot.com",
  messagingSenderId: "1031928004162",
  appId: "1:1031928004162:web:21342b2fffe9c246ed77db",
  measurementId: "G-9N9PW5B0K2"
};

const app = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const auth = app.auth()
