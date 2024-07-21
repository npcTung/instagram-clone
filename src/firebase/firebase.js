import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIRE_BASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIRE_BASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIRE_BASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIRE_BASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIRE_BASE_MESSAGINGSENDER_ID,
  appId: import.meta.env.VITE_APP_FIRE_BASE_APP_ID,
  measurementId: import.meta.env.VITE_APP_FIRE_BASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
