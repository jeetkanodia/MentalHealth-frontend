import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Box } from '@mui/material';


const start = styled(Box)`
    font-size: 70px;
    background: rgb(214, 210, 218);
    line-height: 1;
    border-radius:5px;
    margin-top: 50px;
    padding: 15px;
`;

function DetailedPostView({ postId }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch the post data when the component mounts
    axios.get(`/api/posts/${postId}`)
      .then(response => setPost(response.data));

    // Fetch the comments for the post
    axios.get(`/api/posts/${postId}/comments`)
      .then(response => setComments(response.data));
  }, [postId]);

  const handleUpvote = () => {
    // Send a request to the backend to upvote the post
    axios.post(`/api/posts/${postId}/upvote`)
      .then(response => setPost(response.data));
  };

  if (!post) return 'Loading...';

  return (
    <start>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <button onClick={handleUpvote}>Upvote</button>
      <h2>Comments</h2>
      {comments.map(comment => <p key={comment.id}>{comment.text}</p>)}
    </start>
  );
}

export default DetailedPostView;