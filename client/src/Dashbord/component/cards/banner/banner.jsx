import React from 'react';
import styles from './banner.module.css';

const Banner = ({ title, subtitle, buttonText, buttonLink, backgroundImage }) => (
    <div className={styles.container}>
        <div
            className={styles.banner}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <div className={styles.button}>

                    <a href={buttonLink} className={styles.button}>Click For More</a>
                </div>
            </div>
        </div>
    </div>
);

export default Banner;

