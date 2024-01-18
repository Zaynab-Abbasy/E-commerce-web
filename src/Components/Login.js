import React, { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Header.css";
const Login = ({ show, handleClose }) => {
  return (
    <div className={`popup ${show ? "active" : ""}`}>
    <div className="popup-inner">
      <div className="log_res">
        <Form 
        //onSubmit={handleLogin} method="POST"
        >
          <Form.Group className="mb-3" controlId="formemail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="username" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Login
          </Button>
          <div className="signup-link">
            <p>
              Don't have an account?{" "}
              <a href="#" 
              //onClick={toggleSignup}
              >
                Sign Up
              </a>
            </p>
          </div>
          <Button variant="dark"  className="btn"
          //onClick={handleClose}
          
          >
            Close
          </Button>
        </Form>
      </div>
    </div>
  </div>
);
};

export default Login;
