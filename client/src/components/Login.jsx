import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("All fields are required");
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:3000/auth/login`,
        formData
      );
      if (response.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-[90%]">
      <div className="flex flex-col items-center shadow-2xl absolute pt-10 p-8 w-1/2 md:w-1/3 lg:p-20 rounded-lg">
        <h1 className="text-black text-3xl mb-5">Login</h1>
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
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
            className="h-10 focus:outline-none bg-slate-100 px-4 rounded-xl"
          />

          <button className="bg-blue-500 py-2 text-lg rounded-xl text-white">
            Login
          </button>
        </form>
        <div className="flex justify-center text-sm mt-1">
          <span className="text-black">New User? </span>
          <span>&nbsp;</span>
          <Link to="/register" className="text-red-600">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
