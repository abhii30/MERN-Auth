import { Link } from "react-router-dom";
import Profile from "../assets/profile.svg";

const Password = () => {
  return (
    <div className="flex justify-center items-center h-[90%]">
      <div className="flex flex-col items-center shadow-2xl absolute pt-10 p-8 w-1/2 md:w-1/3 lg:p-20 rounded-lg">
        <h1 className="text-black text-3xl mb-5">Password</h1>
        <div className="border-2 border-black w-20 h-20 rounded-full overflow-hidden mb-5 cursor-pointer">
          <img src={Profile} alt="profile" className="w-20 h-20 mb-5" />
        </div>
        <form className="flex flex-col gap-4 w-full text-black">
          <input
            type="text"
            placeholder="Email"
            className="h-10 focus:outline-none bg-slate-100 px-4 rounded-xl"
          />
          <input
            type="text"
            placeholder="Username"
            className="h-10 focus:outline-none bg-slate-100 px-4 rounded-xl"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-10 focus:outline-none bg-slate-100 px-4 rounded-xl"
          />

          <button className="bg-blue-500 py-2 text-lg rounded-xl text-white">
            Let's go!
          </button>
        </form>
        <div className="flex justify-center text-sm mt-1">
          <span className="text-black">Already have an account? </span>
          <span>&nbsp;</span>
          <Link to="/" className="text-red-600">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Password;
