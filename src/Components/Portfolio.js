import React from "react";
import styles from './Portfolio.module.css';

import PortfolioCard from './PortfolioCard';

const Portfolio = ({
    projects
}) => {
    return (
        <div id="portfolio" className={styles.portfolio}>
            <header className="vertical-header">
                <h2>Portfolio</h2>
            </header>
            {projects && (
                <div className={styles.projects}>
                    {projects.map((project, index) => (
                        <PortfolioCard key={index} project={project} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Portfolio;