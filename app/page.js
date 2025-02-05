//path: edulearn/app/page.js

import Navbar from './components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation(); // Hook para acessar as traduções

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[500px] flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8">
        <h1 className="text-5xl font-bold mb-4">{t('heroTitle')}</h1>
        <p className="text-lg max-w-2xl">{t('heroDescription')}</p>
        <Link href="/courses" className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-200">
          {t('exploreCourses')}
        </Link>
      </section>

      {/* Popular Courses */}
      <section className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-6">{t('popularCourses')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[ 
            { id: "git-course", title: t('gitCourse'), image: "/images/git-course.png" },
            { id: "javascript-course", title: t('javascriptCourse'), image: "/images/javascript-course.jpg" },
            { id: "nodejs-course", title: t('nodejsCourse'), image: "/images/nodejs-course.jpg" },
            { id: "react-course", title: t('reactCourse'), image: "/images/react-course.jpg" }
          ].map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`} passHref>
              <div className="cursor-pointer bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transform transition hover:scale-105">
                <Image src={course.image} alt={course.title} width={400} height={250} className="rounded-md" />
                <h3 className="text-xl font-semibold mt-4">{course.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 dark:bg-gray-900 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">{t('testimonialsTitle')}</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[ 
            { name: "João Silva", feedback: t('joaoFeedback'), image: "/images/joao.jpg" },
            { name: "Maria Souza", feedback: t('mariaFeedback'), image: "/images/maria.jpg" },
            { name: "Jorge Almeida", feedback: t('jorgeFeedback'), image: "/images/jorge.jpeg" },
            { name: "Sérgio Oliveira", feedback: t('sergioFeedback'), image: "/images/sergio.jpg" }
          ].map((student, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center h-full">
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
        <h2 className="text-3xl font-bold">{t('readyToStart')}</h2>
        <p className="text-lg mt-2">{t('signupMessage')}</p>
        <Link href="/signup" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-200">
          {t('createAccount')}
        </Link>
      </section>
    </>
  );
}
