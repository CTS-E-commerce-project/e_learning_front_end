import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { toast } from "react-toastify";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email);
      const response = await axios.post(
        "http://localhost:9090/api/eLearning/v1/forgot-password",
        { email: email }
      );
      // setMessage(response.data);
      toast.success("Check your mail to rest the password!!");
      console.log(response.data);
      if(response.data === null){
        toast.error("Email ID does not exists");
      }
    } catch (error) {
      // setMessage("Email ID does not exists");
      toast.error("Email ID does not exists");
    }
    setEmail("");
  };

  return (
    <>
      <div>
        <Navbar heading="Forgot Password" name="Login" path="/" />
      </div>
      <div className="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input
                      name="email"
                      class="form-control"
                      type="email"
                      placeholder="Enter the Email ID"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <p>{message}</p> */}
      </div>
    </>
  );
}

export default ForgetPassword;
