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
import Dinning from "./Components/Categories/Dinning";
import Product_details from "./Components/Single_product.js/Product_details";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product-details/:id" element={<Product_details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dinning" element={<Dinning />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
