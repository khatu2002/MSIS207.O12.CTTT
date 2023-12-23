import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBUXR_8Q0Grih2kjsflIcT-HIZQbOVRer4",
    authDomain: "messaging-app-mern-9cc19.firebaseapp.com",
    projectId: "messaging-app-mern-9cc19",
    storageBucket: "messaging-app-mern-9cc19.appspot.com",
    messagingSenderId: "837898382233",
    appId: "1:837898382233:web:efe32806f4176ed2384108",
    measurementId: "G-9S6KHZ020M"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;