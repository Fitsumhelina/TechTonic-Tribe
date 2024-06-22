import React from 'react';
import styles from './card.module.css';


const card = ({ title, description, image ,link }) => (
  <a href={link}>
  <div className={styles.fileContainer}>
    <img src={image} alt="File Icon" className={styles.fileImage} />
    <div className={styles.fileContent}>
      <p className={styles.fileTitle}>{title}</p>
      <p className={styles.fileDescription}>{description}</p>
    </div>
  </div>
  </a>
);
export default card;