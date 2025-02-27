"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { updateEmail, updatePassword, deleteUser, verifyBeforeUpdateEmail } from "firebase/auth";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export default function AreaDoAluno() {
  const [cursosMatriculados, setCursosMatriculados] = useState([]);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const router = useRouter();

  // Acesse o currentUser e loading do contexto
  const { currentUser, loading, logout } = useAuth();

  useEffect(() => {
    const cursosIniciados = JSON.parse(localStorage.getItem("startedCourses")) || [];
    setCursosMatriculados(cursosIniciados);
  }, []);

  // Função para atualizar o email do usuário
  const handleUpdateEmail = async () => {
    try {
      if (currentUser) {
        // Verifica se o email atual foi verificado
        if (!currentUser.emailVerified) {
          setError("Por favor, verifique seu email antes de alterá-lo.");
          return;
        }
  
        // Atualiza o email
        
        await verifyBeforeUpdateEmail(currentUser, newEmail);
        setSuccess("Email atualizado com sucesso!");
        setError(null);
      } else {
        setError("Nenhum usuário autenticado.");
      }
    } catch (err) {
      setError(err.message);
      setSuccess(null);
    }
  };

  const handleLogout = async () => {
    await logout();
    router.push("/login"); // Redireciona para a página inicial após o logout
  };


  // Função para atualizar a senha do usuário
  const handleUpdatePassword = async () => {
    try {
      if (currentUser) {
        await updatePassword(currentUser, newPassword);
        setSuccess("Senha atualizada com sucesso!");
        setError(null);
      } else {
        setError("Nenhum usuário autenticado.");
      }
    } catch (err) {
      setError(err.message);
      setSuccess(null);
    }
  };

  // Função para deletar a conta do usuário
  const handleDeleteAccount = async () => {
    try {
      if (currentUser) {
        await deleteUser(currentUser);
        setSuccess("Conta deletada com sucesso!");
        setError(null);
        // Redirecionar para a página inicial após deletar a conta
        window.location.href = "/";
      } else {
        setError("Nenhum usuário autenticado.");
      }
    } catch (err) {
      setError(err.message);
      setSuccess(null);
    }
  };

  if (loading) {
    return <p>Carregando...</p>; // Exibe um loading enquanto o contexto está carregando
  }

  return (
    <div>
      <Navbar />
      {currentUser && (
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        )}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Área do Aluno</h1>

        {cursosMatriculados.length === 0 ? (
          <p>{currentUser?.email}</p>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-2">Cursos Iniciados:</h2>
            <ul className="list-disc pl-6">
              {cursosMatriculados.map((courseId) => (
                <li key={courseId}>
                  <a href={`/courses/${courseId}`} className="text-blue-600 hover:underline">
                    {courseId.replace("-", " ")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Seção para atualizar email */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Atualizar Email</h2>
          <input
            type="email"
            placeholder="Novo email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="w-full p-2 border rounded mb-2 text-black"
          />
          <button
            onClick={handleUpdateEmail}
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Atualizar Email
          </button>
        </div>

        {/* Seção para atualizar senha */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Atualizar Senha</h2>
          <input
            type="password"
            placeholder="Nova senha"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border rounded mb-2  text-black"
          />
          <button
            onClick={handleUpdatePassword}
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Atualizar Senha
          </button>
        </div>

        {/* Seção para deletar conta */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Deletar Conta</h2>
          <h3 className="text-xl font-bold mb-2">Senha Atual</h3>
          <input
            type="password"
            placeholder="Nova senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mb-2  text-black"
          />
          <button
            onClick={handleDeleteAccount}
            className="bg-red-600 text-white p-2 rounded hover:bg-red-700"
          >
            Deletar Conta
          </button>
        </div>

        {/* Mensagens de erro e sucesso */}
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">{success}</p>}
      </div>
    </div>
  );
}