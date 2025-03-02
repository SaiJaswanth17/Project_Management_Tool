import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"; // Navbar component added back
import PrivateRoute from "./components/PrivateRoute";
import "./styles/global.css";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/auth/me", { withCredentials: true });
        if (res.data?.success) {
          setUser(res.data.user);
        } else {
          toast.error("Authentication failed");
        }
      } catch (error) {
        toast.error("Failed to check authentication status");
        console.error("Authentication error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  return (
    <Router>
      <Toaster position="top-right" />
      <div className="app-layout">
        <div className="main-content">
          <Navbar /> {/* Navbar component added back */}
          <h1 className="title">Project Management</h1>
          <div className="px-4 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="/signup" element={<Signup setUser={setUser} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
