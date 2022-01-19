import React from "react";
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.mainNav}>
            <a href="#competencies">Core Competencies</a>
            <a href="#proficiencies">Technical Proficiencies</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
        </nav>
    )
}

export default Navigation;