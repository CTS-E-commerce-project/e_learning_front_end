import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    userName: "",
    userEmail: "",
    password: "",
  });

  const navigate = useNavigate();

  // const [uploadStatus, setUploadStatus] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9090/api/eLearning/v1/createUser",
        formData
      );
      // setUploadStatus(response.data);
      console.log(response);
      toast.success("Registration Successfull");

      navigate("/", {replace: true});
      // Handle success, show message, redirect, etc.
    } catch (error) {
      console.error("Registration failed:", error.response.data);
      // setUploadStatus("Registration failed: ID does not exists");
      toast.error("Registration Failed");
      // Handle error, show error message, etc.
    }

    setFormData({
      phoneNumber: "",
      userName: "",
      userEmail: "",
      password: "",
    });
  };

  return (
    <>
      <div>
        <Navbar heading="E Learning App" name="Login" path="/" />
      </div>
      <div className="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label for="username">Username</label>
                    <input
                      class="form-control"
                      type="text"
                      id="username"
                      name="userName"
                      placeholder="Enter the Username"
                      value={formData.userName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      class="form-control"
                      type="email"
                      id="email"
                      name="userEmail"
                      placeholder="Enter the Email ID"
                      value={formData.userEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="phoneNumber">Phone Number</label>
                    <input
                      class="form-control"
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Enter the Phone Number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      class="form-control"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter the Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" class="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <p>{uploadStatus}</p> */}

        {/* <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
      </form> */}
      </div>
    </>
  );
};

export default RegistrationForm;
