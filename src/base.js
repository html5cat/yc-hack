import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDdub75JFTQiRIzrBbCosV10uD4L7kRFgo",
  authDomain: "yc-hack-2018.firebaseapp.com",
  databaseURL: "https://yc-hack-2018.firebaseio.com",
  projectId: "yc-hack-2018",
  storageBucket: "yc-hack-2018.appspot.com",
  messagingSenderId: "1053697542852"
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base
