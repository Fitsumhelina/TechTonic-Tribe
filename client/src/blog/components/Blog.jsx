  import React from "react";
  import { useNavigate } from "react-router-dom";
  import { Card, Avatar, CardContent, CardHeader, Typography, CardMedia, Box, IconButton } from "@mui/material";
  import { DeleteForeverOutlined, ModeEditOutlined } from "@mui/icons-material";
  import axios from "axios";

  const Blog = ({ title, content, image, userName, isUser, id }) => {
    const navigate = useNavigate();

    const handleEdit = () => {
      navigate(`/myBlogs/${id}`);
    };

    const deleteRequest = async () => {
      try {
        await axios.delete(`http://localhost:5000/api/blog/${id}`);
        navigate("/"); // Navigate to home after successful deletion
      } catch (error) {
        console.error("Error deleting blog post:", error);
        // Log the specific response data if available
        if (error.response && error.response.data) {
          console.error("Response data:", error.response.data);
        }
        // Handle error gracefully, display a message, or retry
      }
    };
    
    const handleDelete = async () => {
      try {
        await axios.delete(`http://localhost:5000/api/blog/${id}`);
        navigate("/"); // Navigate to home after successful deletion
      } catch (error) {
        console.error("Error deleting blog post:", error);
        if (error.response && error.response.data) {
          console.error("Response data:", error.response.data);
        }
        // Handle error gracefully, display a message, or retry
      }
    };
    
    
    return (
      <div>
        <Card
          sx={{
            width: "50%",
            margin: "auto",
            marginTop: 2,
            padding: 2,
            boxShadow: "5px 5px 10px #ccc",
            ":hover": { boxShadow: "10px 10px 20px #ccc" },
          }}
        >
          {isUser && (
            <Box display="flex">
              <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
                <ModeEditOutlined color="info" />
              </IconButton>
              <IconButton onClick={handleDelete}>
                <DeleteForeverOutlined color="error" />
              </IconButton>
            </Box>
          )}
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">{userName && userName.charAt(0)}</Avatar>}
            title={title}
          />
          <CardMedia component="img" height="194" image={image} alt="Blog Image" />
          <CardContent>
            <hr />
            <Typography variant="body2" color="text.secondary">
              <b>{userName}</b>: {content}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  };

  export default Blog;
