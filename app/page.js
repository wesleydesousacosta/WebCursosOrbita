// caminho: app/page.js

'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebaseConfig'; // Ajuste o caminho conforme necessário
import CourseCard from './components/CourseCard'; // Importando o novo componente
import { useAuth } from './context/AuthContext';

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Cursos populares
  const courses = [
    { id: "git-course", title: "Curso de Git", image: "/images/git-course.png" },
    { id: "javascript-course", title: "Curso de JavaScript", image: "/images/javascript-course.jpg" },
    { id: "nodejs-course", title: "Curso de Node.js", image: "/images/nodejs-course.jpg" },
    { id: "react-course", title: "Curso de React", image: "/images/react-course.jpg" }
  ];
  
  const { currentUser, loading } = useAuth();
  
  // Verifica o estado de autenticação do usuário

  // Função para redirecionar para o curso ou login
  const handleCourseClick = (e, courseId) => {
    e.preventDefault();

    if (!currentUser) {
      // Se o usuário não estiver logado, redireciona para a página de login
      router.push('/login');
    } else {
      // Se o usuário estiver logado, redireciona para o curso
      router.push(`/`);
    }
  };

  return (
    <>
      <Navbar />

      {/* Seção Hero - Alinhando conteúdo à esquerda */}
      <section 
        className="relative h-[500px] flex flex-col items-start justify-center text-left bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        <h1 className="text-5xl font-bold mb-4">Bem-vindo ao Orbita</h1>
        <p className="text-lg max-w-2xl">A melhor plataforma para aprender novas habilidades!</p>
        <Link href="/courses" className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-200">
          Explorar Cursos
        </Link>
      </section>

      {/* Cursos Populares */}
      <section className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Cursos Populares</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onClick={(e) => handleCourseClick(e, course.id)} 
            />
          ))}
        </div>
      </section>

      {/* Chamada para Ação */}
      <section className="bg-blue-600 text-white text-center py-12">
        <h2 className="text-3xl font-bold">Pronto para começar?</h2>
        <p className="text-lg mt-2">Crie sua conta e comece a aprender hoje mesmo!</p>
        <Link href="/signup" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-200">
          Inscrever-se
        </Link>
      </section>
    </>
  );
}
