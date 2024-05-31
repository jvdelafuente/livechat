import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBJWaB1W7PkVKL7TXqXJulov3egvVPNroc",
  authDomain: "websockets-892e2.firebaseapp.com",
  projectId: "websockets-892e2",
  storageBucket: "websockets-892e2.appspot.com",
  messagingSenderId: "555046578931",
  appId: "1:555046578931:web:f56c5b6ba696a62b0be586",
  measurementId: "G-RV291YJF2X"
}
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth, app}