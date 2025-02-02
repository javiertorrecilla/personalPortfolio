import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css';

import { ThemeContext } from '../../context/ThemeContext';
import { skillsData } from '../../data/skillsData';
import { skillsImage } from '../../utils/skillsImage';

function Skills() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="skills" id='habilidades' style={{ backgroundColor: theme.secondary }}>
            <div className="skillsHeader">
                <h2 style={{ color: theme.primary }}>Habilidades</h2>
            </div>
            <div className="skillsContainer">
                <Marquee 
                    gradient={false} 
                    speed={50} 
                    pauseOnHover 
                    loop={0} 
                >
                    {[...skillsData, ...skillsData, ...skillsData].map((skill, id) => (
                        <div className="skill--box" key={id} style={{
                            backgroundColor: theme.secondary,
                            boxShadow: `0px 0px 15px ${theme.primary30}`
                        }}>
                            <img src={skillsImage(skill)} alt={skill} />
                            <h3 style={{ color: theme.tertiary }}>{skill}</h3>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}

export default Skills;
