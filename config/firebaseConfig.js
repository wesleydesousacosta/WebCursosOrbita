import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Importando Firestore

// Configuração do Firebase usando variáveis de ambiente
const firebaseConfig = {
  apiKey: "AIzaSyB3OkR_wlWiCVkoEVEv0G3GkAKIzylyOMg",
  authDomain: "orbita-23d1a.firebaseapp.com",
  projectId: "orbita-23d1a",
  storageBucket: "orbita-23d1a.firebasestorage.app",
  messagingSenderId: "977523831081",
  appId: "1:977523831081:web:b296ea1b83aaff04218738",
  measurementId: "G-5L4GV169DT"
};


// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let analytics;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

const db = getFirestore(app); // Inicializando o Firestore

export { db, auth, analytics }; // Exportando db, auth e analytics
