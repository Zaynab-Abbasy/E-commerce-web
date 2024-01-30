import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[
            <Header key="header" />,
            <Footer key="footer" />,
          ]}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
