import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Mongo.module.css';
import SideBar from '../../component/bars/SideBar/SideBar';
import Banner from '../../component/cards/banner/banner';
import VideoCard from '../../component/cards/VideoCard/VideoCard';
import TextCard from '../../component/cards/text/text';

function Mongo() {
  const [beginnerVideos, setBeginnerVideos] = useState([]);
  const [intermediateVideos, setIntermediateVideos] = useState([]);
  const [advancedVideos, setAdvancedVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const beginnerResponse = await axios.get('http://localhost:5000/api/videos/mongo/beginner');
        setBeginnerVideos(beginnerResponse.data);

        const intermediateResponse = await axios.get('http://localhost:5000/api/videos/mongo/intermediate');
        setIntermediateVideos(intermediateResponse.data);

        const advancedResponse = await axios.get('http://localhost:5000/api/videos/mongo/advanced');
        setAdvancedVideos(advancedResponse.data);
      } catch (error) {
        console.error('Error fetching MongoDB videos:', error);
        setError('Failed to load videos. Please try again later.');
      }
    };
    fetchVideos();
  }, []);

  const longText = `
  ### What is MongoDB?

  MongoDB is a document database designed for ease of application development and scaling. It offers flexible and scalable data management solutions for various use cases.

  ### Key Features:
  - **Document-Based Storage**: Stores data in JSON-like documents, making it flexible and easier to work with.
  - **Scalability**: Designed to scale out with ease across multiple servers.
  - **High Performance**: Provides high read and write throughput.
  - **Rich Query Language**: Supports ad hoc queries, indexing, and real-time aggregation.

  ### Getting Started:
  1. **Deploy MongoDB**: Create a cluster in MongoDB Atlas or set up a self-managed instance.
  2. **Connect to Your Database**: Use MongoDB drivers or MongoDB Shell.
  3. **CRUD Operations**: Insert, query, update, and delete documents.
  4. **Data Modeling**: Design schemas to optimize for frequent access patterns.

  ### Installation Guides:
  - **Linux**: Follow instructions for RPM or DEB packages.
  - **macOS**: Install via Homebrew or direct download.
  - **Windows**: Use the MSI installer or run a Docker container.

  ### Advanced Features:
  - **Aggregation Framework**: Transform data and perform complex queries.
  - **Replication and Sharding**: Ensure high availability and horizontal scalability.
  - **Security**: Implement robust access controls and encryption.

  For more details, visit the [MongoDB documentation](https://docs.mongodb.com).

  **Happy Learning!**
  `;

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.body}>
        <div className={styles.upper}>
          <Banner
            title="Welcome to MONGO DB "
            subtitle="What do you think about MONGO DB?  🤔 "
            buttonText="More About me"
            buttonLink="https://www.w3schools.com/mongodb/index.php" 
            backgroundImage="https://th.bing.com/th/id/R.a320703d0b82f4fd90b713a5f36ad674?rik=QvitRUsu8vaf2A&pid=ImgRaw&r=0"
          />
        </div>
        <div className={styles.bottom}>
          {error ? (
            <p className={styles.error}>{error}</p>
          ) : (
            <>
              <div className={styles.videoSection}>
                <h2>Beginner Videos</h2>
                <div className={styles.videos}>
                  {beginnerVideos.map(video => (
                    <VideoCard key={video._id} Title={video.topic} videoLink={video.videoLink} description={video.description} />
                  ))}
                </div>
              </div>
              <div className={styles.videoSection}>
                <h2>Intermediate Videos</h2>
                <div className={styles.videos}>
                  {intermediateVideos.map(video => (
                    <VideoCard key={video._id} Title={video.topic} videoLink={video.videoLink} description={video.description} />
                  ))}
                </div>
              </div>
              <div className={styles.videoSection}>
                <h2>Advanced Videos</h2>
                <div className={styles.videos}>
                  {advancedVideos.map(video => (
                    <VideoCard key={video._id} Title={video.topic}  videoLink={video.videoLink} description={video.description} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <div className={styles.text}>
          <TextCard 
            title="⭐️⭐️SUMMARY OF MONGO DB⭐️⭐️"
            text={longText}
            className={styles.textCard}
          />
        </div>
      </div>
    </div>
  );
}

export default Mongo;
