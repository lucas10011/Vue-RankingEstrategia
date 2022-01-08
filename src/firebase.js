import firebase from 'firebase'


// firebase init - add your own config here
const firebaseConfig = {
     apiKey: "AIzaSyDJqsKxKvFSI60CDNmP7y0fYz5XyRjMKLI",
    authDomain: "scoutstock-43056.firebaseapp.com",
    projectId: "scoutstock-43056",
    storageBucket: "scoutstock-43056.appspot.com",
    messagingSenderId: "555910724103",
    appId: "1:555910724103:web:ea8e6a0ad683f80282c8a2",
    measurementId: "G-VWP0X22DGX"
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();

// collection references
const backtestCollection = db.collection('backtest')


// export utils/refs
export default {
  backtestCollection,
}