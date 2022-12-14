import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../CommonCssPage/CommonCss.css";

const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
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
      .post("http://localhost:3001/register", {
        name: inputs.name,
        phone: inputs.phone,
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
      .then(() => alert("Registration Successful"))
      .then(() => { navigate("/login") })
      .catch(() => alert("Check Your Details"));
  };

  return (
    <div className="main-from">
        <form
          onSubmit={handleSubmit}
          action="/register"
          method="POST"
          className=""
        >
          <h1>Register Your Details</h1>

          <div className="">
            <label htmlFor="name">Enter Your Name</label> <br />
            <input
              onChange={handleChange}
              type={"name"}
              value={inputs.name}
              name="name"
              id="name"
              required
              minLength={8}
              maxLength={25}
            />
          </div>
          <div className="">
            <label htmlFor="name">Enter Your Phone No</label> <br />
            <input
              onChange={handleChange}
              type={"phone"}
              value={inputs.phone}
              name="phone"
              id="name"
              required
              maxLength={10}
            />
          </div>
          <div className="">
            <label htmlFor="email">Enter Your Email</label> <br />
            <input
              onChange={handleChange}
              type={"email"}
              value={inputs.email}
              name="email"
              id="email"
              required
            />
          </div>
          <div className="">
            <label htmlFor="name">Enter Your Password</label> <br />
            <input
              onChange={handleChange}
              type={"password"}
              value={inputs.password}
              name="password"
              id="name"
              required={true}
              minLength={6}
              maxLength={15}
            />
          </div>
          <div>
            <button
              type="submit"
              className="font-mono ml-0 mt-4 inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded-3xl text-lg"
            >
              Register
            </button>
          </div>
        </form>
      </div>
  );
};

export default Register;
