import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Importando Firestore

// Configuração do Firebase usando variáveis de ambiente
const firebaseConfig = {
  apiKey: "AIzaSyCVC-r19vmc9O4rAGWWflfuuSwwJBJWvLE",
  authDomain: "orbita-27817.firebaseapp.com",
  projectId: "orbita-27817",
  storageBucket: "orbita-27817.firebasestorage.app",
  messagingSenderId: "718464172235",
  appId: "1:718464172235:web:4347139b3ac57181019b4e"
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
