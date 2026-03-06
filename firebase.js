// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA4PdOpzB7pIz8hWPBkopjKI5ZnYl5rZaY",
  authDomain: "controle-pelada-kf.firebaseapp.com",
  projectId: "controle-pelada-kf",
  storageBucket: "controle-pelada-kf.firebasestorage.app",
  messagingSenderId: "468781176061",
  appId: "1:468781176061:web:009375a0a3a63706359a94"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
