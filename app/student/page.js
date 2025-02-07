"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function StudentArea() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const startedCourses = JSON.parse(localStorage.getItem("startedCourses")) || [];
    setEnrolledCourses(startedCourses);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Student Area</h1>

        {enrolledCourses.length === 0 ? (
          <p>You have not started any courses yet.</p>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-2">Started Courses:</h2>
            <ul className="list-disc pl-6">
              {enrolledCourses.map((courseId) => (
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
