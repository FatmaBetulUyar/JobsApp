import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAZEfGodMVwg4YBJ40rFXghOTv7QrXTLDw",
    authDomain: "jobsapp-1ca79.firebaseapp.com",
    projectId: "jobsapp-1ca79",
    storageBucket: "jobsapp-1ca79.appspot.com",
    messagingSenderId: "743094369324",
    appId: "1:743094369324:web:ed4b7ae00d0045dfda6589"
};

const firebaseApplication = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(firebaseApplication);
const firebaseStorage = getStorage(firebaseApplication);
const firebaseAuth = getAuth(firebaseApplication);

export {firestoreDb, firebaseStorage, firebaseAuth} 
