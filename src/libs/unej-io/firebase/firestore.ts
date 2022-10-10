import { getFirestore } from "firebase/firestore";

import app from "./app";

const firestore = getFirestore(app);

export default firestore;
