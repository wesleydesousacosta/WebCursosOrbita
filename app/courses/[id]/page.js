"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "../../components/Navbar";

const courses = {
  "git-course": {
    title: "Curso de Git",
    description: "Aprenda controle de versão com Git.",
    image: "/images/git-course.png",
    content: "Este curso cobre os fundamentos do Git, incluindo commits, branches e merges.",
  },
  "javascript-course": {
    title: "Curso de JavaScript",
    description: "Domine a linguagem JavaScript do básico ao avançado.",
    image: "/images/javascript-course.jpg",
    content: "Aprenda sobre variáveis, funções, loops e programação assíncrona em JavaScript.",
  },
  "nodejs-course": {
    title: "Curso de Node.js",
    description: "Desenvolvimento backend com Node.js.",
    image: "/images/nodejs-course.jpg",
    content: "Explore a criação de APIs, manipulação de arquivos e uso do Express.js no Node.js.",
  },
  "react-course": {
    title: "Curso de React",
    description: "Aprenda a criar interfaces dinâmicas com React.",
    image: "/images/react-course.jpg",
    content: "Veja como criar componentes reutilizáveis, gerenciar estado e trabalhar com hooks.",
  },
};

export default function CoursePage() {
  const { id } = useParams();
  const course = courses[id];

  if (!course) {
    return <div className="text-center text-xl font-bold p-8">Curso não encontrado!</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <Image src={course.image} alt={course.title} width={600} height={350} className="rounded-lg shadow-md" />
        <p className="mt-4 text-lg">{course.description}</p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{course.content}</p>
      </div>
    </>
  );
}
