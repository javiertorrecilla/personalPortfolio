import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Main from './pages/Main';
import Prueba from './pages/prueba';
import ScrollToTop from './utils/ScrollToTop';
import BackToTop from './components/BackToTop/BackToTop';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';

export default function App() {
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/curriculum" element={<Prueba />} />
        </Routes>
      </div>
    </main>
  );
}
