//path: app/page.js

'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebaseConfig'; // Ajuste o caminho conforme necessário

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Feedback dos estudantes
  const studentsFeedback = [
    { name: "John Silva", feedback: "Great platform!", image: "/images/joao.jpg" },
    { name: "Maria Souza", feedback: "I learned a lot from the courses!", image: "/images/maria.jpg" },
    { name: "George Almeida", feedback: "Highly recommend to everyone!", image: "/images/jorge.jpeg" },
    { name: "Sergio Oliveira", feedback: "Best learning experience!", image: "/images/sergio.jpg" }
  ];

  // Cursos populares
  const courses = [
    { id: "git-course", title: "Git Course", image: "/images/git-course.png" },
    { id: "javascript-course", title: "JavaScript Course", image: "/images/javascript-course.jpg" },
    { id: "nodejs-course", title: "Node.js Course", image: "/images/nodejs-course.jpg" },
    { id: "react-course", title: "React Course", image: "/images/react-course.jpg" }
  ];

  // Verifica o estado de autenticação do usuário
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Função para redirecionar para o curso ou login
  const handleCourseClick = (e, courseId) => {
    e.preventDefault();

    if (!user) {
      // Se o usuário não estiver logado, redireciona para a página de login
      router.push('/login');
    } else {
      // Se o usuário estiver logado, redireciona para o curso
      router.push(`/courses/${courseId}`);
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section - Alinhando conteúdo à esquerda */}
      <section 
        className="relative h-[500px] flex flex-col items-start justify-center text-left bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to EduLearn</h1>
        <p className="text-lg max-w-2xl">The best platform to learn new skills!</p>
        <Link href="/courses" className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-200">
          Explore Courses
        </Link>
      </section>

      {/* Popular Courses */}
      <section className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Popular Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="cursor-pointer bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transform transition hover:scale-105"
              onClick={(e) => handleCourseClick(e, course.id)}>
              <Image src={course.image} alt={course.title} width={400} height={250} className="rounded-md" />
              <h3 className="text-xl font-semibold mt-4">{course.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 dark:bg-gray-900 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentsFeedback.map((student) => (
            <div key={student.name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center h-full">
              <div className="w-20 h-20">
                <Image 
                  src={student.image} 
                  alt={student.name} 
                  width={80} 
                  height={80} 
                  className="rounded-full object-cover w-full h-full" 
                />
              </div>
              <h3 className="text-lg font-semibold mt-4">{student.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{student.feedback}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-12">
        <h2 className="text-3xl font-bold">Ready to get started?</h2>
        <p className="text-lg mt-2">Create your account and start learning today!</p>
        <Link href="/signup" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-200">
          Sign Up
        </Link>
      </section>
    </>
  );
}
