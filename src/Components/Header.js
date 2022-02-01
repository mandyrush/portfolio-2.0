import React from "react";
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.content}>
                    <h1>Amanda Rush</h1>
                    <h2>Frontend Developer</h2>
                    <p>A Frontend Developer with experience building responsive, accessible and beautiful web applications.</p>
                    <div>
                        <a href="mailto:mandyrush85@gmail.com">
                            <span className="fas fa-envelope"></span>
                        </a>
                        <a href="https://github.com/mandyrush" target="_blank" rel="noopener noreferrer">
                            <span className="fab fa-github"></span>
                        </a>
                        <a href="https://www.linkedin.com/in/amanda-rush/" target="_blank" rel="noopener noreferrer">
                            <span className="fab fa-linkedin"></span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;