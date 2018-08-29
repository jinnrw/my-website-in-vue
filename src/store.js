import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { config } from './firebaseConfig'

firebase.initializeApp(config);

export const db = firebase.firestore()
const settings = {
  timestampsInSnapshots: true
};
db.settings(settings);

var pagesRef = db.collection("Pages");

// the shared state object that any vue component
// can get access to
export const store = {
  Home: null,
  About: null,
  Work: null
};

pagesRef
  .get()
  .then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      store[doc.id] = doc.data()
    });
  })
  .catch(function (error) {
    console.log("Error getting documents: ", error);
  });
