import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

function NavBar() {
  const navigate = useNavigate();

  const register = () => {
    navigate("/");
  };
  const login = () => {
    navigate("/login");
  };
  return (
    <header className="home-nav text-black-600 body-font bg-purple-900 bg-opacity-50">
      <div className="container container-nav mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="iconBg flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="home"
        >
          <span className="title-nav ml-3 text-3xl text-white font-mono">
            TechifY
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-white">
          <div className="btn-nav">
            <button
              onClick={register}
              className="font-mono ml-0 inline-flex text-white bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 rounded-3xl text-base"
            >
              Register
            </button>
            <button
              onClick={login}
              className="font-mono ml-4 inline-flex text-white bg-purple-700 border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded-3xl text-base"
            >
              Log In
            </button>
            {/*
                Working On It
                <button className="ml-4 font-mono inline-flex text-white bg-stone-800 border-0 py-2 px-6 focus:outline-none hover:bg-stone-900 rounded-3xl text-base">
                  Contact Me
                </button> 
            */}
            
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
