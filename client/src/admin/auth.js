import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../services/firebase/firebase"; 

const auth = getAuth(app);

export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const getCurrentUser = () => auth.currentUser;
