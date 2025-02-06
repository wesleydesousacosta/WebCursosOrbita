// path: edulearn/app/signup/page.js

"use client";  // Marca o arquivo como um Client Component

import Navbar from '../components/Navbar';
import AuthForm from '../components/AuthForm';
import RootLayout from '../layout';  // Garantir que use o layout da página inicial

const SignUp = () => {
  return (
    <RootLayout>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
        {/* Passando mode="signup" para o AuthForm */}
        <AuthForm mode="signup" />
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Já tem uma conta?{' '}
            <a href="/login" className="text-blue-600 hover:text-blue-800">
              Ir para o Login
            </a>
          </p>
        </div>
      </div>
    </RootLayout>
  );
};

export default SignUp;
