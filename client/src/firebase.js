
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

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
