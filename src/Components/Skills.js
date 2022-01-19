import React from "react";
import styles from './Skills.module.css';

import SkillCard from './SkillCard';

const Skills = ({
    competencies,
    proficiencies
}) => {
    return (
        <div className={styles.skills}>
            <SkillCard
                skills={competencies}
                title="Core Competencies"
            />
            <SkillCard
                skills={proficiencies}
                title="Technical Proficiencies"
            />
        </div>
    )
}

export default Skills;