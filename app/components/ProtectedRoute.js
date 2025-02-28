"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation"; // Usando redirect do Next.js
import { useAuth } from "../hooks/useAuth"; // Importe o hook useAuth

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth(); // Use o hook aqui

  useEffect(() => {
    if (!loading && !user) {
      // Redireciona para a página de login se o usuário não estiver autenticado
      redirect("/login");
    }
  }, [user, loading]);

  if (loading || !user) {
    return <div>Loading...</div>; // Exibe um loading enquanto verifica o estado de autenticação
  }

  return children; // Renderiza o conteúdo protegido se o usuário estiver autenticado
};

export default ProtectedRoute;