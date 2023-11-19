import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { API_URL } from "../constants/data";
import { AuthContext } from "../../context/AuthContext";
const DetailedPost = () => {
  const { postId } = useParams();
  const [post, setPost] = React.useState(null);
  const { user } = React.useContext(AuthContext);

  useEffect(() => {
    const getPost = async () => {
      try {
        console.log(user);
        if (!user) return;

        console.log(postId);

        const response = await fetch(`${API_URL}/api/blogs/${postId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPost(data);
        console.log(post);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    getPost();
  }, [user, postId]);

  if (!post)
    return (
      <Box>
        Post not found
        <div>dada</div>
        <div>dada</div>
        <div>dada</div>
        <div>dada</div>
        <div>dada</div>
        <div>dada</div>
        <div>dada</div>
        <div>dada</div>
        <div>dada</div>
        <div>dada</div>
      </Box>
    );

  // ... Layout for detailed post view, including comments and upvote functionality ...

  return (
    <Box>
      <Typography variant="h3">{post.title}</Typography>
      <Typography variant="h3">{post.title}</Typography>
      <Typography variant="h3">{post.title}</Typography>
      <Typography variant="body1">{post.description}</Typography>
      <Typography variant="body1">{post.description}</Typography>
      <Typography variant="body1">{post.description}</Typography>
      <Typography variant="body1">{post.description}</Typography>
      {/* Add components for comments, upvotes, etc. */}
    </Box>
  );
};

export default DetailedPost;
