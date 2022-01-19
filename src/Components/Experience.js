import React from "react";
import ExperienceCard from './ExperienceCard';

import styles from './Experience.module.css';

const Experience = ({
    experience
}) => {
    return (
        <div className={styles.experience}>
            <h2>Professional Experience</h2>
            {experience && experience.map((e, index) => (
                <ExperienceCard key={index} experience={e} />
            ))}
        </div>
    )
}

export default Experience;