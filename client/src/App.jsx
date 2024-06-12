import {
  Register,
  Login,
  Dashboard,
  ForgotPassword,
  ResetPassword,
} from "./components";
import { Routes, Route, Navigate} from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="h-screen text-white">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/:userId" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}
