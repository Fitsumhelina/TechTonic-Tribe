import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './../header.module.css';
import Loginbtn from '../../button/loginbtn';


function loginheader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Loginbtn />
      </div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <RouterLink to="/" className={styles.link}>Home</RouterLink>
          </li>
    
          <li>
            <RouterLink to="/dashboard" className={`${styles.link} ${styles.login}`}>Dashboard</RouterLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default loginheader;
