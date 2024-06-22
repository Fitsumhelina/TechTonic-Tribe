import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './../header.module.css';
import Chatpagebtn from './../../button/chatpagebtn';

function Chatpageheader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Chatpagebtn />
      </div>
      <nav>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <li>
            <RouterLink to="/" className={styles.link}>Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/dashboard" className={styles.link}>Dashboard</RouterLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Chatpageheader;
