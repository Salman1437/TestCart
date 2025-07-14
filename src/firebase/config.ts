import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "genceesofttest",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "228705741133",
  appId: "1:228705741133:android:ec0316c5b6066f4b366f04"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);