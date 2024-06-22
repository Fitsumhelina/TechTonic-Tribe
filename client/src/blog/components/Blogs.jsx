import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import BlogHeader from "./Header";
import "./../App.css"

function Blogs() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]); // Initialize as an empty array

  const sendRequest = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blog");
      if (res.data && res.data.blogs) {
        return res.data.blogs; // Return only the blogs array
      } else {
        throw new Error("No data found in response");
      }
    } catch (err) {
      console.error("Error fetching blogs:", err);
      return []; // Return empty array if there's an error
    }
  };

  useEffect(() => {
    sendRequest().then((data) => {
      console.log("Received data:", data); // Check what data is received
      setBlogs(data); // Set blogs to the received data
      setLoading(false); // Set loading to false after data is fetched
    });
  }, []);

  return (
    <div>
      {/* <BlogHeader />   */}

      {loading ? (
        <div class="spinner">
          <div class="spinnerin"></div>
        </div>
      ) : blogs.length > 0 ? (
        blogs.map((blog) => (
          <Blog
            key={blog._id}
            id={blog._id}
            // isUser={localStorage.getItem("userId") === blog.user._id}
            title={blog.title}
            content={blog.content}
            image={blog.image}
          // userName={blog.user.name}
          />
        ))
      ) : (
        <div>No blogs found</div>
      )}
    </div>
  );

}

export default Blogs;
