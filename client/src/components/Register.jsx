import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../assets/profile.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { email, username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !username || !password) {
      toast.info("All fields are required");
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:3000/auth/register`,
        formData
      );
      if (response.status === 200) {
        toast.success("User created successfully");
        setTimeout(() => {
          navigate("/");
        }, 2500);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(
          "User already exists. Please login or use a different email address."
        );
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-[90%]">
      <div className="flex flex-col items-center shadow-2xl absolute pt-10 p-8 w-1/2 md:w-1/3 lg:p-20 rounded-lg">
        <h1 className="text-black text-3xl mb-5">REGISTER</h1>
        <div className="border-2 border-black w-20 h-20 rounded-full overflow-hidden mb-5 cursor-pointer">
          <img src={Profile} alt="profile" className="w-20 h-20 mb-5" />
        </div>
        <form
          className="flex flex-col gap-4 w-full text-black"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
            className="h-10 focus:outline-none bg-slate-100 px-4 rounded-xl"
          />
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={handleChange}
            className="h-10 focus:outline-none bg-slate-100 px-4 rounded-xl"
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
            className="h-10 focus:outline-none bg-slate-100 px-4 rounded-xl"
          />

          <button className="bg-blue-500 py-2 text-lg rounded-xl text-white">
            Sign Up
          </button>
        </form>
        <div className="flex justify-center text-sm mt-1">
          <span className="text-black">Already have an account? </span>
          <span>&nbsp;</span>
          <Link to="/login" className="text-red-600">
            Login
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
