import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDjvs4rLQyfy-ymk9A9M8d3XRGCSKrJoMs",
  authDomain: "overpage-net.firebaseapp.com",
  databaseURL: "https://overpage-net.firebaseio.com",
  projectId: "overpage-net",
  storageBucket: "overpage-net.appspot.com",
  messagingSenderId: "874650566173"
};
firebase.initializeApp(config);
export const functions = firebase.functions();