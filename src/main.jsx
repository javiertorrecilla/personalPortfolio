import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter
import './index.css';
import App from './App.jsx';
import ThemeContextProvider from './context/ThemeContext.jsx'; // Importa ThemeProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Envuelve ThemeContextProvider y App con BrowserRouter */}
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </BrowserRouter>
  </StrictMode>,
);