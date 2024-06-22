import React from 'react';
import styles from './wellcome.module.css';

const Wellcome = ({ title, subtitle, description, image }) => (
  <div className={styles.container}>
    <div className={styles.text}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <p className={styles.subtitle}>{description}</p>
    </div>
    <div className={styles.image}>
      <img src={image} alt="File Icon" className={styles.fileImage} />
    </div>
  </div>
);

export default Wellcome;
