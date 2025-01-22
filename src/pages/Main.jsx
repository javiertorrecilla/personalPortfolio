import React from 'react';
import { Helmet } from 'react-helmet';
import Landing from '../components/Landing/Landing';
import About from '../components/about/About';
import { headerData } from '../data/headerData';

function Main() {
  return (
    <div>
      {/* Configuración del título de la página con Helmet */}
      <Helmet>
        <title>{headerData.name} - Portfolio</title>
      </Helmet>

      {/* Renderización de los componentes */}
      <Landing />
      <About />
    </div>
  );
}

export default Main;