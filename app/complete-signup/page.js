"use client";

import { useState, useEffect } from "react";
import { auth } from "@/config/firebaseConfig"; // Importação corrigida
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";

export default function VerificarEmailPage() {
  const [emailVerificado, setEmailVerificado] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const verificarEmail = async () => {
      if (auth.currentUser) {
        await auth.currentUser.reload();
        if (auth.currentUser.emailVerified) {
          setEmailVerificado(true);
          router.push("/dashboard");
        }
      }
    };

    verificarEmail();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Navbar />
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-semibold">Verifique Seu E-mail</h1>
        <p className="text-gray-600 mt-2">
          Por favor, verifique seu e-mail para acessar o link de confirmação.
        </p>
        {!emailVerificado ? (
          <p className="mt-4 text-red-500">Aguardando verificação...</p>
        ) : (
          <p className="mt-4 text-green-500">E-mail verificado! Redirecionando...</p>
        )}
      </div>
    </div>
  );
}
