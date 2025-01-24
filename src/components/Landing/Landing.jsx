import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import { ThemeContext } from '../../context/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Landing.css';

function Landing() {
  const { theme } = useContext(ThemeContext); // Accede al tema actual
  const [isHoveredResume, setIsHoveredResume] = useState(false); // Estado para el hover del botón "Download CV"
  const [isHoveredContact, setIsHoveredContact] = useState(false); // Estado para el hover del botón "Contact"

  // Estilos dinámicos para los botones
  const buttonStyles = {
    resumeBtn: {
      backgroundColor: isHoveredResume ? theme.primary : 'transparent',
      color: isHoveredResume ? theme.secondary : theme.primary,
      border: `2px solid ${theme.primary}`,
      borderRadius: '30px',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      fontWeight: '500',
      fontFamily: 'var(--primaryFont)',
      cursor: 'pointer',
      transition: 'background-color 0.3s, color 0.3s',
    },
    contactBtn: {
      backgroundColor: isHoveredContact ? theme.secondary : theme.primary,
      color: isHoveredContact ? theme.primary : theme.secondary,
      border: `2px solid ${theme.primary}`,
      borderRadius: '30px',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      fontWeight: '500',
      fontFamily: 'var(--primaryFont)',
      cursor: 'pointer',
      transition: 'background-color 0.3s, color 0.3s',
    },
  };

  return (
    <div className='landing'>
      <div className='landing--container'>
        <div
          className='landing--container-left'
          style={{ backgroundColor: theme.primary }}
        >
          <div className='lcl--content'>
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target='_blank' rel='noreferrer'>
                <FaLinkedin
                  className='landing--social'
                  style={{ color: theme.secondary }}
                  aria-label='LinkedIn'
                />
              </a>
            )}
            {socialsData.github && (
              <a href={socialsData.github} target='_blank' rel='noreferrer'>
                <FaGithub
                  className='landing--social'
                  style={{ color: theme.secondary }}
                  aria-label='GitHub'
                />
              </a>
            )}
          </div>
        </div>
        <img
          src={headerData.image}
          alt=''
          className='landing--img'
          style={{
            opacity: theme.drawerOpen ? '0' : '1',
            borderColor: theme.secondary,
          }}
        />
        <div
          className='landing--container-right'
          style={{ backgroundColor: theme.secondary }}
        >
          <div className='lcr--content' style={{ color: theme.tertiary }}>
            <h6>{headerData.title}</h6>
            <h1>{headerData.name}</h1>
            <p>{headerData.desciption}</p>

            <div className='lcr-buttonContainer'>
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf} // TODO: Cambair esto por mi CV
                  download='resume'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button
                    style={buttonStyles.resumeBtn}
                    onMouseEnter={() => setIsHoveredResume(true)}
                    onMouseLeave={() => setIsHoveredResume(false)}
                  >
                    Descargar CV
                  </button>
                </a>
              )}
              <Link
                  to='contacts' 
                  smooth={true}
                  spy={true}
                  duration={2000}
              >
                  <button
                      className='contactBtn'
                      style={buttonStyles.contactBtn}
                      onMouseEnter={() => setIsHoveredContact(true)}
                      onMouseLeave={() => setIsHoveredContact(false)}
                  >
                      Contacto
                  </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;