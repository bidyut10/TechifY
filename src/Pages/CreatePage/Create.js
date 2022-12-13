import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../CommonCssPage/CommonCss.css";

const Create = () => {
  const id = localStorage.getItem("userId");
  const [inputs, setInputs] = useState({
    authorId: id,
    title: "",
    subtitle: "",
    description: "",
    summary: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendReq = async () => {
    const res = await axios
      .post("https://techify-backend-api.onrender.com/create", {
        authorId: id,
        title: inputs.title,
        subtitle: inputs.subtitle,
        description: inputs.description,
        summary: inputs.summary,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    // console.log(data);
    return data;
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs);
    sendReq()
      .then(() => {
        navigate("/read");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-from">
      <div id="common-id" className="common-box">
        <h1>Crearte Your Blog</h1>

        <form
          onSubmit={handleSubmit}
          action="/create"
          method="POST"
          className="form-example"
        >
          <div className="form-example">
            <label htmlFor="name">Enter Your Topic Name </label>
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
          <div className="form-example">
            <label htmlFor="name">Enter Source Name </label>
            <input
              onChange={handleChange}
              type={"subtitle"}
              value={inputs.subtitle}
              name="subtitle"
              id="name"
              required
              minLength={3}
            />
          </div>
          <div className="form-example">
            <label htmlFor="text-area">Enter Your Question/Summary </label>
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
          <div className="form-example">
            <label htmlFor="name">Enter Your Answer/Description </label>
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

          <button
            type="submit"
            className=" font-mono ml-0 mt-4 inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded-3xl text-lg"
          >
            Crearte
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
