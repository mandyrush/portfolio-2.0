import React from "react";
import { useState, useEffect } from "react";
import styles from './Navigation.module.css';

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setShowMenu(false);
        }
        setIsMobile(window.innerWidth < 768);
    }, [])

    const toggleMenu = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu);
    }

    return (
        <div className={styles.mainNav}>
            <div className="container">
                <div className={styles.navContent}>
                    {showMenu && (
                        <nav>
                            <a href="#portfolio" className="link">Portfolio</a>
                            <a href="#experience" className="link">Experience</a>
                            <a href="#skills" className="link">Skills</a>
                            <a href="mailto:mandyrush85@gmail.com" className="link">Contact</a>
                        </nav>
                    )}
                    {isMobile && (
                        <button onClick={(e) => toggleMenu(e)}>
                            <i className="fas fa-bars"></i>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navigation;