'use client';

import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <section className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            At EduLearn, our mission is to provide accessible and affordable education to people all around the world. We believe that everyone deserves the opportunity to learn and grow, regardless of their background.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We are a team of passionate educators, developers, and designers who work together to create the best learning experience possible. Our team members are experts in various fields, including programming, marketing, and content creation.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            <strong>Email:</strong> support@edulearn.com<br />
            <strong>Phone:</strong> +1 (800) 123-4567<br />
            <strong>Address:</strong> 123 EduLearn Street, Education City, Learnland
          </p>
        </div>
      </section>
    </>
  );
}
