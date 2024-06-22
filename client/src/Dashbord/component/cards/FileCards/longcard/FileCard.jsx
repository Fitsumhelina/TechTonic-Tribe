
import React from 'react';
import styles from './FileCard.module.css';

const FileCard = ({ title, description, image }) => (
  <div className={styles.fileContainer}>
    <img src={image} alt="File Icon" className={styles.fileImage} />
    <div className={styles.fileContent}>
      <p className={styles.fileTitle}>{title}</p>
      <p className={styles.fileDescription}>{description}</p>
    </div>
  </div>
);
export default FileCard;


