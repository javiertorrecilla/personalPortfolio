import React, { useContext } from 'react';
import './Footer.css';
import { ThemeContext } from '../../context/ThemeContext';
import { headerData } from '../../data/headerData';

function Footer() {
    const { theme } = useContext(ThemeContext);

    const shortname = (name) => {
        return name.length > 10 ? name.split(' ')[0] : name;
    };

    return (
        <div className="footer" style={{ backgroundColor: theme.primary }}>
            <p style={{ color: theme.secondary }}>
                Portfolio - Javier Torrecilla Reyes
            </p>
        </div>
    );
}

export default Footer;