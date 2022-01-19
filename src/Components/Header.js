import React from "react";
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Amanda Rush</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, maxime amet neque corrupti alias molestias quaerat velit harum? Facilis aliquid et, asperiores velit odio officiis quisquam quae atque expedita distinctio!</p>
            <div>
                <a href="https://github.com/mandyrush" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/amanda-rush/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:mandyrush85@gmail.com">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </header>
    )
}

export default Header;