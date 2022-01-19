import React from "react";
import styles from './PortfolioCard.module.css';

const PortfolioCard = ({
    project
}) => {
    return (
        <div className={styles.portfolioCard}>
            <p>Project Name</p>
        </div>
    )
}

export default PortfolioCard;