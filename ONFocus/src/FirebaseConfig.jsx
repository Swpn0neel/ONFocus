import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcM5VqSR3nperxB610ewjsMtlWsl1ptms",
  authDomain: "onfocus-1.firebaseapp.com",
  projectId: "onfocus-1",
  storageBucket: "onfocus-1.appspot.com",
  messagingSenderId: "300696964608",
  appId: "1:300696964608:web:92ba7e2859ae1e010952e5",
  measurementId: "G-9E615GMYGF"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
