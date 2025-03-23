import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGBPDzpLOTxktW6SrAXs00iDiVAxQhcXc",
  authDomain: "disney-hotstar-clone-8241d.firebaseapp.com",
  projectId: "disney-hotstar-clone-8241d",
  storageBucket: "disney-hotstar-clone-8241d.firebasestorage.app",
  messagingSenderId: "324590947563",
  appId: "1:324590947563:web:23a37b2330dd52f83a42ae",
  measurementId: "G-J69F3F3BJ5",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
