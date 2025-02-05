// src/app/courses/page.js
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

const courses = [
  { id: "git-course", title: "Git Course", image: "/images/git-course.png" },
  { id: "javascript-course", title: "JavaScript Course", image: "/images/javascript-course.jpg" },
  { id: "nodejs-course", title: "Node.js Course", image: "/images/nodejs-course.jpg" },
  { id: "react-course", title: "React Course", image: "/images/react-course.jpg" },
];

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <section className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Our Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`} className="cursor-pointer">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transform transition hover:scale-105">
                <Image src={course.image} alt={course.title} width={400} height={250} className="rounded-md" />
                <h3 className="text-xl font-semibold mt-4">{course.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
