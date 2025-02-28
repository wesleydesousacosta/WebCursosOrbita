'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/navigation';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const router = useRouter();

  // Envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui, você pode adicionar a lógica de envio do formulário (ex: API de email)
    alert('Mensagem enviada!');
    router.push('/'); // Redireciona para a página inicial após o envio
  };

  return (
    <>
      <Navbar />
      <section className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Fale Conosco</h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="nome" className="block text-lg font-semibold mb-2">Nome</label>
            <input 
              type="text" 
              id="nome" 
              className="w-full p-3 border border-gray-300 rounded-lg" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">E-mail</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-3 border border-gray-300 rounded-lg" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mensagem" className="block text-lg font-semibold mb-2">Mensagem</label>
            <textarea 
              id="mensagem" 
              className="w-full p-3 border border-gray-300 rounded-lg" 
              rows="4" 
              value={mensagem} 
              onChange={(e) => setMensagem(e.target.value)} 
              required 
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
            Enviar Mensagem
          </button>
        </form>
      </section>
    </>
  );
}
