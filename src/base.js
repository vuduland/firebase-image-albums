import firebase from 'firebase'
import 'firebase/storage'

export const app = firebase.initializeApp({
  "projectId": "f-albums",
  "appId": "1:513742019795:web:51fe3002ec5345205b0826",
  "databaseURL": "https://f-albums.firebaseio.com",
  "storageBucket": "f-albums.appspot.com",
  "locationId": "us-central",
  "apiKey": "AIzaSyA7oZHTsGah0wPrEjqGBdfaz4kYdXry9K0",
  "authDomain": "f-albums.firebaseapp.com",
  "messagingSenderId": "513742019795"
});

