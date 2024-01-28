import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../signup.css";
import signupImage from "../../images/signup.jpg"; // Import the image

const Signup = ({ show, handleClose }) => {
  return (
    <div className={`popup ${show ? "active" : ""}`}>
      <div className="popup-inner">
        <div className="log_res">
          <form className="font">
            <h2>Welcome</h2>
            <p>Create an account</p>

            <div className="horizontal-group">
              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="inputUserName">User Name</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    id="inputUserName"
                    placeholder="Enter User Name"
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="inputEmail">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Enter Email"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="horizontal-group">
              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="inputPassword">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Enter Password"
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="inputConfirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    id="inputConfirmPassword"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
              </div>
            </div>

            <Button className="button" type="submit">
              Sign Up
            </Button>

            <p>
              By clicking "Sign Up" you agree to the our terms and conditions.
              <br />
              To see how we may use your information, take a look at our privacy
              policy.
            </p>

            <p>
              Already have an account? <Link to="/login">Sign In</Link>
            </p>

            <Button className="button" onClick={handleClose}>
              Close
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
