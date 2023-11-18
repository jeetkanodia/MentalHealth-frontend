import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { myPosts as staticPosts } from './static_blog_data'; // Import posts from your static data file
import Post from './post'; // Make sure to import your Post component

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts or set posts from your static data
    // You can replace this with your actual API call or static data fetching logic
    // For example:
    // const fetchData = async () => {
    //   const response = await getAllPosts();
    //   if (response.isSuccess) {
    //     setPosts(response.data);
    //   }
    // };
    // fetchData();

    // For demo purposes, setting posts from static data
    setPosts(staticPosts);
  }, []);

  return (
    <>
      {posts?.length ? (
        posts.map((post) => (
          <Grid item lg={3} sm={4} xs={12} key={post._id}>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`details/${post._id}`}>
              {/* Make sure your Post component is correctly referenced, it should be capitalized if it's a component */}
              <Post post={post} />
            </Link>
          </Grid>
        ))
      ) : (
        <Box style={{ color: '#878787', margin: '30px 80px', fontSize: 18 }}>
          No data is available
        </Box>
      )}
    </>
  );
};

export default Posts;
