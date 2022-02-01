import React from "react";
import styles from './PortfolioCard.module.css';

const PortfolioCard = ({
    project
}) => {
    return (
        <div className={styles.portfolioCard}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img src={project.imagePath} alt="" />
            </a>
        </div>
    )
}

export default PortfolioCard;