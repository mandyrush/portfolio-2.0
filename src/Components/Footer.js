import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href="mailto:mandyrush85@gmail.com">
                <span className="fas fa-envelope"></span>
            </a>
            <a href="https://github.com/mandyrush" target="_blank" rel="noopener noreferrer">
                <span className="fab fa-github"></span>
            </a>
            <a href="https://www.linkedin.com/in/amanda-rush/" target="_blank" rel="noopener noreferrer">
                <span className="fab fa-linkedin"></span>
            </a>
        </footer>
    )
}

export default Footer;