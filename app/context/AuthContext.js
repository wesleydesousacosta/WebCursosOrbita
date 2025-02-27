"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '@/config/firebaseConfig'; // Ajuste o caminho conforme necessário
import { onAuthStateChanged, signOut } from 'firebase/auth';

// Cria o contexto
const AuthContext = createContext();

// Hook personalizado para usar o contexto
export const useAuth = () => useContext(AuthContext);

// Provedor do contexto
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Observa mudanças no estado de autenticação
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Limpa o observador ao desmontar o componente
    return unsubscribe;
  }, []);

  const logout = async () => {
    try {
      await signOut(auth); // Faz logout no Firebase
      setCurrentUser(null); // Atualiza o estado do contexto
    } catch (error) {
      console.error("Erro ao fazer logout:", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, loading, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};