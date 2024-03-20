// import firebase from 'firebase/app'
// import 'firebase/auth'

// const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMIAN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// })

// export const auth =app.auth()
// export default app 


import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom'

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMIAN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    apiKey: "AIzaSyAEWs16waKI9RjZ_WeLUyhsM7ANjZ4qyMc",
    authDomain: "amenity-fccb2.firebaseapp.com",
    projectId: "amenity-fccb2",
    storageBucket: "amenity-fccb2.appspot.com",
    messagingSenderId: "166849501605",
    appId: "1:166849501605:web:4fe1422cf9e44ad58e704c",
    measurementId: "G-Z88EXHKJSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider();
export const signInWithGoogle = ()=>{
    signInWithPopup(auth,provider).then((result)=>{

        
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        localStorage.setItem('name',name);
        localStorage.setItem('email',email);
        localStorage.setItem('profilePic',profilePic);


    }).catch((error)=>{console.log(error)})
}