import React from "react";
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={styles.mainNav}>
            <nav className="container">
                <a href="#portfolio" className="link">Portfolio</a>
                <a href="#skills" className="link">Skills</a>
                <a href="#experience" className="link">Experience</a>
                <a href="mailto:mandyrush85@gmail.com" className="link">Contact</a>
            </nav>
        </div>
    )
}

export default Navigation;