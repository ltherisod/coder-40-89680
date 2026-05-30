// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// como aplicar las variables de entorno
  //apiKey: import.meta.env.VITE_API_KEY,

const firebaseConfig = {
  apiKey: "AIzaSyB1ufQJCrJ0OkfXvgIMHmfKE_KZ0ZhtflI",
  authDomain: "coder-89680-app.firebaseapp.com",
  projectId: "coder-89680-app",
  storageBucket: "coder-89680-app.firebasestorage.app",
  messagingSenderId: "309221141447",
  appId: "1:309221141447:web:398eff643d9c101a26c7e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//TRAER LA BD
 export const db= getFirestore(app)