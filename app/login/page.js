// path: edulearn/pages/login.js

import AuthForm from '../components/AuthForm';
import Navbar from '../components/Navbar';
import RootLayout from '../layout'; // Garantir que use o layout da página inicial

const Login = () => {
  return (
    <RootLayout>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Login</h1>
        <AuthForm mode="login" />
      </div>
    </RootLayout>
  );
};

export default Login;
