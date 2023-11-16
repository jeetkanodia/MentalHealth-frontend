// import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
// import { Grid, Box } from '@mui/material';
// import { Link, useSearchParams } from 'react-router-dom';
// import { posts } from './static_blog_data'

// import { getAllPosts } from '../../../service/api';
//import { API } from '../../../service/api';

//components
/*
import Post from './post';
const Posts = () => {
    const [posts, getPosts] = useState([]);
    
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => { 
           // let response = await API.getAllPosts({ category : category || '' });
            if (response.isSuccess) {
                getPosts(response.data);
            }
        }
        fetchData();
    }, [category]);

    return (
        <>
            {
                posts?.length ? posts.map(post => (
                    <Grid item lg={3} sm={4} xs={12}>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`details/${post._id}`}>
                            <Post post={post} />
                        </Link>
                    </Grid>
                )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                        No data is available for selected category
                    </Box>
            }
        </>
    )
}

export default Posts;
*/


// const Posts = () => {
// //   return (
// //     <div>
// //       {posts.map(post => (
// //         <post key={post.id} {...post} />
// //       ))}
// //     </div>
// //   );
//   return (
//     <>
//         {
//             posts?.length ? posts.map(post => (
//                 <Grid item lg={3} sm={4} xs={12}>
//                     <Link style={{textDecoration: 'none', color: 'inherit'}} to={`details/${post._id}`}>
//                         <post post={post} />
//                     </Link>
//                 </Grid>
//             )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
//                     No data is available for selected category
//                 </Box>
//         }
//     </>
// )
// };
// export default Posts;



// import React from 'react';
// import { Link, Grid, Box } from '@material-ui/core'; // Assuming you're using Material-UI
// import { Posts } from './static_blog_data'; // Import posts from your static data file

// const YourComponent = () => {
//   return (
//     <>
//       {
//         Posts?.length ? Posts.map(post => (
//           <Grid item lg={3} sm={4} xs={12} key={post._id}>
//             <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`details/${post._id}`}>
//               {/* Make sure your post component is correctly referenced, it should be capitalized if it's a component */}
//               <post post={post} />
//             </Link>
//           </Grid>
//         )) : <Box style={{ color: '#878787', margin: '30px 80px', fontSize: 18 }}>
//           No data is available for selected category
//         </Box>
//       }
//     </>
//   );
// };

// export default YourComponent;
