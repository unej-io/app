import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebase$signOut,
  sendPasswordResetEmail as firebase$sendPasswordResetEmail,
  verifyPasswordResetCode as firebase$verifyPasswordResetCode,
  confirmPasswordReset as firebase$confirmPasswordReset,
  sendEmailVerification as firebase$sendEmailVerification,
  applyActionCode as firebase$applyActionCode,
  checkActionCode as firebase$checkActionCode,
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
  return await firebase$signOut(auth);
}

async function sendPasswordResetEmail(email: string) {
  return await firebase$sendPasswordResetEmail(auth, email);
}

async function verifyPasswordResetCode(code: string) {
  return await firebase$verifyPasswordResetCode(auth, code);
}

async function confirmPasswordReset(code: string, newPassword: string) {
  return await firebase$confirmPasswordReset(auth, code, newPassword);
}

async function sendEmailVerification(user: User) {
  return await firebase$sendEmailVerification(user);
}

async function applyActionCode(code: string) {
  return await firebase$applyActionCode(auth, code);
}

async function checkActionCode(code: string) {
  return await firebase$checkActionCode(auth, code);
}

export { signIn, signUp, signOut };
export { sendPasswordResetEmail, verifyPasswordResetCode, confirmPasswordReset };
export { sendEmailVerification };
export { applyActionCode, checkActionCode };
