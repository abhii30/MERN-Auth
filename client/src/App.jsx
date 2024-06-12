import {
  Register,
  Login,
  Home,
  ForgotPassword,
  ResetPassword,
} from "./components";
import { Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="h-screen text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}
