import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAk_sW4LBQiVnJV7BlrrDf9hvn-BUia9Ns",
  authDomain: "vitrine-gamer.firebaseapp.com",
  projectId: "vitrine-gamer",
  storageBucket: "vitrine-gamer.appspot.com",
  messagingSenderId: "392156506660",
  appId: "1:392156506660:web:4499bfb7ad0685b93f06b1",
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const db = getFirestore(app);