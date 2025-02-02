import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { AiOutlineFolder } from "react-icons/ai";
import './Achievements.css';

function AchievementsCards({ id, title, details, date, field, image }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div 
            key={id} 
            className="achievement-card" 
            style={{ 
                backgroundColor: theme.primary30,
                transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.primary50;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.primary30;
            }}
        >
            <div className="achievecard-content">
                <div className="achievecard-details1">
                    <h2 style={{ color: theme.tertiary, fontWeight: 'bold'}}>{title}</h2>
                    <h3 style={{ color: theme.tertiary80 }}>{details}</h3>
                </div>
                <div className="achievecard-details2" style={{ color: theme.primary }}>
                    <h3 style={{fontStyle: 'italic'}}>{date}</h3>
                </div>
            </div>
            <div className="achievecard-imgcontainer">
                <img src={image} alt={title} />
            </div>
        </div>
    );
}

export default AchievementsCards;