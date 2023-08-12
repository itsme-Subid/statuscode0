import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjHEx2WfY1Nn874EV2K51Dl4Yq9umZNH0",
  authDomain: "statuscode0-b90c5.firebaseapp.com",
  projectId: "statuscode0-b90c5",
  storageBucket: "statuscode0-b90c5.appspot.com",
  messagingSenderId: "784918412834",
  appId: "1:784918412834:web:21d4796f09753ff9c8d47b",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
