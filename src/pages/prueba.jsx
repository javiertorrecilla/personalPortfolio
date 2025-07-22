import React from 'react';
import { Helmet } from 'react-helmet';
import Landing from '../components/Landing/Landing';
import About from '../components/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar';
import Education from '../components/Education/Education';
import Achievements from '../components/Achievements/Achievements';
import Skills from '../components/Skills/Skills'
import { headerData } from '../data/headerData';

function Prueba() {
  return (
    <div>
      <Helmet>
        <title>Javier Torrecilla Reyes - Portfolio</title>
      </Helmet>

      <Navbar/>
    </div>
  );
}

export default Prueba;