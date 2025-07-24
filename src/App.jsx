import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Certificaciones from './components/Blog';

export default function App() {
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/curriculum" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/certificaciones" element={<Certificaciones />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </div>
    </main>
  );
}
