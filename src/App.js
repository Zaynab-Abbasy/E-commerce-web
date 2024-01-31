import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Auth/Login";
import Home from "./Components/Home";
import Signup from "./Components/Auth/Signup";
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
