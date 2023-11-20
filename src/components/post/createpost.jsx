import React, { useState, useEffect } from "react";
import {
  styled,
  Box,
  InputBase,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import { categories, API_URL } from "../constants/data"; // Import categories
import { useAuthContext } from "../../hooks/useAuthContext";
import toast from "react-hot-toast";
const Container = styled(Box)(({ theme }) => ({
  height: "100vh",
  margin: "50px 100px",
  marginTop: "15vh",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "30vh",
  margin: "20px 0",
  objectFit: "cover",
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

const CreatePost = () => {
  const url =
    "https://images.pexels.com/photos/760721/pexels-photo-760721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Depression");
  const { user } = useAuthContext();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      window.location.href = "/login";
    }
  }, []);

  const setPost = async () => {
    if (!user) return toast.error("Please login to post");
    if (!title || !description || !category)
      return toast.error("Please fill all the fields");
    const data = {
      username: user.name,
      title,
      description,
      category: category,
    };
    const response = await fetch(`${API_URL}/api/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      toast.success("Post created successfully");
      setTimeout(() => {
        window.location.href = "/blog";
      }, 2000);
    }
    if (!response.ok) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Container>
      <Image src={url} alt="post" />

      <StyledFormControl>
        <InputTextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          placeholder="Title"
        />
      </StyledFormControl>

      <Textarea
        minRows={3}
        placeholder="Tell your story..."
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <MenuItem key={index} value={category.type}>
              {category.type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        onClick={() => setPost()}
        variant="contained"
        color="primary"
        height="10px"
      >
        Publish
      </Button>
    </Container>
  );
};

export default CreatePost;