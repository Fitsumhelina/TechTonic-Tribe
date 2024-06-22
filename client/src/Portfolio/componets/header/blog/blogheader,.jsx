import { Link as RouterLink, useLocation } from 'react-router-dom';
import styles from './../header.module.css';
import Blogbtn from '../../button/blogbtn'; // Import Blogbtn component

function Blogheader() {
  const location = useLocation();

  // Check if the current location is the admin page
  const isAdminPage = location.pathname.startsWith('/post');

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Blogbtn />
      </div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <RouterLink to="/" className={styles.link}>Home</RouterLink>
          </li>
          {/* Always show the login button */}
          <li>
            <RouterLink to="/loginpage" className={`${styles.link} ${styles.login}`}>Login</RouterLink>
          </li>
          {/* Only show the additional admin functionalities if the user is logged in as admin */}
          {isAdminPage && (
            <>
              <li>
                <RouterLink to="/post" className={`${styles.link} ${styles.login}`}>Post</RouterLink>
              </li>
              <li>
                <RouterLink to="/dashboard" className={`${styles.link} ${styles.login}`}>Dashboard</RouterLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Blogheader;
