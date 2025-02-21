import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tp-react-b2f65.firebaseapp.com",
  projectId: "tp-react-b2f65",
  storageBucket: "tp-react-b2f65.firebasestorage.app",
  messagingSenderId: "43683274826",
  appId: "1:43683274826:web:a7f02bf1b52a5f4ca646b3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)