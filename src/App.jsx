import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Main from './pages/Main';
import prueba from './pages/prueba';
import ScrollToTop from './utils/ScrollToTop';
import BackToTop from './components/BackToTop/BackToTop';

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/resume' element={<prueba />} />
      </Routes>
      <BackToTop />
    </div>
  );
}

export default App;