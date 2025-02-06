// path: edulearn/app/signup/page.js

"use client";  // Marca o arquivo como um Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation';  // Corrigido: use useRouter de next/navigation
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';  // Ajuste o caminho conforme necessário
import Navbar from '../components/Navbar';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();  // Corrigido: useRouter de next/navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Criar o usuário no Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Enviar a verificação de email
      await sendEmailVerification(user);

      // Redirecionar o usuário para a página de verificação ou login
      router.push('/verify-email');  // Substitua para a página de verificação ou login
    } catch (err) {
      alert('Erro ao criar conta: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-lg">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-lg">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
