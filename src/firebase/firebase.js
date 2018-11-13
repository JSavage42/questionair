import * as firebase from 'firebase';

 // Initialize Firebase
const config = {
  apiKey: "AIzaSyC6bP04YvBrK70SLjBroGnSMmwOJ42rfaU",
  authDomain: "question-air-test.firebaseapp.com",
  databaseURL: "https://question-air-test.firebaseio.com",
  projectId: "question-air-test",
  storageBucket: "question-air-test.appspot.com",
  messagingSenderId: "1093848224065"
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };