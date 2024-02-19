import React, { useState } from "react";
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
import Cart from "./Components/Shop/Cart";
import useBasket from "./Components/Shop/useBasket";
import { Container } from "react-bootstrap";

function App() {
  // Initialize the useBasket hook
  const[cart,setCart]=useState([])
  const[warning,setwarning]=useState(false)
  const[show,setShow]=useState(true);
  const handleClick = (val) => {
    console.log(val);
  
    let isPresent = false;
    cart.forEach((product) => {
      if (val.id === product.id)
        isPresent = true;
    });
  
    if (isPresent) {
      setwarning(true);
      setTimeout(() => {
        setwarning(false);
      }, 2000);
      return;
    }
  
    setCart([...cart, val]);
  }
  
  const handleChange = (val, d) => {
    const updatedCart = cart.map((item) => {
      if (item.id === val.id) {
        const updatedAmount = item.amount + d;
        return { ...item, amount: updatedAmount > 0 ? updatedAmount : 1 };
      }
      return item;
    });
    setCart(updatedCart);
  }
  
  return (
    <div>
      <BrowserRouter>
  <Header size={cart.length} />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/product-details/:id" element={<Product_details handleClick={handleClick} />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/dinning" element={<Dinning handleClick={handleClick} />} />
    <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
  </Routes>
  {/* Render the warning message outside of the Routes */}
  {warning && <div className="warning">Item is already in your cart</div>}
  <Footer />
</BrowserRouter>

    </div>
  );
}

export default App;
