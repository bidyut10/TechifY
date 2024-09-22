import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [userBlogs, setUserBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const userId = sessionStorage.getItem("userId"); // Get userId from session storage

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all blogs from the API
    const fetchAllBlogs = async () => {
      try {
        const response = await axios.get(
          "https://techify-backend-api.onrender.com/allBlogs"
        );
        setAllBlogs(response.data.blogs);
        setFilteredBlogs(response.data.blogs); // Initial filtering
      } catch (error) {
        toast.error("Error fetching blogs");
      }
    };

    // Fetch user blogs from the API
    const fetchUserBlogs = async () => {
      try {
        const response = await axios.get(
          `https://techify-backend-api.onrender.com/blogs/${userId}`
        );
        setUserBlogs(response.data.blogs);
      } catch (error) {
        toast.error("Error fetching user blogs");
      }
    };

    fetchAllBlogs();
    fetchUserBlogs();
  }, [userId]);

  // Filter blogs based on the search term
  useEffect(() => {
    setFilteredBlogs(
      allBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, allBlogs]);

  return (
    <>
      <Navbar />

      {/* Toast Notification */}
      <ToastContainer />

      {/* Main Content Div */}
      <div className="flex w-full h-screen bg-white pt-8 px-28">
        {/* Left Sidebar: User Details and User Blogs */}
        <div className="w-1/3 h-full p-4 bg-white relative">
          {/* Cover Photo */}
          <div
            className="relative w-full h-28 rounded-xl mb-4"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "10px",
            }}
          >
            <img
              src="https://cdn-icons-png.freepik.com/512/145/145918.png"
              alt="Profile"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"
            />
          </div>
          {/* User Info */}
          <div className="text-gray-800 space-y-2 mb-8">
            <p className="text-lg mb-8">
              Joined on{" "}
              {new Date(
                sessionStorage.getItem("userCreatedAt")
              ).toLocaleDateString()}
            </p>
            <p className="text-xl">{sessionStorage.getItem("userName")}</p>
            <p className="text-xl">{sessionStorage.getItem("userEmail")}</p>
            <p className="text-xl">{sessionStorage.getItem("userPhone")}</p>
          </div>

          {/* User Blogs List */}
          <h2 className="text-2xl font-semibold mb-4">Recent Blogs</h2>
          <div className="h-60 overflow-auto space-y-4">
            {" "}
            {/* Fixed height and overflow */}
            {userBlogs.map((blog) => (
              <div
                key={blog._id}
                className="flex items-center bg-gray-50 rounded-lg p-2 shadow-md mr-2"
              >
                <img
                  src={blog.imgUrl}
                  alt={blog.title}
                  className="w-6 h-6 object-cover rounded-full mr-4"
                />
                <div className="flex-grow">
                  <h3 className="text-lg">{blog.title}</h3>
                </div>
                <div className="flex space-x-2">
                  <AiOutlineEdit
                    className="cursor-pointer"
                    onClick={() => navigate(`/edit-blog/${blog._id}`)}
                  />
                  <AiOutlineDelete
                    className="cursor-pointer"
                    onClick={() => {
                      /* handle delete logic here */
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content: All Blogs */}
        <div className="w-2/3 flex flex-col p-6 overflow-auto">
          {/* Fixed Search Bar */}
          <div className="sticky top-0 z-10 bg-white px-6 py-1 border border-green-300 rounded-full mb-4 w-full shadow-md">
            
            <div className="flex items-center px-6 py-1">

              <FiSearch className="text-black mr-2" />
              <input
                type="text"
                placeholder="Search blogs by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 bg-white rounded outline-none"
              />
            </div>
          </div>

          {/* Blog Cards - Match Width to Search Bar */}
          <div className="flex flex-col items-center space-y-6">
            {filteredBlogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-lg shadow-lg w-full max-w-full p-6 transition-all duration-300 hover:shadow-xl"
              >
                <img
                  src={blog.imgUrl}
                  alt={blog.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-3xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <p className="text-gray-500 text-sm">
                  Created At: {new Date(blog.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
