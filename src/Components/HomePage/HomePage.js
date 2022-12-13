import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./HomePage.css";
import Crearte from "../../Pages/CreatePage/Create";
import Read from "../../Pages/ReadPage/Read";
import Delete from "../../Pages/UpdatePage/Update";

const Home = () => {
  const navigate = useNavigate();
  const goToCreate = () => {
    navigate("/create");
  };
  const goToRead = () => {
    navigate("/read");
  };

  //working on it
  // const goToProfile = async () => {
  //   navigate(`/profileInfo`);
  // };
  const goToAllBlogs = async () => {
    navigate(`/allBlogs`);
  };

  return (
    <div>
      <div id="header">
        <div className="container">
          <div className="header-text">
            <h1>
              <span>
                Wellcome to TechifY
                <br />
              </span>{" "}
              Let's Create...
            </h1>
            <p>
              "A blog website is a site that is updated with new information on
              an ongoing basis. It normally consists of a collection of posts.
              Posts may be short, informal, controversial, or more professional.
              There are a couple of things that set a blog apart from a
              traditional website"
            </p>
          </div>
          <div className="btn-home  py-6 ">
            {/* Working On It 
            <button
              onClick={goToProfile}
              className="font-mono inline-flex text-white bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 rounded-3xl text-lg"
            >
              My Profile
            </button> 
            */}
            <button
              onClick={goToCreate}
              className="inline-flex font-mono text-white bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 rounded-3xl text-lg"
            >
              Add Blog
            </button>

            <button
              onClick={goToRead}
              className="ml-4 inline-flex font-mono text-white bg-purple-700 border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded-3xl text-lg"
            >
              My Blogs
            </button>

            <button
              onClick={goToAllBlogs}
              className="ml-4 inline-flex font-mono text-white bg-neutral-900 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded-3xl text-lg"
            >
              All blogs
            </button>

            <Routes>
              <Route path="/create" element={<Crearte />} />
              <Route path="/read" element={<Read />} />
              <Route path="/delete" element={<Delete />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
