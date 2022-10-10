import { getAuth } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as _signOut,
  sendPasswordResetEmail as _sendPasswordResetEmail,
  verifyPasswordResetCode as _verifyPasswordResetCode,
  confirmPasswordReset as _confirmPasswordReset,
  sendEmailVerification as _sendEmailVerification,
  applyActionCode as _applyActionCode,
  checkActionCode as _checkActionCode,
} from "firebase/auth";
import type { User } from "firebase/auth";

import app from "./app";

const auth = getAuth(app);

async function signIn(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password);
}

async function signUp(email: string, password: string) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

async function signOut() {
  return await _signOut(auth);
}

async function sendPasswordResetEmail(email: string) {
  return await _sendPasswordResetEmail(auth, email);
}

async function verifyPasswordResetCode(code: string) {
  return await _verifyPasswordResetCode(auth, code);
}

async function confirmPasswordReset(code: string, newPassword: string) {
  return await _confirmPasswordReset(auth, code, newPassword);
}

async function sendEmailVerification(user: User) {
  return await _sendEmailVerification(user);
}

async function applyActionCode(code: string) {
  return await _applyActionCode(auth, code);
}

async function checkActionCode(code: string) {
  return await _checkActionCode(auth, code);
}

export { signIn, signUp, signOut };
export { sendPasswordResetEmail, verifyPasswordResetCode, confirmPasswordReset };
export { sendEmailVerification };
export { applyActionCode, checkActionCode };
export default auth;
