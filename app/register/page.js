"use client"; // Marca o arquivo como um Client Component

import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebaseConfig';

export default function Registrar() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setErro('');
    setSucesso('');
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      setSucesso('Cadastro realizado com sucesso!');
      // Redirecionar para área do aluno
    } catch (error) {
      setErro('Erro ao registrar: ' + error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Cadastro</h1>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-lg">E-mail:</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Digite seu e-mail"
            required
          />
        </div>
        <div>
          <label className="block text-lg">Senha:</label>
          <input 
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Digite sua senha"
            required
          />
        </div>
        {erro && <p className="text-red-500">{erro}</p>}
        {sucesso && <p className="text-green-500">{sucesso}</p>}
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Cadastrar</button>
      </form>
    </div>
  );
}
