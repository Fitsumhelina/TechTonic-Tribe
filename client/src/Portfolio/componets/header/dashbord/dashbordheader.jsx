import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import styles from './../header.module.css';
import Dashboardbtn from './../../button/dashboardbtn';
import { useUserStore } from './../../../../../../server/lib/userStore'; // Adjust the path as per your file structure

function Dashbordheader() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { currentUser, isLoading } = useUserStore(); // Get currentUser and isLoading from the store

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  const handleItemClicked = (path) => {
    navigate(path);
  };

  useEffect(() => {

    // Check if currentUser exists to decide navigation state
    if (!currentUser && !isLoading) {
      navigate("/login");
    }
  }, [currentUser, isLoading, navigate]);

  return (
    <header className={`${styles.header} ${styles.gradientBG}`}>
      <div className={styles.logo}>
        <img
          src="https://media.licdn.com/dms/image/D4E0BAQFtoH7AFayJWw/company-logo_200_200/0/1703627777248/techtonic_tribe_logo?e=1721260800&v=beta&t=a_wB0QFrU-XKXYfxBs58Uz8q1nsZ3PArl0hUeCxyQ7Y"
          alt="Tech Tonic"
        />
        <Dashboardbtn />
      </div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <RouterLink to="/" className={`${styles.link} ${styles.link}`}>
              Back
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/blog" className={styles.blog}>
              Blog
            </RouterLink>
          </li>
          {currentUser ? (
            <li>
              <div className={styles.logo}>
                <img
                  src={currentUser.avatar || "/avatar.png"} // Replace with actual avatar URL
                  alt="User Avatar"
                  className={styles.avatar}
                />
              </div>
            </li>
          ) : (
            <li>
              <RouterLink to="/login" className={`${styles.link} ${styles.login}`}>
                Login
              </RouterLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Dashbordheader;