'use client'; // componente renderizado no browser 

import { useState } from 'react'; // permite que você crie variáveis dentro do componente que
// podem mudar ao longo do tempo
import { useRouter } from 'next/navigation'; //permite navegar entre as diferentes páginas 
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // icons do react

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Email e Senha corretos
  const correctEmail = 'admin@example.com';
  const correctPassword = 'admin123';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação
    if (email === correctEmail && password === correctPassword) {
      setErrorMessage(''); //Limpa a mensagem (erro)

      router.push('./Home'); 
    } else {
      setErrorMessage('E-mail ou senha incorretos.');
    }
  };

  return (
    <div style={{maxWidth: '700px', margin: '0 auto', padding: '1rem'  }}>
      <h1>Login</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '0.2rem', marginBottom: '0.3rem' }}
          />
        </div>
        <div style={{ position: 'relative' }}>
          <label>Senha:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '0.2rem', marginBottom: '0.3rem' }}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '65%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div style={{ marginBottom: '1rem'}}>
          <input
            type="checkbox"
            checked={rememberPassword}
            onChange={(e) => setRememberPassword(e.target.checked)}
          />
          <label style={{ marginLeft: '0.5rem'}}>Lembrar senha</label>
         
      
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
          
            padding: '0.80rem',
            backgroundColor: '#1E90FF	',
            color: '#fff',
            borderRadius: '100px',
            cursor: 'pointer',
          }}
        >
        
          Entrar
        </button> <p style={{ width:'200%'}}>Não possui uma conta? <a href="/Register">Registre-se Agora!</a></p>
       
      </form>
    </div>

     

  );
}







