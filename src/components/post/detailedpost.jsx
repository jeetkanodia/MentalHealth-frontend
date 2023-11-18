import React from 'react';
import { useParams } from 'react-router-dom';
import { myPosts as Posts } from "./static_blog_data";
import { Box, Typography } from "@mui/material";





const DetailedPost = () => {
  let { postId } = useParams();
  const post = Posts.find(p => p.id.toString() === postId);

  if (!post) return <Box>Post not found</Box>;

  // ... Layout for detailed post view, including comments and upvote functionality ...
  
  

  return (
    <Box>
      <Typography variant="h3">{post.title}</Typography>
      <Typography variant="body1">{post.content}</Typography>
      {/* Add components for comments, upvotes, etc. */}
    </Box>
  );
};

export default DetailedPost;