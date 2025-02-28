"use client";  // Marca o arquivo como um Componente Cliente

import Navbar from "@/app/components/Navbar";
import AuthForm from "@/app/components/AuthForm";

const Cadastro = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Cadastre-se</h1>
        <AuthForm mode="signup" />
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Já tem uma conta?{" "}
            <a href="/login" className="text-blue-600 hover:text-blue-800">
              Ir para o Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
