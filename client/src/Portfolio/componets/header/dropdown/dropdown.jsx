import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './dropdownMenu.module.css';

const DropdownMenu = ({ handleItemClicked }) => {
  return (
    <div className={styles.dropdownContainer}>
      <RouterLink to="/dashboard"><button className={styles.dashbord} >Dashboard</button></RouterLink>
      <ul className={styles.dropdown}>
        <li><RouterLink to="/dashboard">Home</RouterLink></li>
        <li ><div onClick={() => handleItemClicked("/dashboard/css") }>CSS</div></li>
        <li><div onClick={() => handleItemClicked("/dashboard/mongo")}>Mongo</div></li>
        <li><div onClick={() => handleItemClicked("/dashboard/node")}>Node Js</div></li>
        <li><div onClick={() => handleItemClicked("/dashboard/reactpage")}>React Page</div></li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
