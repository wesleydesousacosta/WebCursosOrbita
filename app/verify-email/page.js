"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "@/config/firebaseConfig";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";

const courses = {
  "git-course": {
    title: "Git Course",
    description: "Learn version control with Git.",
    image: "/images/git-course.png",
    content: "This course covers Git fundamentals, including commits, branches, merges, and more advanced features like rebasing and resolving conflicts.",
  },
  "javascript-course": {
    title: "JavaScript Course",
    description: "Master the JavaScript language from basics to advanced topics.",
    image: "/images/javascript-course.jpg",
    content: "Learn about variables, functions, loops, asynchronous programming, closures, and ES6+ features like arrow functions and promises.",
  },
  "nodejs-course": {
    title: "Node.js Course",
    description: "Backend development with Node.js.",
    image: "/images/nodejs-course.jpg",
    content: "Explore how to build APIs, handle file manipulation, work with Express.js, and connect your Node.js application to databases like MongoDB and SQL.",
  },
  "react-course": {
    title: "React Course",
    description: "Learn how to build dynamic user interfaces with React.",
    image: "/images/react-course.jpg",
    content: "Discover how to create reusable components, manage state, work with hooks, handle forms, and implement routing with React Router.",
  },
};

export default function CoursePage() {
  const { id } = useParams();
  const course = courses[id];
  const [isCourseStarted, setIsCourseStarted] = useState(false);

  useEffect(() => {
    const fetchCourseProgress = async () => {
      const user = getAuth().currentUser;
      if (user) {
        const userCourseRef = doc(db, "user_courses", user.uid);
        const docSnap = await getDoc(userCourseRef);
        if (docSnap.exists() && docSnap.data()[id]) {
          setIsCourseStarted(true);
        }
      }
    };

    fetchCourseProgress();
  }, [id]);

  const handleStartCourse = async () => {
    const user = getAuth().currentUser;
    if (user) {
      const userCourseRef = doc(db, "user_courses", user.uid);

      await setDoc(
        userCourseRef,
        {
          [id]: {
            title: course.title,
            image: course.image,
            description: course.description,
            progress: 0,
          },
        },
        { merge: true }
      );

      setIsCourseStarted(true);
    }
  };

  if (!course) {
    return <div className="text-center text-xl font-bold p-8">Course not found!</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <Image src={course.image} alt={course.title} width={600} height={350} className="rounded-lg shadow-md" />
        <p className="mt-4 text-lg">{course.description}</p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{course.content}</p>

        {isCourseStarted ? (
          <button disabled className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">
            Course Started
          </button>
        ) : (
          <button
            onClick={handleStartCourse}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Start Course
          </button>
        )}
      </div>
    </>
  );
}
