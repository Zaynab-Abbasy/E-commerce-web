import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "../Auth/Auth.css";

const Signup = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Function to update form input values as user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSignup = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Log form data to console
    console.log(formData);
    // Reset form data
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="auth-page">
      <h2>Sign Up</h2>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formUserName">
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter User Name"
            value={formData.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </Form.Group>
        <Button className="button" type="submit">
          Sign Up
        </Button>
      </Form>
      <div className="signup-link">
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
