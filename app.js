// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import {firebase} from "/firebase/app";

// // Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";


const config = {
  apiKey: "AIzaSyDq-x2hSxsa977urMDpHjjFFO0MEqLqaAY",
  authDomain: "mindcraft-79763.firebaseapp.com",
  databaseURL: "https://mindcraft-79763.firebaseio.com",
  projectId: "mindcraft-79763",
  storageBucket: "mindcraft-79763.appspot.com",
  messagingSenderId: "481397061460",
  appId: "1:481397061460:web:4f25bca6beedbadef0fac1",
  measurementId: "G-HCFEBTDBLF"
};

firebase.initializeApp(config);
const db=firebase.firestore()
db.settings({timestampsInSnapshots: true })

db.collection('levels').get().then((snapshot) => {
  console.log(snapshot.docs);
})


module.exports = firebase
