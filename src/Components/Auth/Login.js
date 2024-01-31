import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import "../Auth/Auth.css";

const Login = () => {
 
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

 
  const handleLogin = (e) => {
    e.preventDefault(); 
    console.log(formData);
    setFormData({
      username: '',
      password: ''
    });
    
  };

  return (
    <div className="auth-page">
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formemail">
          <Form.Control
            type="email"
            name="username"
            placeholder="Enter email"
            value={formData.username}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button className="button" type="submit">
          Login
        </Button>
        <div className="signup-link">
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default Login;
