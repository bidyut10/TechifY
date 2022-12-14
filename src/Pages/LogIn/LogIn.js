import React from "react";
import "../CommonCssPage/CommonCss.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LogIn = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendReq = async () => {
    const res = await axios
      .post("https://techify-backend-api.onrender.com/login", {
        password: inputs.password,
        email: inputs.email,
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
      .then((data) => localStorage.setItem("userId", data.user._id))
      .then(() => alert("Login Successful"))
      .then(() => {
        navigate("/home");
      })
      .catch(() => alert("Oops Incorrect Details"));      
  };

  return (
    <div className="main-from">
        <form onSubmit={handleSubmit} action="/login" className="">
        <h1>LogIn To Your Account</h1>
          <div className="">
            <label htmlFor="email">Enter Your Email </label> <br />
            <input
              onChange={handleChange}
              type={"email"}
              value={inputs.email}
              name="email"
              id="email"
              required
              minLength={10}
            />
          </div>
          <div className="">
            <label htmlFor="name">Enter Your Password </label> <br />
            <input
              onChange={handleChange}
              type={"password"}
              value={inputs.password}
              name="password"
              id="name"
              required
              maxLength={15}
            />
          </div>
          <div>
          <button
            type="submit"
            className="font-mono ml-0 mt-4 inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded-3xl text-lg"
          >
            LogIn
          </button>
          </div>
          
        </form>
      </div>
  );
};

export default LogIn;
