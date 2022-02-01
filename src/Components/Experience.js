import React from "react";
import ExperienceCard from './ExperienceCard';

import styles from './Experience.module.css';

const Experience = ({
    experience
}) => {
    return (
        <div id="experience" className={styles.experience}>
            <header className="vertical-header">
                <h2 className="vertical">Experience</h2>
            </header>
            <div className={styles.content}>
                <div className="container">
                    {experience && experience.map((e, index) => (
                        <ExperienceCard key={index} experience={e} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;