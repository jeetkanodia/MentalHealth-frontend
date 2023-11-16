import { styled, Box, Typography } from "@mui/material";
import React from "react";
import { Posts } from "./static_blog_data";

const Image = styled(Box)`
  width: 100%;
  background: url(https://images.pexels.com/photos/5993624/pexels-photo-5993624.jpeg)
    center/55% repeat-x #000;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  background: #ffffff;
  line-height: 1;
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  background: #ffffff;
`;

const PostContainer = styled(Box)`
  margin-bottom: 20px;
  padding: 20px;
  border-bottom: 1px solid #ddd;
`;

const PostTitle = styled(Typography)`
  font-size: 24px;
  margin-bottom: 10px;
`;

const PostContent = styled(Typography)`
  font-size: 16px;
  color: #666;
`;

const PostMeta = styled(Typography)`
  font-size: 14px;
  color: #999;
  margin-top: 10px;
`;

const PostCategory = styled(Typography)`
  font-weight: bold;
`;

const Blog = () => {
  return (
    <div>
      <Image>
        <Heading>Share your experience</Heading>
        <SubHeading>let others know what you have gone through ...</SubHeading>
      </Image>
      {Posts.map((post) => (
        <PostContainer key={post.id}>
          <PostTitle>{post.title}</PostTitle>
          <PostContent>{post.content}</PostContent>
          <PostMeta>
            By {post.author} on {post.date}
          </PostMeta>
          <PostCategory>Category: {post.category}</PostCategory>
        </PostContainer>
      ))}
    </div>
  );
};

export default Blog;
