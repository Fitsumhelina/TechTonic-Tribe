import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Html.module.css'; 
import SideBar from '../../component/bars/SideBar/SideBar';
import Banner from '../../component/cards/banner/banner';
import VideoCard from '../../component/cards/VideoCard/VideoCard';
import TextCard from '../../component/cards/text/text';
import Wellcome from '../../component/cards/wellcome/wellcome';

function Html() {
  const [beginnerVideos, setBeginnerVideos] = useState([]);
  const [intermediateVideos, setIntermediateVideos] = useState([]);
  const [advancedVideos, setAdvancedVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const beginnerResponse = await axios.get('http://localhost:5000/api/videos/html/beginner');
        setBeginnerVideos(beginnerResponse.data);

        const intermediateResponse = await axios.get('http://localhost:5000/api/videos/html/intermediate');
        setIntermediateVideos(intermediateResponse.data);

        const advancedResponse = await axios.get('http://localhost:5000/api/videos/html/advanced');
        setAdvancedVideos(advancedResponse.data);
      } catch (error) {
        console.error('Error fetching HTML videos:', error);
        setError('Failed to load videos. Please try again later.');
      }
    };
    fetchVideos();
  }, []);
  
  const longText = `
  # The History of HTML

    HTML (Hypertext Markup Language) is the backbone of the web. Developed by Tim Berners-Lee in 1989, it was designed to share scientific documents over the internet.

    ## Early Development

    - **HTML 1.0 (1991)**: Basic tags for headings, paragraphs, lists, and links.
    - **HTML 2.0 (1995)**: Added tables, forms, and frames.
    - **HTML 3.2 (1997)**: Introduced style sheets.

    ## Modern HTML

    - **HTML 4.01 (2000)**: Support for XML and multimedia.
    - **HTML5 (2014)**: Enhanced for multimedia, graphics, and complex web applications.

    Today, HTML is essential for web development, powering everything from blogs to complex e-commerce sites.

    # How HTML Works

    When you visit a website, your browser requests the HTML file from a server, which it then parses to display the page. HTML elements, such as headings, paragraphs, images, and links, are used to structure the content.

    ## Basic HTML Elements

    - **Headings**: <h1> to <h6> for different levels of headings.
    - **Paragraphs**: <p> for text content.
    - **Links**: <a> for hyperlinks.
    - **Images**: <img> to embed images.

    HTML elements often include attributes like id, class, href, and src to provide additional information.

    ## HTML5 Semantic Elements

    HTML5 introduced semantic elements to better define the structure of web content:

    - <header>: Contains introductory content or navigation links.
    - <nav>: Defines navigation links.
    - <main>: Main content of the document.
    - <article>: Independent, self-contained content.
    - <section>: Thematic grouping of content.
    - <aside>: Content tangentially related to the main content.
    - <footer>: Footer of the document or section.

    These elements enhance accessibility and SEO by providing meaningful context to the content.

    # Conclusion

    Understanding HTML is crucial for web development. It forms the foundation upon which all web pages are built. With HTML, you can create structured, accessible, and visually appealing websites.
  ` 
  ;

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.body}>
        <div className={styles.upper}>
          <Banner
            title="Welcome to Html"
            subtitle="What do you think about html? 🤔"
            buttonText="More About me"
            buttonLink="https://www.w3schools.com/html/" 
            backgroundImage="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/08/best-way-to-learn-html-1.jpg"
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
                    <VideoCard key={video._id} Title={video.topic} videoLink={video.videoLink} description={video.description} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <div className={styles.text}>
          <TextCard 
            title="⭐⭐ HTML⭐⭐"
            text={longText}
          />
        </div>
      </div>
    </div>
  );
}

export default Html;
