import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Main from './pages/Main';
import ScrollToTop from './utils/ScrollToTop';
import BackToTop from './components/BackToTop/BackToTop';

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <BackToTop />
    </div>
  );
}

export default App;