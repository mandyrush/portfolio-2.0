import React from "react";

import styles from './SkillCard.module.css';

const SkillCard = ({
    skills,
    title
}) => {
    return (
        <div className={styles.skillCard}>
            <h3>{title}</h3>
            <ul>
                {skills && skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    )
}

export default SkillCard;