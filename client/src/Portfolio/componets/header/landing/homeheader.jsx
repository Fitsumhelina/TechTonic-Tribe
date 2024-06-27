import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink ,useNavigate  } from 'react-router-dom';
import styles from './homeheader.module.css';
import Techtonichome from './../../button/techtonichome';
import DropdownMenu from './../dropdown/dropdown';


function Homeheader() {
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
        <img src="https://media.licdn.com/dms/image/D4E0BAQFtoH7AFayJWw/company-logo_200_200/0/1703627777248/techtonic_tribe_logo?e=1721260800&v=beta&t=a_wB0QFrU-XKXYfxBs58Uz8q1nsZ3PArl0hUeCxyQ7Y" alt="Tech Tonic " />
        <Techtonichome />
      </div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link to="/" offset={50} duration={500} className={styles.link}>Home</Link>
          </li>
          <li>
            <Link to="about" offset={50} duration={500} className={styles.link}>About</Link>
          </li>
          <li>
            <Link to="contact"offset={50} duration={500} className={styles.link}>Contact</Link>
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

export default Homeheader;
