import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9npgZHtOOW7nVtvcAMAAYsLoKzbH-Quw",
  authDomain: "dark-foundry-386405.firebaseapp.com",
  projectId: "dark-foundry-386405",
  storageBucket: "dark-foundry-386405.appspot.com",
  messagingSenderId: "451883263937",
  appId: "1:451883263937:web:9ac6e799e78396dce63140",
  measurementId: "G-1L0VFZ4LE0",
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
