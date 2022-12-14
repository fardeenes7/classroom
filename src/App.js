import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/landing/Home.jsx";
import Login from "./Pages/auth/Login.jsx";
import Register from "./Pages/auth/Register.jsx";
import Dashboard from "./Pages/dashboard/dashboard";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dash" element={<Dashboard />} />
      <Route path="/dash/:page" element={<Dashboard />} />
      <Route path="/dash/:page/:subpage" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;
