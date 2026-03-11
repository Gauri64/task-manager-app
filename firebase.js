import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDTT9wD1Wmh0yytsUBbzLl_Db2CBUpsvBI",
  authDomain: "task-manager-app-35a39.firebaseapp.com",
  projectId: "task-manager-app-35a39",
  storageBucket: "task-manager-app-35a39.firebasestorage.app",
  messagingSenderId: "697264647191",
  appId: "1:697264647191:web:54b1719913805d21610052",
  measurementId: "G-ZJ1XMZGVZM"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);