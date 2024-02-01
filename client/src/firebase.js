
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from 'firebase/firebase-firestore';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCyFY7NavGfIlvqFxGG1Hwg0HaVDouE3w",
  authDomain: "interview-note-app.firebaseapp.com",
  projectId: "interview-note-app",
  storageBucket: "interview-note-app.appspot.com",
  messagingSenderId: "75903922539",
  appId: "1:75903922539:web:61f7da96ad66554fb09c2e",
  measurementId: "G-0YBXZTWE5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const DB = getDatabase(app);

// const analytics = getAnalytics(app);
