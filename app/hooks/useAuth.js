// src/app/hooks/useAuth.js

import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig'; // Importe a configuração do Firebase

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Adiciona um estado de loading

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Define o usuário ou null dependendo do estado de autenticação
      setLoading(false); // Finaliza o loading após a verificação
    });

    return () => unsubscribe(); // Limpeza do listener quando o componente desmonta
  }, []);

  return { user, loading }; // Retorna o estado do usuário e o estado de loading
};