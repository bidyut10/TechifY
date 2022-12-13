import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Block from "../../Components/Blocks/Block";

const AllBlogs = () => {
  const [blogs, setblogs] = useState();
  const sendReq = async () => {
    const res = await axios
      .get(`http://localhost:3001/allBlogs`)
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
  };

  useEffect(() => {
    sendReq()
      .then((data) => setblogs(data.blogs))
      .catch((err) => console.log(err));
  }, []);
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
          />
        ))}
    </div>
  );
};

export default AllBlogs;
