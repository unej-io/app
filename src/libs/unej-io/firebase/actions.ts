import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebase_signOut,
  sendPasswordResetEmail as firebase_sendPasswordResetEmail,
  verifyPasswordResetCode as firebase_verifyPasswordResetCode,
  confirmPasswordReset as firebase_confirmPasswordReset,
  sendEmailVerification as firebase_sendEmailVerification,
  applyActionCode as firebase_applyActionCode,
  checkActionCode as firebase_checkActionCode,
} from "firebase/auth";
import type { User } from "firebase/auth";

import { auth } from "./const";

async function signIn(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password);
}

async function signUp(email: string, password: string) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

async function signOut() {
  return await firebase_signOut(auth);
}

async function sendPasswordResetEmail(email: string) {
  return await firebase_sendPasswordResetEmail(auth, email);
}

async function verifyPasswordResetCode(code: string) {
  return await firebase_verifyPasswordResetCode(auth, code);
}

async function confirmPasswordReset(code: string, newPassword: string) {
  return await firebase_confirmPasswordReset(auth, code, newPassword);
}

async function sendEmailVerification(user: User) {
  return await firebase_sendEmailVerification(user);
}

async function applyActionCode(code: string) {
  return await firebase_applyActionCode(auth, code);
}

async function checkActionCode(code: string) {
  return await firebase_checkActionCode(auth, code);
}

export { signIn, signUp, signOut };
export { sendPasswordResetEmail, verifyPasswordResetCode, confirmPasswordReset };
export { sendEmailVerification };
export { applyActionCode, checkActionCode };
