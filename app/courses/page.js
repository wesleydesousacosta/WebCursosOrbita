import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

const cursos = [
  { id: "git-curso", title: "Curso de Git", image: "/images/git-course.png" },
  { id: "javascript-curso", title: "Curso de JavaScript", image: "/images/javascript-course.jpg" },
  { id: "nodejs-curso", title: "Curso de Node.js", image: "/images/nodejs-course.jpg" },
  { id: "react-curso", title: "Curso de React", image: "/images/react-course.jpg" },
];

export default function PaginaCursos() {
  return (
    <>
      <Navbar />
      <section className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Nossos Cursos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cursos.map((curso) => (
            <Link key={curso.id} href={`/courses/${curso.id}`} className="cursor-pointer">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transform transition hover:scale-105">
                <Image src={curso.image} alt={curso.title} width={400} height={250} className="rounded-md" />
                <h3 className="text-xl font-semibold mt-4">{curso.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
