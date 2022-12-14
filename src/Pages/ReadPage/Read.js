import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Block from "../../Components/Blocks/Block";

const Read = () => {
  const [blogs, setblogs] = useState();
  const id = localStorage.getItem("userId");
  const sendReq = async () => {
    const res = await axios
      .get(`https://techify-backend-api.onrender.com/blogs/${id}`)
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
  };

  useEffect(() => {
    sendReq()
      .then((data) => setblogs(data.blogs))
      .catch(() => alert("No blogs Found"));
  },[id]);
  // console.log(blogs)
  return (
    <div>
      {blogs &&
        blogs.map((blog, index) => (
          <Block
            id={blog._id}
            key={index}
            title={blog.title}
            description={blog.description}
            summary={blog.summary}
            subtitle={blog.subtitle}
            Update="Update"
            Delete="Delete"
          />
        ))}
    </div>
  );
};

export default Read;
