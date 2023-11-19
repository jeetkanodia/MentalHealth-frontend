import { styled, Box, Typography, Card, CardContent } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { categories, API_URL } from "../constants/data";
import { AuthContext } from "../../context/AuthContext";
const Image = styled(Box)`
  margin-top: 36px;
  width: 100%;
  background: url(https://cdn.pixabay.com/photo/2017/05/30/03/58/blog-2355684_640.jpg)
    center/55% repeat-x #000;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  background: #e5caa4;
  line-height: 1;
  border-radius: 5px;
  padding: 15px;
  margin-top: 15vh;
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  background: #e5caa4;
  border-radius: 5px;
  margin-top: 3vh;
  padding-left: 15px;
  padding-right: 70px;
  // padding-bottom:3.5vh;
  color: #;
`;

const CardContainer = styled(Card)`
  margin: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);


  &:hover {
    background-color: #f0f0f0; // Change as needed
    transform: scale(1.005);
    cursor: pointer;
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
  // State for the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [Posts, setPosts] = useState([]);
  const { user } = React.useContext(AuthContext);

  useEffect(() => {
    if (!user) return;
    fetch(`${API_URL}/api/blogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [user]);

  // Handler for category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleCardClick = (postId) => {
    // Example: navigate to a detailed post view
    window.location.href = `/post/${postId}`;
  };

  // Inline styles
  const styles = {
    selectorContainer: {
      margin: "20px 25px",
      display: "flex",
      alignItems: "center",
    },
    label: {
      marginRight: "10px",
      fontWeight: "bold",
    },
    select: {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      outline: "none",
      cursor: "pointer",
      fontSize: "16px",
    },
    createPostButton: {
      margin: "20px 25px",
      padding: "10px 20px",
      backgroundColor: "#523330", // Change as needed
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      textDecoration: "none", // For Link component
      fontWeight: "bold",
    },
  };

  return (
    <div>
      <Image>
        <Heading>Share your experience</Heading>
        <SubHeading>let others know what you have gone through ...</SubHeading>

        <button
          style={styles.createPostButton}
          onClick={() => (window.location.href = "/createpost")} // Change this as needed
        >
          Make Your Own Blog
        </button>
      </Image>
      <br />

      {/* Category Selector Container */}
      <div style={styles.selectorContainer}>
        <label htmlFor="category-selector" style={styles.label}>
          Choose a category:
        </label>
        <select
          id="category-selector"
          onChange={handleCategoryChange}
          value={selectedCategory}
          style={styles.select}
        >
          <option value="All">All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.type}>
              {category.type}
            </option>
          ))}
        </select>
      </div>

      {Posts.filter(
        (post) =>
          selectedCategory === "All" || post.category === selectedCategory
      ).map((post) => (
        <CardContainer key={post._id} onClick={() => handleCardClick(post._id)}>
          <CardContent>
            <PostTitle>
              {post.title.length > 20
                ? post.title.substring(0, 20) + "..."
                : post.title}
            </PostTitle>
            <PostContent>
              {post.description.length > 50
                ? post.description.substring(0, 50) + "..."
                : post.description}
            </PostContent>
            <PostMeta>
              By {post.username} on{" "}
              {new Date(post.createdAt).toLocaleDateString()}
            </PostMeta>
            <PostCategory>Category: {post.category}</PostCategory>
          </CardContent>
        </CardContainer>
      ))}
    </div>
  );
};
export default Blog;
