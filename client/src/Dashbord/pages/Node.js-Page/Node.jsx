import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Node.module.css';
import SideBar from '../../component/bars/SideBar/SideBar';
import Banner from '../../component/cards/banner/banner';
import VideoCard from '../../component/cards/VideoCard/VideoCard';
import TextCard from '../../component/cards/text/text';
import Button from '../../component/button/button/button';
function Node() {
const [beginnerVideos, setBeginnerVideos] = useState([]);
const [intermediateVideos, setIntermediateVideos] = useState([]);
const [advancedVideos, setAdvancedVideos] = useState([]);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchVideos = async () => {
    try {
      const beginnerResponse = await axios.get('http://localhost:5000/api/videos/nodejs/beginner');
      setBeginnerVideos(beginnerResponse.data);

      const intermediateResponse = await axios.get('http://localhost:5000/api/videos/nodejs/intermediate');
      setIntermediateVideos(intermediateResponse.data);

      const advancedResponse = await axios.get('http://localhost:5000/api/videos/nodejs/advanced');
      setAdvancedVideos(advancedResponse.data);
    } catch (error) {
      console.error('Error fetching Node.js videos:', error);
      setError('Failed to load videos. Please try again later.');
    }
  };
  fetchVideos();
}, []);

  const longText = `
Introduction to Node.js
Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!

Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.

A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.

This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.

Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language.

In Node.js the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags.

An Example Node.js Application
The most common example Hello World of Node.js is a web server:

CJS
MJS
const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
server.listen(port, hostname, () => {
  console.log
  To run this snippet, save it as a server.js file and run node server.js in your terminal.

This code first includes the Node.js http module.

Node.js has a fantastic standard library, including first-class support for networking.

The createServer() method of http creates a new HTTP server and returns it.

The server is set to listen on the specified port and host name. When the server is ready, the callback function is called, in this case informing us that the server is running.

Whenever a new request is received, the request event is called, providing two objects: a request (an http.IncomingMessage object) and a response (an http.ServerResponse object).

Those 2 objects are essential to handle the HTTP call.

The first provides the request details. In this simple example, this is not used, but you could access the request headers and request data.
  `;

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.body}>
        <div className={styles.upper}>
          <Banner
            title="Welcome to node js"
            subtitle="What do you think about node js?  🤔 "
            buttonText="More About me"
            buttonLink="https://www.w3schools.com/nodejs/default.asp" 
            backgroundImage="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                <VideoCard key={video._id}  Title={video.topic} videoLink={video.videoLink} description={video.description} />
              ))}
                </div>
              </div>
              <div className={styles.videoSection}>
                <h2>Advanced Videos</h2>
                <div className={styles.videos}>
                
              {advancedVideos.map(video => (
                <VideoCard key={video._id}  Title={video.topic} videoLink={video.videoLink} description={video.description} />
              ))}
                </div>
              </div>
            </>
          )}
        </div>
        <div className={styles.text}>
         
          <TextCard 
            title="⭐⭐SUMMARY OF NODE⭐⭐"
            text={longText}
          />

         
         
        
        </div>
     
      </div>
    </div>
  );
}

export default Node;
