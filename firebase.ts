import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHfqteVvSmxcAmvhWKoIlMn8IrVFpE_eg",
  authDomain: "e-commerce-ca3e1.firebaseapp.com",
  projectId: "e-commerce-ca3e1",
  storageBucket: "e-commerce-ca3e1.appspot.com",
  messagingSenderId: "28886439631",
  appId: "1:28886439631:web:3dad223a2762dd7f16c9ba",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
