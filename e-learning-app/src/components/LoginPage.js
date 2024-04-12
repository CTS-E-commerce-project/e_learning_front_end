import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Style.css";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9090/api/eLearning/v1/Login",
        {
          phoneNumber: phoneNumber,
          password: password,
        }
      );
      // setUploadStatus(response.data);
      if (response.data !== null) {
        if (response.data.password === password) {
          console.log(response.data);
          toast.success("Login Successfull");
          navigate("/homePage", { replace: true });
        } else {
          toast.error("Login Failed");
        }
      }

      // Handle success, show message, redirect, etc.
    } catch (error) {
      console.error("Login failed:", error.response.data);
      // setUploadStatus("Registration failed: ID does not exists");
      toast.error("Login Failed");
      // Handle error, show error message, etc.
    }
  };

  return (
    <>
      <div>
        <Navbar heading="E Learning App" name="Register" path="/register" />
      </div>

      <div className="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Phone Number</label>
                    <div className="input-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter the Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <div className="input-group">
                      <input
                        class="form-control"
                        type="password"
                        placeholder="Enter the Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fas fa-lock"></i>
                        </span>
                      </div>
                    </div>

                    {/* <small id="emailHelp" class="form-text text-muted">
              We'll never share your password with anyone else.
            </small> */}
                  </div>
                  <div className="text-center">
                    <button type="submit" class="btn btn-primary">
                      Login
                    </button>
                  </div>
                  {/* <div className="text-center m-3">
            <Link className="btn btn-warning" to={`/forgotpassword`}>
              Forgot Password
            </Link>
          </div> */}
                </form>
              </div>
              <div class="card-footer text-center">
                <Link className="btn btn-link" to={`/forgotpassword`}>
                  Forgot Password ?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
