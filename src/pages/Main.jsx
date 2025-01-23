import React from 'react';
import { Helmet } from 'react-helmet';
import Landing from '../components/Landing/Landing';
import About from '../components/about/About';
import Contact from '../components/Contact/Contact';
import { headerData } from '../data/headerData';

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Portfolio</title>
      </Helmet>

      <Landing />
      <About />
      <Contact/>
    </div>
  );
}

export default Main;