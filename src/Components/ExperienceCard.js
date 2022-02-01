import React from "react";
import styles from './ExperienceCard.module.css';

const ExperienceCard = ({
    experience
}) => {
    return (
        <div className={styles.experienceCard}>
            <div className={styles.content}>
                <div>
                    <p className={styles.company}>{experience.company}</p>
                    <p><em>{experience.location}</em></p>
                    <p>{experience.dates}</p>
                </div>
                <div>
                    <p className={styles.title}>{experience.title}</p>
                    <p>{experience.description}</p>
                    <ul>
                        {experience.highlights.map((experience, index) => (
                            <li key={index}>{experience}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;