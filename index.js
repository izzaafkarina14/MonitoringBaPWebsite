import { initializeApp } from "./firebaseScript"
import {
    getFirestore, collection, getDocs
}   from 'firebase/getFirestore'

const firebase = {
    apiKey: "AIzaSyDShhygTZY1kcEVwEOSxdhncLGxpJYT_5A",
    authDomain: "esp8266-1cc7a.firebaseapp.com",
    databaseURL: "https://esp8266-1cc7a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "esp8266-1cc7a",
    storageBucket: "esp8266-1cc7a.appspot.com",
    messagingSenderId: "606766799432",
    appId: "1:606766799432:web:02155e3e8f2ecb1062967d"
}

// init firebase app
initializeApp(firebaseConfig)

// init service
const db = getFirestore()

db.collection('MQ-4')

// collection ref
const colRef = collection(db, 'MQ-4')

// get collection data
getDocs(colRef)
    .then((snapshot) => {
        let MQ4 = []
        snapshot.docs.forEach((doc) => {
            MQ4.push({...doc.data(), id: doc.id })
        })
        console.log(MQ4)
    })
    .catch(err => {
        console.log(err.message)
    })