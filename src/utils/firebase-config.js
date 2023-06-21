import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD7uHDDs2HNWL2XeDbovv_ye7yyUW1ISpA",
  authDomain: "react-netflix-clone-7a31c.firebaseapp.com",
  projectId: "react-netflix-clone-7a31c",
  storageBucket: "react-netflix-clone-7a31c.appspot.com",
  messagingSenderId: "16807410107",
  appId: "1:16807410107:web:846d7638018b49db17ec9e",
  measurementId: "G-CPPZK9DSSR"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);