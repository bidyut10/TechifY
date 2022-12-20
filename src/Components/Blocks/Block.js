import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Blocks/Blocks.css";

const Block = ({
  id,
  title,
  subtitle,
  description,
  summary,
  Update,
  Delete,
}) => {
  const navigate = useNavigate();
  const deleteBlog = async () => {
    await axios
      .delete(`https://techify-backend-api.onrender.com/delete/${id}`)
      .then(() => navigate("/home"))
      .the(() => alert("Successfully Deleted"))
      .catch((err) => console.log(err));
  };

  const updateClick = () => {
    navigate(`/update/${id}`);
  };
  return (
    <div className="block-container">
      <div className="div-1">
        <p className="title">{title} </p>
        <p className="summ">{summary}</p>
      </div>

      <div className="div-2">
        <p>
          {description} <br />
          <span className=" title-font mt-15 text-stone-700 text-xl font-mono">
            Post By || {subtitle}
          </span>
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
  );
};

export default Block;
