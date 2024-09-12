
import '../styles/home.css'; // Certifique-se de que o caminho está correto
import profilePic from './images/Profile.png';
import {Link} from 'react-router-dom';
import React, { createContext, useContext, useState } from 'react';



interface UserProfile {
  name: string;
  photoUrl: string; // Adicione esta propriedade para a foto do perfil
  age: number;
  profession: string;
  programmingSkills: string[];
}

// Exemplo de perfil logado
const userProfile: UserProfile = {
  name: 'Érico Nunes',
  photoUrl: '', // Substitua pelo caminho da imagem real
  age: 16,
  profession: 'Desenvolvedor Full Stack',
  programmingSkills: ['C++', 'Javascript', 'TypeScript', 'React', 'Node.js'],
};

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex items-center space-x-6">
          <div className="relative w-36 h-36">
          {/*<img className="img" src="profilePic" alt='Profile.png'            />*/}
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mt-4 mb-2">{userProfile.name}</h1>
            <p className="text-lg mb-2">
              <strong>Idade:</strong> {userProfile.age} anos
            </p>
            <p className="text-lg mb-4">
              <strong>Profissão:</strong> {userProfile.profession}
            </p>
            <h3 className="text-xl font-semibold mb-2">Habilidades de Programação:</h3>
            <ul className="list-disc list-inside text-lg">
              {userProfile.programmingSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <div>
                <button className="Button"><h3 >Meus Projetos</h3></button>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
