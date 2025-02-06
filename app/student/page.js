// src/app/student/page.js

"use client";

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const StudentArea = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch student's courses (implemente sua lógica de busca de dados aqui)
    // Exemplo:
    // fetch('/api/student/courses')
    //   .then(response => response.json())
    //   .then(data => setCourses(data));
  }, []);

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">My Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-colors duration-300">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 dark:text-white">{course.title}</h2>
                <p className="text-gray-700 dark:text-gray-300">{course.progress}% completed</p>
                <a href={`/course/${course.id}`} className="text-blue-600 dark:text-blue-400">Continue Course</a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentArea;
