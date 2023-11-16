import { styled, Box, Typography, Card, CardContent } from "@mui/material";
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

const CardContainer = styled(Card)`
  margin: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
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
        <CardContainer key={post.id}>
          <CardContent>
            <PostTitle>{post.title}</PostTitle>
            <PostContent>{post.content}</PostContent>
            <PostMeta>
              By {post.author} on {post.date}
            </PostMeta>
            <PostCategory>Category: {post.category}</PostCategory>
          </CardContent>
        </CardContainer>
      ))}
    </div>
  );
};

export default Blog;
