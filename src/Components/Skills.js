import React from "react";
import styles from './Skills.module.css';

import SkillCard from './SkillCard';

const Skills = ({
    competencies,
    proficiencies
}) => {
    return (
        <div id="skills" className={styles.skills}>
            <header className="vertical-header">
                <h2 className="vertical">Skills</h2>
            </header>
            <div className={styles.skillCards}>
                <SkillCard
                    skills={competencies}
                    title="Core Competencies"
                />
                <SkillCard
                    skills={proficiencies}
                    title="Technical Proficiencies"
                />
            </div>
        </div>
    )
}

export default Skills;