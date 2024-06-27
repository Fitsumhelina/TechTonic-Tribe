import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink,useNavigate  } from 'react-router-dom';
import styles from './../header.module.css';
import Techtonicbtn from './../../button/techtonicbtn';
import DropdownMenu from './../dropdown/dropdown';

function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  const handleItemClicked = (path) => {
    navigate(path);
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Techtonicbtn />
      </div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <ScrollLink to="home"  offset={50} duration={500} className={styles.link}>Home</ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" offset={50} duration={500} className={styles.link}>About</ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact"  offset={50} duration={500} className={styles.link}>Contact</ScrollLink>
          </li>
          <li>
            <RouterLink to="/blog" offset={50} duration={500}><button  className={styles.blog} > Blog </button></RouterLink>
          </li>
     
         <li
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={styles.dashboardContainer}
          >
            <DropdownMenu handleItemClicked={handleItemClicked} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
