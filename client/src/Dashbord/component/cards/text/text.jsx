import React from 'react';
import styles from './text.module.css';

const TextCard = ({ title, text }) => (
  <div className={styles.textCard}>
    <h1>{title}</h1>
    {text.split('\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </div>
);

export default TextCard;
