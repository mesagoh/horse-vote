import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyBYu_-c-ff3PBC9diJ1z-u8HgPmU0jGrl0",
  authDomain: "horse-vote.firebaseapp.com",
  databaseURL: "https://horse-vote.firebaseio.com",
  projectId: "horse-vote",
  storageBucket: "horse-vote.appspot.com",
  messagingSenderId: "565560028967"
};
firebase.initializeApp(config);