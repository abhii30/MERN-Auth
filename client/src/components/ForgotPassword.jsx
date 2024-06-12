import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.info("Email is required");
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:3000/auth/forgotPassword`,
        { email }
      );
      if (response.status === 200) {
        toast.success("Password reset link sent to your email");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Email not found. Please try again.");
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div className="flex justify-center items-center h-[90%]">
      <div className="flex flex-col shadow-2xl absolute pt-10 p-8 w-1/2 md:w-1/3 lg:p-20 rounded-lg">
        <h1 className="text-black text-3xl mb-5 text-center">
          Forgot Password
        </h1>
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

          <button className="bg-blue-500 py-2 text-lg rounded-xl text-white">
            Send
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
