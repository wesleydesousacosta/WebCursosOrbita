// path: edulearn/app/complete-signup/page.js

import { useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
import Navbar from '../../components/Navbar';
import RootLayout from '../../layout';

const CompleteSignUp = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (profilePicture) {
        // Lógica para fazer upload da foto de perfil, se necessário
        // Exemplo: uploadImage(profilePicture);
      }

      // Atualizando o perfil do usuário no Firebase
      await updateProfile(auth.currentUser, {
        displayName: bio, // Pode adicionar outros campos como photoURL se necessário
      });

      alert('Cadastro Completo!');
      // Redirecionar ou realizar outra ação após completar o cadastro
    } catch (err) {
      alert('Erro ao completar o cadastro: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RootLayout>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Complete Your Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="profilePicture" className="block text-lg">Profile Picture</label>
            <input
              type="file"
              id="profilePicture"
              onChange={(e) => setProfilePicture(e.target.files[0])}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="bio" className="block text-lg">Bio</label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              {loading ? 'Completing Sign Up...' : 'Complete Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </RootLayout>
  );
};

export default CompleteSignUp;
