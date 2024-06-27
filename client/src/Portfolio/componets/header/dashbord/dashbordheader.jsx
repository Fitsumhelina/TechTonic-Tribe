import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import styles from './../header.module.css';
import Dashboardbtn from './../../button/dashboardbtn';
import { useUserStore } from './../../../../../../server/lib/userStore'; // Adjust the path as per your file structure
import { auth } from './../../../../../../server/lib/firebase'; // Adjust the path as per your file structure
import { useChatStore } from './../../../../../../server/lib/chatStore'; // Adjust the path as per your file structure
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

function Dashbordheader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);
  const navigate = useNavigate();
  const { currentUser, isLoading, logout } = useUserStore(); // Get currentUser, isLoading, and logout from the store
  const { resetChat } = useChatStore(); // Import resetChat from useChatStore

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  const handleItemClicked = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close the menu on navigation
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      await logout();
      resetChat();
      navigate("/login");
    } catch (err) {
      console.log('Error during logout:', err);
    }
  };

  const toggleAvatarMenu = () => {
    setShowAvatarMenu(!showAvatarMenu);
  };

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
        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <li>
            <RouterLink to="/" className={styles.link} onClick={() => setIsMenuOpen(false)}>
              Back
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/blog"  onClick={() => setIsMenuOpen(false)}>
              <button className={styles.blog} >Blog</button>
            </RouterLink>
          </li>
          {currentUser ? (
            <li className={styles.avatarContainer}>
              <img
                src={currentUser.avatar || "/avatar.png"} // Replace with actual avatar URL
                alt="User Avatar"
                className={styles.avatar}
                onClick={toggleAvatarMenu}
              />
              {showAvatarMenu && (
                <button className={styles.logoutButton} onClick={handleLogout}>
                  Logout
                </button>
              )}
            </li>
          ) : (
            <li>
              <RouterLink to="/login"  onClick={() => setIsMenuOpen(false)}>
               <button className={styles.blog}> Login </button> 
              </RouterLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Dashbordheader;
