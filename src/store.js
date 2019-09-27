import * as firebase from 'firebase/app'
// Required for side-effects
require('firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDPCrcnHOFzIGcDWsB_j9zY8YkksZaNgjU',
  authDomain: 'horse-votes.firebaseapp.com',
  databaseURL: 'https://horse-votes.firebaseio.com',
  projectId: 'horse-votes',
  storageBucket: '',
  messagingSenderId: '940252193643',
  appId: '1:940252193643:web:24795cd9c4d47a9731222e'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

let firebaseCollectionPath = 'horse-stats'

export var dbHorseCollection = firebase.firestore().collection(firebaseCollectionPath)

// horseRef is a docuement.
export function increment (horseRef) {
  horseRef.get().then(function (doc) {
    if (doc.exists) {
      horseRef.update({
        NumberOfVotes: firebase.firestore.FieldValue.increment(1)
      })
    } else {
      // doc.data() will be undefined in this case
      horseRef.set({
        ErrorMessage: 'A doc for this horse was not created on startup.',
        NumberOfVotes: 1
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
  for (let horseIndex = 1; horseIndex < 9; horseIndex++) {
    let horseRef = dbHorseCollection.doc(horseIndex.toString())
    horseRef.get().then(function (doc) {
      if (doc.exists) {

      } else {
        // doc.data() will be undefined in this case
        horseRef.set({
          NumberOfVotes: 0
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

/* This function will delete all of the docuements, and thus the collection its self, form the collection specified by
firebaseCollectionPath. */
/* This is code that I wrote to delete the data. It does it on unlode, but I dont want to do it there anyway. So, I will
return to this if I want.
export function deleteHorserVotesCollection () {
  for (let horseIndex = 1; horseIndex < 9; horseIndex++) {
    let horseRef = dbHorseCollection.doc(horseIndex.toString())

    horseRef.get().then(function (doc) {
      if (doc.exists) {
        horseRef.delete().then(function () {
          console.log('Document successfully deleted!')
        }).catch(function (error) {
          console.error('Error removing document: ', error)
        })
      } else {
        // doc.data() will be undefined in this case
      }
    }).catch(function (error) {
      console.log('Error getting document:', error)
    })
  }
  return null
}
window.addEventListener('onunload', function () {
  deleteHorserVotesCollection()
})
 */
