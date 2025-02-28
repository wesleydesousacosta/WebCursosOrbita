// path: edulearn/pages/login.js

import AuthForm from '../components/AuthForm';
import Navbar from '../components/Navbar';
import RootLayout from '../layout'; // Garantir que use o layout da página inicial
import Link from 'next/link'; // Importando o Link para navegação

const Login = () => {
  return (
    <RootLayout>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Login</h1>
        <AuthForm mode="login" /> {/* Passando a prop mode como "login" */}
        
        {/* Link para direcionar para a página de cadastro */}
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Não tem uma conta?{' '}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Crie uma conta
            </Link>
          </p>
        </div>
      </div>
    </RootLayout>
  );
};

export default Login;
