import React, { useContext} from 'react';

import './Achievements.css';
import { ThemeContext } from '../../context/ThemeContext';
import { achievementData } from '../../data/achievementData'
import AchievementCard from './AchievementsCards';

function Achievements() {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            {achievementData.achievements.length > 0 && (
                <div className="achievement" id="certificaciones" style={{backgroundColor: theme.secondary}}>
                <div className="achievement-body">
                    <h1 style={{color: theme.primary}}>Certificaciones</h1>
                </div>
                <div className="achievement-cards">
                    {achievementData.achievements.map(achieve => ( 
                        <AchievementCard 
                        key={achieve.id}
                        id={achieve.id}
                        title={achieve.title}
                        details={achieve.details}
                        date={achieve.date}
                        field={achieve.field}
                        image={achieve.image}/>
                    ))}
                </div>
            </div>
            )}
        </>
    )
}

export default Achievements;