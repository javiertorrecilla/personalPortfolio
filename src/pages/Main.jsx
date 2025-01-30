import React from 'react';
import { Helmet } from 'react-helmet';
import Landing from '../components/Landing/Landing';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Education from '../components/Education/Education';
import { headerData } from '../data/headerData';

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Portfolio</title>
      </Helmet>

      <Navbar/>
      <Landing />
      <About />
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Main;