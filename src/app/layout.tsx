'use client';

import React from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div style={containerStyle}>
          <div style={contentStyle}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

const containerStyle = { // fundo acima e abaixo da caixa de login
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '',
};

const contentStyle  = {  //caixa de login
  backgroundColor: '#fff',
  padding: '2rem',
  borderRadius: '20px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  width: '100%',
  maxWidth: '400px',
};
