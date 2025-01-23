import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Elimina Switch
import Main from './pages/Main';
import ScrollToTop from './utils/ScrollToTop';
import BackToTop from './components/BackToTop/BackToTop';

function App() {
  return (
    <div>
      <ScrollToTop /> {/* ScrollToTop debe estar fuera de Routes */}
      <Routes>
        <Route path='/' element={<Main />} /> {/* Usa `element` en lugar de `component` */}
      </Routes>
      <BackToTop />
    </div>
  );
}

export default App;