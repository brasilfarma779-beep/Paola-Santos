
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Erro ao renderizar a aplicação:", error);
  rootElement.innerHTML = `
    <div style="padding: 40px; font-family: sans-serif; text-align: center; color: #333;">
      <h2 style="color: #e5a8a8;">Houve um erro ao carregar a página</h2>
      <p>Por favor, recarregue a página ou tente novamente mais tarde.</p>
      <p style="font-size: 12px; color: #999;">Detalhes técnicos foram registrados no console.</p>
    </div>
  `;
}
