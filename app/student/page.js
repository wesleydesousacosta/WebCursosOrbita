"use client";

import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../../config/firebaseConfig"; // Corrija o caminho para o arquivo correto
import Navbar from "../components/Navbar"; // Verifique o caminho

export default function StudentArea() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Adicionando o estado de carregamento

  useEffect(() => {
    const currentUser = getAuth().currentUser;

    if (currentUser) {
      setUser(currentUser); // Armazena as informações do usuário
      const userCourseRef = doc(db, "user_courses", currentUser.uid);

      const getEnrolledCourses = async () => {
        try {
          const docSnap = await getDoc(userCourseRef);
          if (docSnap.exists()) {
            const userCourses = docSnap.data();
            setEnrolledCourses(Object.keys(userCourses)); // Assuming courses are stored by course ID
          }
        } catch (error) {
          console.error("Erro ao buscar cursos matriculados:", error);
        }
        setLoading(false); // Alterando o estado de loading após carregar os dados
      };

      getEnrolledCourses();
    } else {
      setLoading(false); // Caso o usuário não esteja autenticado, finalizamos o loading
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Exibe uma mensagem de carregamento enquanto os dados estão sendo processados
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Student Area</h1>

        {/* Exibir informações do usuário */}
        {user && (
          <div className="mb-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md">
            <div className="flex items-center space-x-4">
              {/* Exibir foto do perfil, se disponível */}
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img
                  src={user.photoURL || "/default-avatar.png"} // Foto do usuário ou imagem padrão
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Profile</h3>
                <p className="text-gray-700 dark:text-gray-300"><strong>Name:</strong> {user.displayName || "No name set"}</p>
                <p className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> {user.email}</p>
              </div>
            </div>
          </div>
        )}

        {/* Exibir cursos matriculados */}
        {enrolledCourses.length === 0 ? (
          <p>You are not enrolled in any courses.</p>
        ) : (
          <div>
            <h2 className="text-xl font-bold">Enrolled Courses:</h2>
            <ul className="list-disc pl-6">
              {enrolledCourses.map((courseId) => (
                <li key={courseId}>
                  {/* Exibir ID do curso ou outras informações do curso */}
                  {courseId}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
