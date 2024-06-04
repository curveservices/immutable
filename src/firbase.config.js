import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "immutable-studio.firebaseapp.com",
  projectId: "immutable-studio",
  storageBucket: "immutable-studio.appspot.com",
  messagingSenderId: "1085531840632",
  appId: "1:1085531840632:web:b50890c5aa4043682acd8d",
  measurementId: "G-3YZZP0BHVW",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
