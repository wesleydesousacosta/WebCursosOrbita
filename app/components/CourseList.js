// src/app/components/CourseList.js
export default function CourseList({ searchTerm, category }) {
  const courses = [
    {
      id: 1,
      title: "Front End Development With React",
      category: "React",
      image: "/images/react-course.jpg",
    },
    {
      id: 2,
      title: "Node.js Basics",
      category: "Node.js",
      image: "/images/nodejs-course.jpg",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === "" || course.category === category)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredCourses.map((course) => (
        <div key={course.id} className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-32 object-cover"  // Ajuste a altura da imagem para 32 unidades
          />
          <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
            <h2 className="text-white text-lg md:text-xl lg:text-2xl">{course.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
