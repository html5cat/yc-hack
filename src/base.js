import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCY2fizPxkX10XvQp0GILwlsWQ91Zq5VSI",
  authDomain: "catch-of-the-day-96938.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-96938.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base