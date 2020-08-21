import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDclJrf78cei8JrFh8zy7GaTMM-0LVmpXQ",
    authDomain: "hackathon2020-6329e.firebaseapp.com",
    databaseURL: "https://hackathon2020-6329e.firebaseio.com",
    projectId: "hackathon2020-6329e",
    storageBucket: "hackathon2020-6329e.appspot.com",
    messagingSenderId: "748039884631",
    appId: "1:748039884631:web:e179379b023ecf4840f812"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
//const user = firebase.auth().currentUser

export {db, auth}