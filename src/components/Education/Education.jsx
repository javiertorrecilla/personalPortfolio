import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import EducationCard from './EducationCard';
import { educationData } from '../../data/educationData';
import './Education.css';

function Education() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="education" id="education" style={{ backgroundColor: theme.secondary }}>
            <div className="education-body">
                <div className="education-image">
                    <img src={theme.eduimg} alt="Education" />
                </div>
                <div className="education-description">
                    <h1 style={{ color: theme.primary }}>Educación</h1>
                    {educationData.map((edu) => (
                        <EducationCard
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Education;