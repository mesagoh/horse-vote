import * as firebase from 'firebase/app'
// import {horseItems} from 'components/HorseSelection'
// Required for side-effects
require('firebase/firestore')

var firebaseConfig = {
  apiKey: 'AIzaSyDPCrcnHOFzIGcDWsB_j9zY8YkksZaNgjU',
  authDomain: 'horse-votes.firebaseapp.com',
  databaseURL: 'https://horse-votes.firebaseio.com',
  projectId: 'horse-votes',
  storageBucket: 'horse-votes.appspot.com',
  messagingSenderId: '940252193643',
  appId: '1:940252193643:web:24795cd9c4d47a9731222e'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

let firebaseCollectionPath = 'horse-stats'
var dbHorseCollection = firebase.firestore().collection(firebaseCollectionPath)
var db = firebase.firestore()

var horseItems = [
  {key: 1, imgSrc: '1_Saltbae.jpg', name: 'Putah Ring on it'},
  {key: 2, imgSrc: '2_Vision-of-Justice.jpg', name: 'Mrak in the Saddle'},
  {key: 3, imgSrc: '3_Criminal-Mischief.jpg', name: 'Arboretum-n-Weep'},
  {key: 4, imgSrc: '4_Clays-Dialing-In.jpg', name: 'Karma Patrol'},
  {key: 5, imgSrc: '5_Miss-Brooklyn-Bralwer.jpg', name: 'Kemper Temper'},
  {key: 6, imgSrc: '6_Mia-Mischief-1.jpg', name: 'Freshman Stripe'},
  {key: 7, imgSrc: '7_TurboShaft.jpg', name: 'Healthy as a Horse'},
  {key: 8, imgSrc: '8_Buy-Sell-Hold.png', name: 'Double Major'}
]

export {db, dbHorseCollection}

export function increment (horseRef) {
  horseRef.get().then(function (doc) {
    if (doc.exists) {
      horseRef.update({
        votes: firebase.firestore.FieldValue.increment(1)
      })
    } else {
      // doc.data() will be undefined in this case
      horseRef.set({
        ErrorMessage: 'A doc for this horse was not created on startup.',
        votes: 1
      })
    }
  }).catch(function (error) {
    console.log('Error getting document:', error)
  })
}

/* This function will check if there are documents with id's 1-8. If there are, it will do nothing, if ther are not
then it will create those that are missing and initilize the votes to zero. It is not called anywhere because I want
it to be called on refresh and I dont konw where to call it. */
export function initilizeIfDNE () {
  for (let i = 0; i < 8; i++) {
    let horseRef = dbHorseCollection.doc(horseItems[i].name)
    horseRef.get().then(function (doc) {
      if (doc.exists) {

      } else {
        // doc.data() will be undefined in this case
        horseRef.set({
          votes: 0
        })
      }
    }).catch(function (error) {
      console.log('Error getting document:', error)
    })
  }
}

window.addEventListener('load', (event) => {
  initilizeIfDNE()
})
