import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importe o componente principal do seu aplicativo

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);