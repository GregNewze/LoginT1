import React, { useState } from 'react';
import '../styles/register.css'; // Importa o CSS de estilização
import router from 'next/router';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => { // Define uma função para lidar com o envio do formulário, recebendo um evento de formulário.
    event.preventDefault(); //Impede o comportamento padrão do navegador ao enviar o formulário, permitindo execução de lógica personalizada.
    // As senhas coincidem
    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }
    console.log({ name, email, password });
    alert('Registro realizado com sucesso!');
    
    router.push('./CreationPerfil'); //Dps do registro ser realizado ele redireciona o Usuário a pág. CreationPerfil
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Registro</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Registrar</button>
        </form>

        <p>
          Já tem uma conta?{' '}
          <a href="/">Faça login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
