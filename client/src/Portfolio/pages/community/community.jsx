import React from 'react';
import styles from './community.module.css';
import Join from '../../../Dashbord/component/cards/FileCards/HomePagecard/card';

function Community() {
  return (
    <section id ="blongcard">
        

            <h1 className={styles.join}> Join The Community </h1>
                <div className={styles.joincards}>
                        <div className={styles.one}>
                            <Join
                                link="https://t.me/Techtonic_Tribe/4"                                
                                title="Resource Pool"
                                description=" coding and tech related resources files "
                                image="https://cdn-icons-png.flaticon.com/128/3532/3532324.png"
                                />
                        </div>

                        <div className={styles.two}>
                            <Join
                                link="https://t.me/Techtonic_Tribe/552"
                                title="Fun and Joy"
                                description="Tech related meme and fun stuff"
                                image="https://cdn-icons-png.flaticon.com/128/6359/6359280.png"
                                
                                />
                        </div>
                        <div className={styles.two}>
                            <Join
                                link="https://t.me/Techtonic_Tribe/381"
                                title="News"
                                description="Recent Tech related news and post  "
                                image="https://cdn-icons-png.flaticon.com/128/7504/7504253.png"
                                
                                />
                        </div>

                        <div className={styles.three}>
                            <Join
                                link="https://t.me/Techtonic_Tribe/245"
                                title="Art and Book "
                                description="You can find the collection of book and art here"
                                image="https://cdn-icons-png.flaticon.com/128/6655/6655045.png"

                            /></div>
                        <div className={styles.four}>
                            <Join
                                link="https://t.me/Techtonic_Tribe/7"
                                title="Opportunity "
                                description="Join and find more Tech related opportunities"
                                image="https://cdn-icons-png.flaticon.com/128/8790/8790455.png"

                            /></div>
                    
                </div>
    </section>
  );
}

export default Community;
