import React from "react";
import { useNavigate } from "react-router-dom";
import '../NavBar/Navbar.css'

function NavBar() {
  const navigate = useNavigate();

  const register = () => {
    navigate("/");
  };
  const login = () => {
    navigate("/login");
  };
  return (
    <header>
    <nav>
      <div >
        <h1>Techi<span>fY</span></h1>
      </div>
      <div className="btn-div">
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
      </div>
    </nav>
    </header>
  );
}

export default NavBar;
