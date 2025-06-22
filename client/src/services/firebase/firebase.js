// Import core Firebase modules
import { initializeApp } from "firebase/app";

// Firestore
import { getFirestore, collection, getDocs } from "firebase/firestore";

// ✅ Add this: Firebase Authentication
import { getAuth } from "firebase/auth";

// Firebase config using environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app); // ✅ Auth export added

// Firestore collections
export const projectsCollection = collection(db, "projects");

// Optional helper exports
export { getDocs };
