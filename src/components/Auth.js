import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAB54Ze8-8CRwvJts2o9dnf2z4Vca9SFcU",
  authDomain: "show-flix-f0c2c.firebaseapp.com",
  projectId: "show-flix-f0c2c",
  storageBucket: "show-flix-f0c2c.firebasestorage.app",
  messagingSenderId: "347442870553",
  appId: "1:347442870553:web:14e444e99268b538426d88",
  measurementId: "G-6LR2PSBRSB"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
