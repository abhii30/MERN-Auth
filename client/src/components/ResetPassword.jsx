import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ResetPassword = () => {
  const navigate = useNavigate();
  const [changePassword, setChangePassword] = useState({
    password: "",
    confirmPassword: "",
  });

  const { password, confirmPassword } = changePassword;
  const { token } = useParams();
  const handleChange = (e) => {
    setChangePassword({ ...changePassword, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      toast.info("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:3000/auth/resetPassword/${token}`,
        { password }
      );
      if (response.status === 200) {
        toast.success("Password reset successful");
        setTimeout(() => {
          navigate("/login");
        }, 2500);
        console.log(response.data);
      }
    } catch (error) {
      if (error.response.status === 400) {
        toast.error("Password reset link has expired. Please try again.");
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div className="flex justify-center items-center h-[90%]">
      <div className="flex flex-col shadow-2xl absolute pt-10 p-8 w-1/2 md:w-1/3 lg:p-20 rounded-lg">
        <h1 className="text-black text-3xl mb-5 text-center">Reset Password</h1>
        <form
          className="flex flex-col gap-4 w-full text-black"
          onSubmit={handleSubmit}
        >
          <input
            type="password"
            name="password"
            value={password}
            placeholder="New Password"
            onChange={handleChange}
            className="h-10 focus:outline-none bg-slate-100 px-4 rounded-xl"
          />
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm New Password"
            onChange={handleChange}
            className="h-10 focus:outline-none bg-slate-100 px-4 rounded-xl"
          />

          <button className="bg-blue-500 py-2 text-lg rounded-xl text-white">
            Reset
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
