import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const Block = ({ id, title,subtitle, description, summary, Update, Delete }) => {
  const navigate = useNavigate();
  const deleteBlog = async () => {
    await axios
      .delete(`https://techify-backend-api.onrender.com/delete/${id}`)
      .then(() => navigate("/home"))
      .catch((err) => console.log(err));
  };

  const updateClick = () => {
    navigate(`/update/${id}`);
  };
  return (
    <section className="text-white body-font ">
      <div className="container px-5 py-24 mx-auto flex flex-col ">
        <div className="lg:w-4/6 mx-auto mt-5">
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg
                  fill="grey"
                  stroke="grey"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10 "
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center text-white">
                <h2 className=" title-font mt-4 text-whie-900 text-xl font-mono">
                  {title}
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                <p className="bg-purple-900 px-10 py-10 rounded-2xl text-justify font-medium">{summary}</p>
              </div>
            </div>
            <div className="block-res sm:w-2/3 sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0 text-center sm:text-left bg-white bg-opacity-50 rounded-2xl">
              <p className="leading-relaxed text-stone-900 text-justify text-base mb-4 mr-5 font-serif">
                {description} <br />
                <span className=" title-font mt-4 text-stone-700 text-base font-mono"> Post By || {subtitle} </span>
              </p>

              {Update === "Update" && Delete === "Delete" ? (
                <>
                  <button
                    onClick={updateClick}
                    className="font-mono ml-0 inline-flex text-white bg-stone-800 border-0 py-2 px-6 focus:outline-none hover:bg-stone-900 rounded-3xl text-lg"
                  >
                    {Update}
                  </button>
                  <button
                    onClick={deleteBlog}
                    className="font-mono ml-4 inline-flex text-white bg-purple-700 border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded-3xl text-lg"
                  >
                    {Delete}
                  </button>{" "}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Block;
