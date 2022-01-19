import React from "react";
import styles from './ExperienceCard.module.css';

const ExperienceCard = ({
    experience
}) => {
    return (
        <div className={styles.experience}>
            <p>{experience.company}</p>
            <p>{experience.location}</p>
            <p>{experience.dates}</p>
            <p>{experience.title}</p>
            <p>{experience.description}</p>
        </div>
    )
}

export default ExperienceCard;