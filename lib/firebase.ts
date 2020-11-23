import firebase from "firebase/app";
import "firebase/auth";
import "firebase/functions";

const config = {
  apiKey: "AIzaSyDjvs4rLQyfy-ymk9A9M8d3XRGCSKrJoMs",
  authDomain: "overpage-net.firebaseapp.com",
  databaseURL: "https://overpage-net.firebaseio.com",
  projectId: "overpage-net",
  storageBucket: "overpage-net.appspot.com",
  messagingSenderId: "874650566173",
};
firebase.initializeApp(config);
const functions = firebase.app().functions("asia-northeast1");

export type ContactForm = {
  name: string;
  email: string;
  content: string;
};

export function sendMail(
  contactForm: ContactForm
): Promise<firebase.functions.HttpsCallableResult> {
  const mailer = functions.httpsCallable("sendMail");
  return mailer(contactForm);
}
