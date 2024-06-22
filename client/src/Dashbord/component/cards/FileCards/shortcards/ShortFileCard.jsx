import React from 'react';
import styles from './ShortFileCard.module.css';

const ShortFileCard = ({ title, description, image }) => (
    <div className={styles.fileContainer}>
      <img src={image} alt="File Icon" className={styles.fileImage} />
      <div className={styles.fileContent}>
        <p className={styles.fileTitle}>{title}</p>
        <p className={styles.fileDescription}>{description}</p>
      </div>
    </div>
);
export default ShortFileCard;