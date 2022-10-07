import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import config from "./config";

const app = initializeApp(config);

const auth = getAuth(app);

const firestore = getFirestore(app);

const storage = getStorage(app);

export { app, auth, firestore, storage };
