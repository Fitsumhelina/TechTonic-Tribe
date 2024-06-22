import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './SideBar.module.css';

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.SideBar} ${isCollapsed ? styles.collapsed : ''}`}>
        <button className={styles.toggleButton} onClick={toggleSidebar}>
          <img className={styles.toggleIcon} alt="toggle" src="https://cdn.iconscout.com/icon/free/png-512/free-arrow-circle-o-left-button-navigation-44396.png?f=webp&w=256" />
        </button>
        <ul className={styles.list}>
          <li>
            <Link to={"/dashboard"} className={styles.link}>
              <img className={styles.icon} aria-hidden="true" alt="book" src="https://cdn-icons-png.flaticon.com/128/5520/5520300.png" />
              {!isCollapsed && <span>Home</span>}
            </Link>
          </li>
          <li>
            <Link to={"/dashboard/html"} className={styles.link}>
              <img className={styles.icon} aria-hidden="true" alt="html" src="https://cdn-icons-png.flaticon.com/128/1051/1051328.png" />
              {!isCollapsed && <span>HTML</span>}
            </Link>
          </li>
          <li>
            <Link to={"/dashboard/css"} className={styles.link}>
              <img className={styles.icon} aria-hidden="true" alt="css" src="https://cdn-icons-png.flaticon.com/128/732/732007.png" />
              {!isCollapsed && <span>CSS</span>}
            </Link>
          </li>
          <li>
            <Link to={"/dashboard/reactpage"} className={styles.link}>
              <img className={styles.icon} aria-hidden="true" alt="react" src="https://cdn-icons-png.flaticon.com/128/3393/3393920.png" />
              {!isCollapsed && <span>React</span>}
            </Link>
          </li>
          <li>
            <Link to={"/dashboard/node"} className={styles.link}>
              <img className={styles.icon} aria-hidden="true" alt="nodejs" src="https://cdn.iconscout.com/icon/free/png-512/free-nodejs-486862-2364931.png?f=webp&w=256" />
              {!isCollapsed && <span>Node.js</span>}
            </Link>
          </li>
          <li>
            <Link to={"/dashboard/mongo"} className={styles.link}>
              <img className={styles.icon} aria-hidden="true" alt="code" src="https://cdn-icons-png.flaticon.com/128/1602/1602309.png" />
              {!isCollapsed && <span>Mongo DB</span>}
            </Link>
          </li>
          <li>
            <Link to={"/dashboard/questions"} className={styles.link}>
              <img className={styles.icon} aria-hidden="true" alt="questions" src="https://cdn-icons-png.flaticon.com/128/2427/2427491.png" />
              {!isCollapsed && <span>Questions</span>}
            </Link>
          </li>

        <Link to={"/chat"} className={styles.link}>
          <img className={styles.icon} aria-hidden="true" alt="message" src="https://cdn-icons-png.flaticon.com/128/10227/10227633.png" />
          {!isCollapsed && <span>Message</span>}
        </Link>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
