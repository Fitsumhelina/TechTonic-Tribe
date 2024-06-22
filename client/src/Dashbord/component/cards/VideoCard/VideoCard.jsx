import React from 'react';
import styles from './VideoCard.module.css';

function VideoCard({ videoLink, description, style , Title}) {
  return (
    <div className={`${styles.card} ${style ? style.card : ''}`}>
      <div className={styles.cardImage}>
        {videoLink && (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${getYouTubeVideoId(videoLink)}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className={styles.cardDescription}>
        <p className={styles.title}>{Title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

function getYouTubeVideoId(url) {
  const urlObj = new URL(url);
  if (urlObj.hostname === 'youtu.be') {
    return urlObj.pathname.slice(1);
  } else if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
    return urlObj.searchParams.get('v');
  }
  return null;
}

export default VideoCard;
