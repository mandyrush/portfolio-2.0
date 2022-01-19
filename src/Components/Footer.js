import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href="https://github.com/mandyrush" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/amanda-rush/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:mandyrush85@gmail.com">
                <i className="fas fa-envelope"></i>
            </a>
        </footer>
    )
}

export default Footer;