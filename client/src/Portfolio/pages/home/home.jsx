import React, { useState, useEffect } from 'react';
import styles from './home.module.css';
import { Link as RouterLink } from 'react-router-dom';
import Signup from './../../componets/button/signup.jsx';
import Next from '../../componets/button/next.jsx';
import Homeheader from './../../componets/header/landing/homeheader.jsx';
import { useUserStore } from './../../../../../server/lib/userStore.js'; // Adjust the path as per your file structure


const words = ["Tribe", "Family", "Community", "Former", "Tech-Group", "Problem-Solvers", "Code-Enthusiast", "Coder", "Dreamer"];

function Home() {
  const { currentUser } = useUserStore(); // Get currentUser from the store
  const [dynamicWord, setDynamicWord] = useState(words[0]);
  const [dynamicColor, setDynamicColor] = useState("#37FF8B");

  const animateWord = (word) => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDynamicWord(word.substring(0, index + 1));
      if (index === word.length - 1) {
        clearInterval(typingInterval);
      }
      index++;
    }, 150);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setDynamicColor("#37FF8B");
      animateWord(randomWord);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const buttonData = currentUser ? [
    {
      name: 'Chat',
      link: "/chat"
    }
  ] : [
    {
      name: 'Create Account',
      link: "/register"
    },
    {
      name: 'Log In',
      link: "/login"
    }
  ];

  return (
    <section id="home">
      <div className={styles.container} id='Home'>
        <Homeheader />
        <main className={styles.main}>
          <h1 className={styles.dynamicText}>
            We are a <span style={{ color: dynamicColor }} id="dynamicWord">{dynamicWord}</span>.
          </h1>
          <div className={styles.hometext}>
            <p>
              Techtonic Tribe is a vibrant community dedicated to fostering innovation, collaboration, and personal growth.
            </p>
          </div>
          <div className={styles.chat}>
            <p> Chat With Your Friends </p>
            <div className={styles.signup}>
              {buttonData.map((data, index) => (
                <Signup
                  key={index}
                  Name={data.name}
                  link={data.link}
                />
              ))}
            </div>
          </div>
        </main>
        <div className={styles.next}><Next path={'about'} /></div>
      </div>
    </section>
  );
}

export default Home;