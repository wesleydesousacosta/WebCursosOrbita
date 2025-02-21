"use client"; 

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function AreaDoAluno() {
  const [cursosMatriculados, setCursosMatriculados] = useState([]);

  useEffect(() => {
    const cursosIniciados = JSON.parse(localStorage.getItem("startedCourses")) || [];
    setCursosMatriculados(cursosIniciados);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Área do Aluno</h1>

        {cursosMatriculados.length === 0 ? (
          <p>Você ainda não iniciou nenhum curso.</p>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-2">Cursos Iniciados:</h2>
            <ul className="list-disc pl-6">
              {cursosMatriculados.map((courseId) => (
                <li key={courseId}>
                  <a href={`/courses/${courseId}`} className="text-blue-600 hover:underline">
                    {courseId.replace("-", " ")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
