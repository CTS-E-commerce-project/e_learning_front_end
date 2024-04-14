import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import { toast } from "react-toastify";

function ResetPassword() {
  const [password, setPassword] = useState("");
  // const [message, setMessage] = useState("");
  const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9090/api/eLearning/v1/reset-password",
        {
          password: password,
          token: token,
        }
      );
      // setMessage(response.data);
      console.log(response.data);
      toast.success("Password Changed Successfully");
    } catch (error) {
      // setMessage(error.response.data);
      toast.error(error.response.data);
    }
    setPassword("");
  };
  return (
    <>
      <div>
        <Navbar heading="Reset Password" name="Login" path="/" />
      </div>
      <div className="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">
                      Enter the New Password
                    </label>
                    <input
                      class="form-control"
                      type="password"
                      placeholder="Enter the Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" class="btn btn-primary">
                      Reset Password
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

export default ResetPassword;
