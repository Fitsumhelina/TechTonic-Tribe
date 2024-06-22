import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Css.module.css';
import SideBar from '../../component/bars/SideBar/SideBar';
import Banner from '../../component/cards/banner/banner';
import VideoCard from '../../component/cards/VideoCard/VideoCard';
import TextCard from '../../component/cards/text/text';
import Button from '../../component/button/button/button';

function Css() {
  const [beginnerVideos, setBeginnerVideos] = useState([]);
  const [intermediateVideos, setIntermediateVideos] = useState([]);
  const [advancedVideos, setAdvancedVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const beginnerResponse = await axios.get('http://localhost:5000/api/videos/css/beginner');
        setBeginnerVideos(beginnerResponse.data);

        const intermediateResponse = await axios.get('http://localhost:5000/api/videos/css/intermediate');
        setIntermediateVideos(intermediateResponse.data);

        const advancedResponse = await axios.get('http://localhost:5000/api/videos/css/advanced');
        setAdvancedVideos(advancedResponse.data);
      } catch (error) {
        console.error('Error fetching CSS videos:', error);
        setError('Failed to load videos. Please try again later.');
      }
    };
    fetchVideos();
  }, []);

  const longText = `
  CSS: Cascading Style Sheets
Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

CSS is among the core languages of the open web and is standardized across Web browsers according to W3C specifications. Previously, the development of various parts of CSS specification was done synchronously, which allowed the versioning of the latest recommendations. You might have heard about CSS1, CSS2.1, or even CSS3. There will never be a CSS3 or a CSS4; rather, everything is now CSS without a version number.

After CSS 2.1, the scope of the specification increased significantly and the progress on different CSS modules started to differ so much, that it became more effective to develop and release recommendations separately per module. Instead of versioning the CSS specification, W3C now periodically takes a snapshot of the latest stable state of the CSS specification and individual modules progress. CSS modules now have version numbers, or levels, such as CSS Color Module Level 5.

Key resources
CSS Introduction
If you're new to web development, be sure to read our CSS basics article to learn what CSS is and how to use it.

CSS Tutorials
Our CSS learning area contains a wealth of tutorials to take you from beginner level to proficiency, covering all the fundamentals.

CSS Reference
Our exhaustive CSS reference for seasoned Web developers describes every property and concept of CSS.

Tutorials
Our CSS Learning Area features multiple modules that teach CSS from the ground up — no previous knowledge required.

CSS first steps
CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features. This module provides a gentle beginning to your path towards CSS mastery with the basics of how it works, what the syntax looks like, and how you can start using it to add styling to HTML.

CSS building blocks
This module carries on where CSS first steps left off — now you've gained familiarity with the language and its syntax, and got some basic experience with using it, it's time to dive a bit deeper. This module looks at the cascade and inheritance, all the selector types we have available, units, sizing, styling backgrounds and borders, debugging, and lots more.

The aim here is to provide you with a toolkit for writing competent CSS and help you understand all the essential theory, before moving on to more specific disciplines like text styling and CSS layout.

CSS styling text
With the basics of the CSS language covered, the next CSS topic for you to concentrate on is styling text — one of the most common things you'll do with CSS. Here we look at text styling fundamentals, including setting font, boldness, italics, line and letter spacing, drop shadows, and other text features. We round off the module by looking at applying custom fonts to your page, and styling lists and links.

CSS layout
At this point we've already looked at CSS fundamentals, how to style text, and how to style and manipulate the boxes that your content sits inside. Now it's time to look at how to place your boxes in the right place in relation to the viewport, and to each other. We have covered the necessary prerequisites so we can now dive deep into CSS layout, looking at different display settings, modern layout tools like flexbox, CSS grid, and positioning, and some of the legacy techniques you might still want to know about.

Use CSS to solve common problems
This module provides links to sections of content explaining how to use CSS to solve common problems when creating a web page.
What is CSS?
Like HTML, CSS is not a programming language. It's not a markup language either. CSS is a style sheet language. CSS is what you use to selectively style HTML elements. For example, this CSS selects paragraph text, setting the color to red:



p {
  color: red;
}
  The whole structure is called a ruleset. (The term ruleset is often referred to as just rule.) Note the names of the individual parts:

Selector
This is the HTML element name at the start of the ruleset. It defines the element(s) to be styled (in this example, <p> elements). To style a different element, change the selector.

Declaration
This is a single rule like color: red;. It specifies which of the element's properties you want to style.

Properties
These are ways in which you can style an HTML element. (In this example, color is a property of the <p> elements.) In CSS, you choose which properties you want to affect in the rule.

Property value
To the right of the property—after the colon—there is the property value. This chooses one out of many possible appearances for a given property. (For example, there are many color values in addition to red.)

Note the other important parts of the syntax:

Apart from the selector, each ruleset must be wrapped in curly braces. ({})
Within each declaration, you must use a colon (:) to separate the property from its value or values.
Within each ruleset, you must use a semicolon (;) to separate each declaration from the next one.
To modify multiple property values in one ruleset, write them separated by semicolons, like this:



p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
Selecting multiple elements
You can also select multiple elements and apply a single ruleset to all of them. Separate multiple selectors by commas. For example:



p,
li,
h1 {
  color: red;
}
  Fonts and text
Now that we've explored some CSS fundamentals, let's improve the appearance of the example by adding more rules and information to the style.css file.

First, find the output from Google Fonts that you previously saved from What will your website look like?. Add the <link> element somewhere inside your index.html's head (anywhere between the <head> and </head> tags). It looks something like this:
HTML
Copy to Clipboard
<link
  href="https://fonts.googleapis.com/css?family=Open+Sans"
  rel="stylesheet" />
This code links your page to a style sheet that loads the Open Sans font family with your webpage.
Next, delete the existing rule you have in your style.css file. It was a good test, but let's not continue with lots of red text.
Add the following lines (shown below), replacing the font-family assignment with your font-family selection from What will your website look like?. The property font-family refers to the font(s) you want to use for text. This rule defines a global base font and font size for the whole page. Since <html> is the parent element of the whole page, all elements inside it inherit the same font-size and font-family.
CSS
Copy to Clipboard
html {
  font-size: 10px; /* px means "pixels": the base font size is now 10 pixels high */
  font-family: "Open Sans", sans-serif; /* this should be the rest of the output you got from Google Fonts */
}
Note: Anything in CSS between /* and */ is a CSS comment. The browser ignores comments as it renders the code. CSS comments are a way for you to write helpful notes about your code or logic.

Now let's set font sizes for elements that will have text inside the HTML body (<h1>, <li>, and <p>). We'll also center the heading. Finally, let's expand the second ruleset (below) with settings for line height and letter spacing to make body content more readable.
CSS
Copy to Clipboard
h1 {
  font-size: 60px;
  text-align: center;
}

p,
li {
  font-size: 16px;
  line-height: 2;
  letter-spacing: 1px;
}
  `;

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.body}>
        <div className={styles.upper}>
          <Banner
            title="Welcome to Css"
            subtitle="What do you think about css?  🤔 "
            buttonText="More About me"
            buttonLink="https://www.w3schools.com/css/default.asp" 
            backgroundImage="https://th.bing.com/th/id/OIP.Jm4gcnr8jIOGSzh2RuSzwAHaEI?rs=1&pid=ImgDetMain"
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
                <VideoCard key={video._id}  Title={video.topic} videoLink={video.videoLink} description={video.description} />
              ))}
                </div>
              </div>
              <div className={styles.videoSection}>
                <h2>Intermediate Videos</h2>
                <div className={styles.videos}>
                {intermediateVideos.map(video => (
                <VideoCard key={video._id}   Title={video.topic} videoLink={video.videoLink} description={video.description} />
              ))}
                </div>
              </div>
              <div className={styles.videoSection}>
                <h2>Advanced Videos</h2>
                <div className={styles.videos}>
                {advancedVideos.map(video => (
                <VideoCard key={video._id}   Title={video.topic} videoLink={video.videoLink} description={video.description} />
              ))}
                </div>
              </div>
            </>
          )}
        </div>
        <div className={styles.text}>
         
          <TextCard 
            className={styles.textcard}
            title="⭐⭐SUMMARY OF CSS⭐⭐"
            text={longText}
          />

         
         
        
        </div>
     
      </div>
    </div>
  );
}

export default Css;
