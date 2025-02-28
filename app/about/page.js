'use client';

import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <section className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-6">sobre nos</h1>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">nossa missao</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-semibold mb-4">nosso time</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-semibold mb-4">contatos</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            <strong>Email:</strong> support@orbita.com<br />
            <strong>Phone:</strong> +1 (800) 123-4567<br />
            <strong>Address:</strong> 123 EduLearn Street, Education City, Learnland
          </p>
        </div>
      </section>
    </>
  );
}
