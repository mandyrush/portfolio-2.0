import React from "react";
import styles from './Portfolio.module.css';

import PortfolioCard from './PortfolioCard';

const Portfolio = ({
    projects
}) => {
    return (
        <div className={styles.portfolio}>
            <h2>Portfolio</h2>
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