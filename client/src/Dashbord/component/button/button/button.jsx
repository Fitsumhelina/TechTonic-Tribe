import React from 'react';
import styles from './button.module.css';

const Button = ({ link }) => (
  <div className="button-html">
    <a href={link} className={styles.button} target="_blank" rel="noopener noreferrer">
      SOLOLEARN
    </a>
  </div>
);

export default Button;
