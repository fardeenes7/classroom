import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/landing/Home.jsx";
import Login from "./Pages/auth/Login.jsx";
import Register from "./Pages/auth/Register.jsx";
import Dashboard from "./Pages/dashboard/dashboard";
import DashHome from "./Pages/dashboard/Home.jsx";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:page" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;
