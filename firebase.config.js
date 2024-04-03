import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmR-4V00hrnXUnGuMPHmwtLTU2fWgJZnQ",
  authDomain: "grovyo-89dc2.firebaseapp.com",
  projectId: "grovyo-89dc2",
  storageBucket: "grovyo-89dc2.appspot.com",
  messagingSenderId: "16467726056",
  appId: "1:16467726056:web:dc23db4efe27f6adaac35d",
  measurementId: "G-E1BLGHPWL1",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
