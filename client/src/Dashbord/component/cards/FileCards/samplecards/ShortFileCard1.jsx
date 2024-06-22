import React from 'react';
import styles from './ShortFileCard1.module.css';
import { Link } from 'react-router-dom';



const ShortFileCard1 = ({ title, description, image ,link}) => (
  <Link to={link}>
    <div className={styles.fileContainer}>
    <img src={image} alt="File Icon" className={styles.fileImage} />
    <div className={styles.fileContent}>
      <p className={styles.fileTitle}>{title}</p>
      <p className={styles.fileDescription}>{description}</p>
    </div>


  </div>
  </Link>
);
export default ShortFileCard1;