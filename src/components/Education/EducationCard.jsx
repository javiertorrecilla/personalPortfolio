import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg';
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg';
import './Education.css';

function EducationCard({ id, institution, course, startYear, endYear }) {
    const { theme } = useContext(ThemeContext);

    return (
        <motion.div
            key={id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: `0 8px 24px ${theme.primary50}` }} // Efecto hover
            className="education-card"
            style={{ backgroundColor: theme.primary30 }}
        >
            <div className="educard-img" style={{ backgroundColor: theme.primary }}>
                <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
            </div>
            <div className="education-details">
                <h2 style={{ color: theme.primary }}>{startYear}-{endYear}</h2>
                <h2 style={{ color: theme.tertiary }}>{course}</h2>
                <h3 style={{ color: theme.tertiary80 }}>{institution}</h3>
            </div>
        </motion.div>
    );
}

export default EducationCard;