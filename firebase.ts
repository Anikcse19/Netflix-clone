// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzhn-io3Y4B2Qyqbmy7JblnHf8tgVNzlM",
    authDomain: "netflix-clone-f9d5c.firebaseapp.com",
    projectId: "netflix-clone-f9d5c",
    storageBucket: "netflix-clone-f9d5c.appspot.com",
    messagingSenderId: "812440046460",
    appId: "1:812440046460:web:ef025993e2756dfada32f9"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }