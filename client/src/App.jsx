import { Register, Login, Dashboard} from "./components";
import { Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="h-screen text-white">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
