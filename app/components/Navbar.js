//path: edulearn/app/components/Navbar.js

"use client";
import Link from "next/link";
import { FaHome, FaBook, FaUserGraduate } from "react-icons/fa";
import { useLanguage } from "../context/LanguageProvider";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { locale, changeLanguage } = useLanguage();

  // Carrega o arquivo de traduções com base no idioma atual
  const translations = require(`../../app/locales/${locale}.json`);

  return (
    <nav className="bg-blue-600 p-4 shadow-lg dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">EduLearn</h1>
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-white flex items-center dark:text-gray-300">
            <FaHome className="mr-2" /> {translations.navbar.home}
          </Link>
          <Link href="/courses" className="text-white flex items-center dark:text-gray-300">
            <FaBook className="mr-2" /> {translations.navbar.courses}
          </Link>
          <Link href="/student" className="text-white flex items-center dark:text-gray-300">
            <FaUserGraduate className="mr-2" /> {translations.navbar.student}
          </Link>

          {/* Botão de troca de idioma */}
          <select
            value={locale}
            onChange={(e) => changeLanguage(e.target.value)}
            className="bg-white text-gray-800 px-2 py-1 rounded-lg text-sm"
          >
            <option value="en">🇺🇸 English</option>
            <option value="pt">🇧🇷 Português</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
