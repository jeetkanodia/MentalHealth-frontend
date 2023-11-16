
import { styled, Box, Typography } from '@mui/material';


const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/5993624/pexels-photo-5993624.jpeg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    background: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Blog = () => {
    
    return (
        <Image>
            <Heading>Share your experience</Heading>
            <SubHeading>let others know what you have gone through ...</SubHeading>
        </Image>
    )
}

export default Blog;