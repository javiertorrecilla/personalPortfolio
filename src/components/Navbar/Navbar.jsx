import React, { useState, useContext } from 'react';
import { FaBars, FaTimes, FaUser, FaGraduationCap, FaCode, FaBriefcase, FaLaptopCode, FaAward, FaTools, FaEnvelope } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-scroll'; // Importar react-scroll
import './Navbar.css';

function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { theme } = useContext(ThemeContext);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            {/* Navbar principal */}
            <nav className="navbar">
                <div className="navbar-left" style={{ color: theme.secondary }}>
                    Portfolio - Javier Torrecilla Reyes
                </div>
                <div className="navbar-right" onClick={toggleSidebar}>
                    <FaBars className="menu-icon" style={{ color: theme.secondary }} />
                </div>
            </nav>

            {/* Barra lateral */}
            <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} style={{ backgroundColor: `${theme.primary}80` }}>
                <div className="sidebar" style={{ backgroundColor: theme.secondary }}>
                    <div className="sidebar-header">
                        <FaTimes
                            className="close-icon"
                            onClick={toggleSidebar}
                            style={{ color: theme.primary }}
                        />
                    </div>
                    <div className="sidebar-buttons">
                        <Link
                            to="about"
                            smooth={true}
                            duration={1500}
                            className="rectangular-button"
                            style={{ backgroundColor: theme.primary, color: theme.secondary }}
                            onClick={toggleSidebar}
                        >
                            <FaUser className="button-icon" />
                            <span>¿Quién Soy?</span>
                        </Link>
                        <Link
                            to="education"
                            smooth={true}
                            duration={1500}
                            className="rectangular-button"
                            style={{ backgroundColor: theme.primary, color: theme.secondary }}
                            onClick={toggleSidebar}
                        >
                            <FaGraduationCap className="button-icon" />
                            <span>Educación</span>
                        </Link>
                        <Link
                            to="habilidades"
                            smooth={true}
                            duration={1500}
                            className="rectangular-button"
                            style={{ backgroundColor: theme.primary, color: theme.secondary }}
                            onClick={toggleSidebar}
                        >
                            <FaCode className="button-icon" />
                            <span>Habilidades</span>
                        </Link>
                        <Link
                            to="experiencia"
                            smooth={true}
                            duration={1500}
                            className="rectangular-button"
                            style={{ backgroundColor: theme.primary, color: theme.secondary }}
                            onClick={toggleSidebar}
                        >
                            <FaBriefcase className="button-icon" />
                            <span>Experiencia</span>
                        </Link>
                        <Link
                            to="proyectos"
                            smooth={true}
                            duration={1500}
                            className="rectangular-button"
                            style={{ backgroundColor: theme.primary, color: theme.secondary }}
                            onClick={toggleSidebar}
                        >
                            <FaLaptopCode className="button-icon" />
                            <span>Proyectos</span>
                        </Link>
                        <Link
                            to="certificaciones"
                            smooth={true}
                            duration={1500}
                            className="rectangular-button"
                            style={{ backgroundColor: theme.primary, color: theme.secondary }}
                            onClick={toggleSidebar}
                        >
                            <FaAward className="button-icon" />
                            <span>Certificaciones</span>
                        </Link>
                        <Link
                            to="servicios"
                            smooth={true}
                            duration={1500}
                            className="rectangular-button"
                            style={{ backgroundColor: theme.primary, color: theme.secondary }}
                            onClick={toggleSidebar}
                        >
                            <FaTools className="button-icon" />
                            <span>Servicios</span>
                        </Link>
                        <Link
                            to="contacts"
                            smooth={true}
                            duration={1500}
                            className="rectangular-button"
                            style={{ backgroundColor: theme.primary, color: theme.secondary }}
                            onClick={toggleSidebar}
                        >
                            <FaEnvelope className="button-icon" />
                            <span>Contactos</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;