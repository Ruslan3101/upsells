// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXwWFrBgOuZtfEt3Vii6FHQuH3ccqGAso",
  authDomain: "upsells-81db3.firebaseapp.com",
  projectId: "upsells-81db3",
  storageBucket: "upsells-81db3.appspot.com",
  messagingSenderId: "166038823574",
  appId: "1:166038823574:web:527684c2bd9dee8cda98b7"
};

// Initialize Firebase
const connectFirebase = initializeApp(firebaseConfig);
const db = getFirestore(connectFirebase);

export default db;