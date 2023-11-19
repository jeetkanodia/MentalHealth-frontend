import React, { useState, useEffect } from 'react';
import { styled, Box, InputBase, Button, FormControl, Select, MenuItem, InputLabel, TextareaAutosize } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { categories } from '../constants/data'; // Import categories


const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0 
    }
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin-top: 10px;
    margin: 0 30px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 60px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}

const CreatePost = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');

    const url = post.picture ? post.picture : 'https://images.pexels.com/photos/760721/pexels-photo-760721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    
    useEffect(() => {
        const getImage = async () => { 
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                post.picture = response.data;
            }
        }
        getImage();
        post.categories = location.search?.split('=')[1] || 'All';
        //post.username = account.username;
    }, [file])

   

    return (
        <Container>
            <Image src={url} alt="post" />

            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputTextField onChange={(e) => handleChange(e)} name='title' placeholder="Title" />
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="category-select-label">Category</InputLabel>
                    <Select
                        labelId="category-select-label"
                        id="category-select"
                        value={post.category}
                        label="Category"
                        onChange={(e) => handleChange({ target: { name: 'category', value: e.target.value } })}
                    >
                        {categories.map((category, index) => (
                            <MenuItem key={index} value={category.type}>{category.type}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Button onClick={() => setPost()} variant="contained" color="primary" height="10px" >Publish</Button>
            </StyledFormControl>

            <Textarea
                rowsMin={5}
                placeholder="Tell your story..."
                name='description'
                onChange={(e) => handleChange(e)} 
            />
        </Container>
    )
}

export default CreatePost;