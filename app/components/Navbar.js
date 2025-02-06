// path: edulearn/components/Navbar.js

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaHome, FaBook, FaUserGraduate, FaSun, FaMoon } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // Certifique-se de usar o correto
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';  // Ajuste o caminho conforme necessário

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Recuperar o estado do dark mode do localStorage ao carregar a página
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
      document.documentElement.classList.add(storedTheme);
    } else {
      // Se não houver preferência armazenada, verifica o sistema
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(userPrefersDark);
      document.documentElement.classList.add(userPrefersDark ? 'dark' : 'light');
    }

    // Verificar se o usuário está logado no Firebase
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Limpeza do listener
  }, []);

  // Alternar entre dark mode e light mode
  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.remove(isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Função de verificação de login
  const handleNavigation = (e, destination) => {
    e.preventDefault();

    if (!user) {
      // Se o usuário não estiver logado, redireciona para a página de login
      router.push('/login');
    } else {
      // Se estiver logado, redireciona para a página de destino
      router.push(destination);
    }
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-lg dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">EduLearn</h1>
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-white flex items-center dark:text-gray-300">
            <FaHome className="mr-2" /> Home
          </Link>
          <a 
            href="/courses" 
            onClick={(e) => handleNavigation(e, '/courses')} 
            className="text-white flex items-center dark:text-gray-300"
          >
            <FaBook className="mr-2" /> Courses
          </a>
          <a 
            href="/student" 
            onClick={(e) => handleNavigation(e, '/student')} 
            className="text-white flex items-center dark:text-gray-300"
          >
            <FaUserGraduate className="mr-2" /> Student Area
          </a>
          
          {/* Botão de alternância do tema (somente ícones minimalistas sem cor) */}
          <button
            onClick={toggleTheme}
            className="text-white dark:text-gray-300 ml-4 p-2 rounded-full"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
