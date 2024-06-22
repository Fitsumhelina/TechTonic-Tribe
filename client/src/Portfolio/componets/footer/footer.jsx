// Footer.jsx
import React from "react";
import { Link } from 'react-scroll';
import styles from "./footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';


const SocialLink = ({ src, href, alt }) => (
  <a href={href} className={styles.textBlue}>
    <img src={src} alt={alt} className={styles.footerlogo} />
  </a>
);

const QuickLink = ({ title, links, routingLinks }) => (
  <div>
    <h3 className={`${styles.textLg} ${styles.fontSemiBold} ${styles.mb2}`}>{title}</h3>
    <ul className={`${styles.spaceY} ${styles.textSm}`}>
      {links.map((link, index) => (
        <li key={link}>
          <a href={routingLinks[index]} className={styles.textBlue}>{link}</a>
        </li>
      ))}
    </ul>
  </div>
);


const ContactInfo = () => (
  <div>
    <h3 className={`${styles.infoh3} ${styles.fontSemiBold} ${styles.mb2}`}>Contact Us</h3>
    <ul className={`${styles.info} ${styles.textSm}`}>
      <li><FontAwesomeIcon icon={faMapMarker} className={styles.icon} /> <span className={styles.fontBold}>Address:</span> Ethiopia,Debre Berhan University</li>
      <li><FontAwesomeIcon icon={faPhone} className={styles.icon} /> <span className={styles.fontBold}>Phone:</span> 123-456-7890</li>
      <li><FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> <span className={styles.fontBold}>Email:</span> <a href="mailto:techtonic.inbox@gmail.com" className={styles.textBlue}>techtonic.inbox@gmail.com</a></li>
    </ul>
  </div>
);
function Footer() {
  return (
    <div className={`${styles.gradientBg} ${styles.footer}`} id="footer">
      <div className={`${styles.maxW} ${styles.mxAuto} ${styles.gridCols4}`}>
        <div>
          <div className={styles.footermain}>
            <img src="https://media.licdn.com/dms/image/D4E0BAQFtoH7AFayJWw/company-logo_200_200/0/1703627777248/techtonic_tribe_logo?e=1721260800&v=beta&t=a_wB0QFrU-XKXYfxBs58Uz8q1nsZ3PArl0hUeCxyQ7Y" alt="" className={styles.footerimg} />
            <h2 className={`${styles.textLg} ${styles.fontBold} ${styles.mb2}`}>TechTonic</h2>
          </div>
          <p className={styles.textSm}>
            The Techtonic Tribe is a community within the larger organization of DBU (Debre Berhan University) that focuses on technology enthusiasts, professionals, and learners {' '}
            <Link to="about" className={styles.textBlue}>Read More</Link>
          </p>
          <div className={styles.flexSpaceX}>
            <SocialLink href="https://t.me/Techtonic_Tribe" alt="Telegram" src={`https://cdn-icons-png.flaticon.com/128/124/124019.png`} />
            <SocialLink href="" alt="Instagram" src={`https://th.bing.com/th/id/OIP.Px8IeqgyYz0tcW28Hr1jMwAAAA?w=393&h=393&rs=1&pid=ImgDetMain`} />
            <SocialLink href="https://www.tiktok.com/@tech_tonic_tribe?is_from_webapp=1&sender_device=pc" alt="Tiktok" src={`https://th.bing.com/th/id/R.1755420b50dc0e11e0fe3cec53407535?rik=kKS9AcGsQMC63w&pid=ImgRaw&r=0`} />
            <SocialLink href="https://www.linkedin.com/company/techtonic-tribe/" alt="LinkedIn" src={`https://cdn-icons-png.flaticon.com/128/124/124011.png`} />
          </div>
        </div>
      
        <QuickLink
          className="devinfo"
          title="Developer's information"
          links={['Fitsum helina', 'Yeabsira', 'Feedback', ]}
          routingLinks={['https://github.com/Fitsumhelina', 'https://github.com/Yabe12', 'mailto:dev.fitsum@gmail.com']}
          />
        <QuickLink
          title="Learn About"
          links={['Mongo', 'html', 'css', 'React','Node']}
          routingLinks={['/dashboard/mongo', '/dashboard/html', '/dashboard/css', '/dashboard/reactpage','/dashboard/node']}
          />
      

        <ContactInfo />
      </div>
    </div>
  );
}

export default Footer;
