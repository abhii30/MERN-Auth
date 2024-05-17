import { Register, Username } from "./components";
import { Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="h-screen text-white">
      <Routes>
        <Route path="/" element={<Username />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
