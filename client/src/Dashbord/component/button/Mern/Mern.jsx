import React from 'react';
import styles from './Message.module.css';

const Mern = ({ title, description, image }) => (
    <div className={styles.fileContainer}>
      <img src={image} alt="File Icon" className={styles.fileImage} />
      <div className={styles.fileContent}>
        <p className={styles.fileTitle}>{title}</p>
      </div>
    </div>
);
export default Mern;