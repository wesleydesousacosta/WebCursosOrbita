"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "@/config/firebaseConfig";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";

const cursos = {
  "git-course": {
    title: "Curso de Git",
    description: "Aprenda controle de versão com Git.",
    image: "/images/git-course.png",
    content: "Este curso aborda os fundamentos do Git, incluindo commits, branches, merges e recursos avançados como rebase e resolução de conflitos.",
  },
  "javascript-course": {
    title: "Curso de JavaScript",
    description: "Domine a linguagem JavaScript do básico ao avançado.",
    image: "/images/javascript-course.jpg",
    content: "Aprenda sobre variáveis, funções, loops, programação assíncrona, closures e recursos do ES6+, como arrow functions e promises.",
  },
  "nodejs-course": {
    title: "Curso de Node.js",
    description: "Desenvolvimento backend com Node.js.",
    image: "/images/nodejs-course.jpg",
    content: "Explore como construir APIs, manipular arquivos, trabalhar com Express.js e conectar sua aplicação Node.js a bancos de dados como MongoDB e SQL.",
  },
  "react-course": {
    title: "Curso de React",
    description: "Aprenda a construir interfaces dinâmicas com React.",
    image: "/images/react-course.jpg",
    content: "Descubra como criar componentes reutilizáveis, gerenciar estado, trabalhar com hooks, manipular formulários e implementar roteamento com React Router.",
  },
};
const VerifyEmail = () => {
  const { id } = useParams();
  const curso = cursos[id];
  const [cursoIniciado, setCursoIniciado] = useState(false);

  useEffect(() => {
    const buscarProgressoCurso = async () => {
      const usuario = getAuth().currentUser;
      if (usuario) {
        const referenciaCursoUsuario = doc(db, "user_courses", usuario.uid);
        const docSnap = await getDoc(referenciaCursoUsuario);
        if (docSnap.exists() && docSnap.data()[id]) {
          setCursoIniciado(true);
        }
      }
    };

    buscarProgressoCurso();
  }, [id]);

  const iniciarCurso = async () => {
    const usuario = getAuth().currentUser;
    if (usuario) {
      const referenciaCursoUsuario = doc(db, "user_courses", usuario.uid);

      await setDoc(
        referenciaCursoUsuario,
        {
          [id]: {
            title: curso.title,
            image: curso.image,
            description: curso.description,
            progress: 0,
          },
        },
        { merge: true }
      );

      setCursoIniciado(true);
    }
  };

  if (!curso) {
    return <div className="text-center text-xl font-bold p-8">Curso não encontrado!</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{curso.title}</h1>
        <Image src={curso.image} alt={curso.title} width={600} height={350} className="rounded-lg shadow-md" />
        <p className="mt-4 text-lg">{curso.description}</p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{curso.content}</p>

        {cursoIniciado ? (
          <button disabled className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">
            Curso Iniciado
          </button>
        ) : (
          <button
            onClick={iniciarCurso}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Iniciar Curso
          </button>
        )}
      </div>
    </>
  );
}
export default VerifyEmail