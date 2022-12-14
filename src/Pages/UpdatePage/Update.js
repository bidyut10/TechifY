import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../CommonCssPage/CommonCss.css";

const Update = () => {
  const id = useParams().blogId;
  const navigate = useNavigate();
  const [blogs, setBogs] = useState();
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    UpdateReq()
      .then(() => alert("Update Successful"))
      .then(() => navigate("/read"))
      .catch(() => alert("Oops!!Somthing Wrong"));
  };

  const getDetails = async () => {
    let res = await axios
      .get(`https://techify-backend-api.onrender.com/update/${id}`)
      .catch(() => alert("Oops!!Somthing Wrong"));
    const data = res.data;
    return data;
  };

  const UpdateReq = async () => {
    const res = await axios
      .put(`https://techify-backend-api.onrender.com/update/${id}`, {
        title: inputs.title,
        subtitle: inputs.subtitle,
        summary: inputs.summary,
        description: inputs.description,
      })
      .catch(() => alert("Oops!!Somthing Wrong"));

    const data = res.data;
    return data;
  };

  useEffect(() => {
    getDetails()
      .then((data) => {
        setBogs(data.blogs);
        setInputs({
          title: data.blogs.title,
          subtitle: data.blogs.subtitle,
          summary: data.blogs.summary,
          description: data.blogs.description,
        });
      })
      .catch(() => alert("Oops!!Somthing Wrong"));
  }, [id]);

  return (
    <div className="main-from">
      <form onSubmit={handleSubmit} action="/update" method="PUT" className="">
        <h1>Update Your Blog</h1>

        <div className="">
          <label htmlFor="name">Enter Your Topic Name</label> <br />
          <input
            onChange={handleChange}
            type={"title"}
            value={inputs.title}
            name="title"
            id="name"
            required
            minLength={2}
            maxLength={50}
          />
        </div>
        <div className="">
          <label htmlFor="name">Enter Your Source Name</label> <br />
          <input
            onChange={handleChange}
            type={"subtitle"}
            value={inputs.subtitle}
            name="subtitle"
            required
            id="name"
            minLength={3}
          />
        </div>
        <div className="">
          <label htmlFor="text-area">Enter Your Question/Summary </label> <br />
          <input
            onChange={handleChange}
            type={"summary"}
            value={inputs.summary}
            name="summary"
            id="email"
            required
            minLength={6}
            maxLength={500}
          />
        </div>
        <div className="">
          <label htmlFor="name">Enter Your Answer/Description</label> <br />
          <input
            onChange={handleChange}
            type={"description"}
            value={inputs.description}
            name="description"
            id="name"
            required
            minLength={100}
            maxLength={5000}
          />
        </div>
        <div>
          <button
            type="submit"
            className="font-mono ml-0 mt-4 inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded-3xl text-lg"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
