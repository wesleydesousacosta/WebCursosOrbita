'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  // Envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui, você pode adicionar a lógica de envio do formulário (ex: API de email)
    alert('Mensagem enviada!');
    router.push('/'); // Redireciona para a home após enviar
  };

  return (
    <>
      <Navbar />
      <section className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full p-3 border border-gray-300 rounded-lg" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
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
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
            <textarea 
              id="message" 
              className="w-full p-3 border border-gray-300 rounded-lg" 
              rows="4" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
