// app/components/CourseCard.js

import Image from 'next/image';

export default function CourseCard({ course, onClick }) {
  return (
    <div 
      className="cursor-pointer bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transform transition hover:scale-105" 
      onClick={onClick}
    >
      <Image 
        src={course.image} 
        alt={course.title} 
        width={400} 
        height={250} 
        className="rounded-md" 
      />
      <h3 className="text-xl font-semibold mt-4">{course.title}</h3>
    </div>
  );
}
