// Import the functions you need from the SDKs you need
import { initializeApp , getApps, getApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXJKIM14-lHojhMH4T-0UiKJdH2IzSylA",
  authDomain: "memlloai.firebaseapp.com",
  projectId: "memlloai",
  storageBucket: "memlloai.appspot.com",
  messagingSenderId: "376831473905",
  appId: "1:376831473905:web:903f587b73ee95f29bd150",
  measurementId: "G-QFWHQTZP8Z"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const apps = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(apps)


export { app, database,auth};
