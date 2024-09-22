import { useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import "../App.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isProfileCardOpen, setIsProfileCardOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    toast.success("Logged out successfully", {
      position: "top-right",
      autoClose: 3000,
    });
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  const navigateHome = () => {
    navigate("/");
  };

  const toggleProfileCard = () => {
    setIsProfileCardOpen(!isProfileCardOpen);
  };

  return (
    <>
      <div className="flex items-center bg-white justify-between px-4 md:px-28 py-4 md:py-0 h-16 relative">
        <h1
          className="text-3xl bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent signature cursor-pointer"
          onClick={navigateHome}
        >
          inspirehub
        </h1>
        <div className="flex justify-center items-center">
          <button
            onClick={logout}
            className="mr-8 text-xl text-gray-600 cursor-pointer"
          >
            Logout
          </button>
          <Avatar
            name={sessionStorage.getItem("userName")}
            size="36"
            round="50%"
            color="#22c55e"
            className="cursor-pointer links flex items-center"
            onClick={toggleProfileCard}
          />
        </div>
      </div>

      {/* Profile Card */}
      {isProfileCardOpen && (
        <div className="fixed top-20 left-0 right-40 w-full h-full flex items-start justify-end z-50">
          <div className="bg-white rounded-lg shadow-lg w-80 relative overflow-hidden">
            {/* Cover Photo */}
            <div
              className="h-24 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
              }}
            >
              <button
                onClick={toggleProfileCard}
                className="absolute top-2 right-2 text-gray-500"
              >
                &times; {/* Close icon */}
              </button>
              <img
                src="https://cdn-icons-png.freepik.com/512/145/145918.png" // Replace with user's profile image if available
                alt="Profile"
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-white rounded-full"
              />
            </div>
            {/* User Details */}
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold">
                {sessionStorage.getItem("userName")}
              </h2>
              <p className="text-sm">
                Email: {sessionStorage.getItem("userEmail")}
              </p>
              <p className="text-sm">
                Phone: {sessionStorage.getItem("userPhone")}
              </p>
              <p className="text-sm">
                Joined on:{" "}
                {new Date(
                  sessionStorage.getItem("userCreatedAt")
                ).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </>
  );
};

export default Navbar;
