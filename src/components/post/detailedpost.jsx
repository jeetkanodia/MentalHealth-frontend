import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { API_URL } from "../constants/data";
import { AuthContext } from "../../context/AuthContext";
import '../../styles/detailedpost.css';const DetailedPost = () => {
    const { postId } = useParams();
    const [post, setPost] = React.useState(null);
    const { user } = React.useContext(AuthContext);
  
    useEffect(() => {
      const getPost = async () => {
        try {
          if (!user) return;
  
          const response = await fetch(`${API_URL}/api/blogs/${postId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${user.token}`,
            },
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
          setPost(data);
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      };
  
      getPost();
    }, [user, postId]);
  
    if (!post) {
      return (
        <Box className="detailed-post-container">
          <Typography variant="h6">Post not found</Typography>
          {/* You can add more elements here if needed */}
        </Box>
      );
    }
  
    return (
      <Box className="detailed-post-container">
        <Typography variant="h3" className="detailed-post-title">{post.title}</Typography>
        <Typography variant="body1" className="detailed-post-description">{post.description}</Typography>
        {/* You can add more elements here for comments, upvotes, etc. */}
      </Box>
    );
  };
  
  export default DetailedPost;